import React from 'react';
import { Container, Navigation } from './style';
import fastFeetLogo from '../../assets/fastfeet-logo.png';

interface HeaderProp {
    bold: 'orders' | 'couriers' | 'recipients' | 'problems';
}

const Header: React.FC<HeaderProp> = ({ bold }) => {
    return (
        <Container>
            <div>
                <img src={fastFeetLogo} alt="Logo FastFeet" />
                <Navigation>
                    <ul>
                        <li>
                            {bold === 'orders' ? (
                                <a href="/orders" className="bold">
                                    ENCOMENDAS
                                </a>
                            ) : (
                                <a href="/orders">ENCOMENDAS</a>
                            )}
                        </li>
                        <li>
                            {bold === 'couriers' ? (
                                <a href="/couriers" className="bold">
                                    ENTREGADORES
                                </a>
                            ) : (
                                <a href="/couriers">ENTREGADORES</a>
                            )}
                        </li>
                        <li>
                            {bold === 'recipients' ? (
                                <a href="/recipients" className="bold">
                                    DESTINATÁRIOS
                                </a>
                            ) : (
                                <a href="/recipients">DESTINATÁRIOS</a>
                            )}
                        </li>
                        <li>
                            {bold === 'problems' ? (
                                <a href="/problems" className="bold">
                                    PROBLEMAS
                                </a>
                            ) : (
                                <a href="/problems">PROBLEMAS</a>
                            )}
                        </li>
                    </ul>
                </Navigation>
            </div>
            <div>
                <h1>Admin FastFeet</h1>
                <a href="/sair">sair do sistema</a>
            </div>
        </Container>
    );
};

export default Header;
