import React, { useCallback, useState } from "react";
import Action from "../../components/Action";
import Button from "../../components/Button";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import Status from "../../components/Status";
import { MainHeader, Main, Table, Tbody } from "./style";
import ProfileImage from "../../components/ProfileImage";

const OrderPage: React.FC = () => {
    

    return (
        <>
            <Header bold="orders" />
            <Main>
                <MainHeader>
                    <div>
                        <h2>Gerenciando encomendas</h2>
                        <SearchInput
                            name="inputOrder"
                            placeHolder="Buscar por encomendas"
                        />
                    </div>

                    <Button pageRef="/orders/register" withPlus={true}>CADASTRAR</Button>
                </MainHeader>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Destinatário</th>
                            <th>Entregador</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <Tbody>
                        <tr>
                            <td>#01</td>
                            <td>Ludwig van Beethoven</td>
                            <td>
                                <ProfileImage />
                                John Doe
                            </td>
                            <td>Rio do Sul</td>
                            <td>Santa Catarina</td>
                            <td>
                                <Status status="ENTREGUE" />
                            </td>
                            <td>
                                <Action
                                    typeAction="orders"
                                ></Action>
                            </td>
                        </tr>
                        <tr>
                            <td>#02</td>
                            <td>Ludwig van Beethoven</td>
                            <td>
                                <ProfileImage />
                                John Doe
                            </td>
                            <td>Rio do Sul</td>
                            <td>Santa Catarina</td>
                            <td>
                                <Status status="PENDENTE" />
                            </td>
                            <td>
                                <Action
                                    typeAction="orders"
                                ></Action>
                            </td>
                        </tr>
                    </Tbody>
                </Table>
            </Main>
        </>
    );
};

export default OrderPage;
