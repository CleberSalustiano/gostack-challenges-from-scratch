import React from "react";

import { AuthProvider } from "./AuthContext";

interface BaseAppProvider {
    children?: React.ReactNode;
}

const AppProvider: React.FC<BaseAppProvider> = ({ children }) => (
    <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
