import React, { useEffect, useState } from "react";
import Action from "../../components/Action";
import Button from "../../components/Button";
import Header from "../../components/Header";
import ProfileImage from "../../components/ProfileImage";
import SearchInput from "../../components/SearchInput";
import api from "../../service/api";
import { MainHeader, Main, Table } from "../OrderPage/style";
import { Container } from "./style";

interface CourierProp{
    id: string;
    avatar_id: string;
    name: string;
    email: string;
}

const CourierPage: React.FC = () => {
    const [couriers, setCouriers] = useState<CourierProp[]>();


    const token = localStorage.getItem("FastFeet:token");
    useEffect(() => {
        const loadCouriers = async () => {
            const { data } = await api.get("/couriers", {
                headers: {
                    authorization: token as string,
                },
            });
            setCouriers(data);
        };

        loadCouriers();
    }, [token]);


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
                            {couriers &&
                            couriers.map((courier) => {
                                return (
                                    <tr key={courier.id}>
                                        <td>{courier.id}</td>
                                        <td>
                                            {courier.avatar_id && (
                                                <>{courier.avatar_id}</>
                                            )}
                                            {courier.avatar_id ==
                                                null && <ProfileImage />}
                                        </td>
                                        <td>{courier.name}</td>
                                        <td>{courier.email}</td>
                                        <td>
                                            <Action typeAction="orders"></Action>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Main>
            </Container>
        </>
    );
};

export default CourierPage;
