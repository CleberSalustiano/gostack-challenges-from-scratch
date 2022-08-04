import React from "react";
import Action from "../../components/Action";
import Button from "../../components/Button";
import Header from "../../components/Header";
import ProfileImage from "../../components/ProfileImage";
import SearchInput from "../../components/SearchInput";
import { MainHeader, Main, Table } from "../OrderPage/style";
import { Container } from "./style";

const CourierPage: React.FC = () => {
    return (
        <>
            <Container>
                <Header bold="couriers" />
                <Main>
                    <MainHeader>
                        <div>
                            <h2>Gerenciando entregadores</h2>
                            <SearchInput
                                name="inputCourier"
                                placeHolder="Buscar por entregadores"
                            />
                        </div>

                        <Button pageRef="/courier/register" withPlus={true}>CADASTRAR</Button>
                    </MainHeader>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Foto</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#01</td>
                                <td>
                                    <ProfileImage />
                                </td>
                                <td>John Doe</td>
                                <td>example@rocketseat.com</td>
                                <td>
                                    <Action typeAction="couriers" />
                                </td>
                            </tr>
                            <tr>
                                <td>#01</td>
                                <td>
                                    <ProfileImage />
                                </td>
                                <td>John Doe</td>
                                <td>example@rocketseat.com</td>
                                <td>
                                    <Action typeAction="couriers" />
                                </td>
                            </tr>
                            <tr>
                                <td>#01</td>
                                <td>
                                    <ProfileImage />
                                </td>
                                <td>John Doe</td>
                                <td>example@rocketseat.com</td>
                                <td>
                                    <Action typeAction="couriers" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Main>
            </Container>
        </>
    );
};

export default CourierPage;
