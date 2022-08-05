import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
} from "react";

import api from "../service/api";

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextState {
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>
    signOut(): void;
}

interface BaseLayoutProps {
    children?: ReactNode;
}

interface AuthState {
    token: string;
    user: object;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC<BaseLayoutProps> = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem("FastFeet:token");
        const user = localStorage.getItem("FastFeet:user");

        if (token && user) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });
    const signIn = useCallback(
        async ({ email, password }: SignInCredentials) => {
            const response = await api.post("/session", { email, password });

            const { token, user } = response.data;

            localStorage.setItem("FastFeet:token", token);
            localStorage.setItem("FastFeet:user", JSON.stringify(user));

            setData({ token, user });
        },
        [],
    );
    const signOut = useCallback(() => {
        localStorage.removeItem("FastFeet:token");
        localStorage.removeItem("FastFeet:user");

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextState {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAth must be used within an AuthProvider");
    }

    return context;
}

export { AuthProvider, useAuth };
