import React from 'react';
import { Container, Navigation } from './style';
import fastFeetLogo from '../../assets/fastfeet-logo.png';

const Header: React.FC = () => {
    return (
        <Container>
            <div>
                <img src={fastFeetLogo} alt="Logo FastFeet" />
                <Navigation>
                    <ul>
                        <li>
                            <a href="/orders">ENCOMENDAS</a>
                        </li>
                        <li>
                            <a href="/couries">ENTREGADORES</a>
                        </li>
                        <li>
                            <a href="/recipents">DESTINATÁRIOS</a>
                        </li>
                        <li>
                            <a href="/problems">PROBLEMAS</a>
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
