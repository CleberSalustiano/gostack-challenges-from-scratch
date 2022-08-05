import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
};

export default ProtectedRoute;