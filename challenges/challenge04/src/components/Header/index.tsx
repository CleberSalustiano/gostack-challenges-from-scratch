import React from 'react';
import Container from './style';

import facebookImage from '../../assets/facebook-1.png';

import avatarIcon from '../../assets/icone-de-perfil.png';

const Header: React.FC = () => (
    <Container>
        <img src={facebookImage} />
        <div>
            Meu perfil
            <img src={avatarIcon} />
        </div>
    </Container>
);

export default Header;
