//App.tsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

import Routes from "./routes";
import AppProvider from "./hook";

const App: React.FC = () => (
    <>
        <AppProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </AppProvider>
        <GlobalStyle />
    </>
);

export default App;
