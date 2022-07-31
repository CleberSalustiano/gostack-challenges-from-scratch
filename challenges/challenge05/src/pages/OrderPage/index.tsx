import React from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { Container } from './style';

const OrderPage: React.FC = () => {
    return (
        <>
            <Header bold="orders" />
            <Container>
                <h2>Gerenciando encomendas</h2>

                <SearchInput name='inputEncomendas' placeHolder='Buscar por encomendas' />

            </Container>
        </>
    );
};

export default OrderPage;
