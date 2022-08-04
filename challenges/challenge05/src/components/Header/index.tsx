import React from "react";
import { Container, Navigation } from "./style";
import fastFeetLogo from "../../assets/fastfeet-logo.png";
import { Link } from "react-router-dom";

interface HeaderProp {
    bold: "orders" | "couriers" | "recipients" | "problems";
}

const Header: React.FC<HeaderProp> = ({ bold }) => {
    return (
        <Container>
            <div>
                <img src={fastFeetLogo} alt="Logo FastFeet" />
                <Navigation>
                    <ul>
                        <li>
                            {bold === "orders" ? (
                                <Link to="/orders" className="bold">
                                    ENCOMENDAS
                                </Link>
                            ) : (
                                <Link to="/orders">ENCOMENDAS</Link>
                            )}
                        </li>
                        <li>
                            {bold === "couriers" ? (
                                <Link to="/couriers" className="bold">
                                    ENTREGADORES
                                </Link>
                            ) : (
                                <Link to="/couriers">ENTREGADORES</Link>
                            )}
                        </li>
                        <li>
                            {bold === "recipients" ? (
                                <Link to="/recipients" className="bold">
                                    DESTINATÁRIOS
                                </Link>
                            ) : (
                                <Link to="/recipients">DESTINATÁRIOS</Link>
                            )}
                        </li>
                        <li>
                            {bold === "problems" ? (
                                <Link to="/problems" className="bold">
                                    PROBLEMAS
                                </Link>
                            ) : (
                                <Link to="/problems">PROBLEMAS</Link>
                            )}
                        </li>
                    </ul>
                </Navigation>
            </div>
            <div>
                <h1>Admin FastFeet</h1>
                <Link to="/">sair do sistema</Link>
            </div>
        </Container>
    );
};

export default Header;
