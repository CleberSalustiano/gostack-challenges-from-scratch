import React, { useCallback, useEffect, useState } from "react";
import Action from "../../components/Action";
import Button from "../../components/Button";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import Status from "../../components/Status";
import { MainHeader, Main, Table, Tbody } from "./style";
import ProfileImage from "../../components/ProfileImage";
import api from "../../service/api";
import NoteVisualization from "../../components/NoteVisualization";

export interface OrderProp {
    recipient: { name: string; state: string; city: string, cep: string, number:string };
    courier: { name: string; avatar_id: string };
    id: string;
    signature_id: string;
    start_date: string;
    end_date: string;
    canceled_at: string;
}

export interface ActionDataProps {
    isDataAction: boolean;
    id: string;
}

const OrderPage: React.FC = () => {
    const [orders, setOrders] = useState<OrderProp[]>();

    const [deleted, setDeleted] = useState<ActionDataProps>({
        isDataAction: false,
        id: "",
    });

    const [isVisualizationVisible, setIsVisualizationVisible] = useState<ActionDataProps>({
        isDataAction: false,
        id: "",
    });

    const token = localStorage.getItem("FastFeet:token");

    useEffect(() => {
        const loadOrders = async () => {
            const { data } = await api.get("/orders", {
                headers: {
                    authorization: token as string,
                },
            });
            setOrders(data);
        };

        loadOrders();
    }, [token]);

    useEffect(() => {
        if (deleted.isDataAction === true) {
            const newOrders = orders?.filter(
                (order) => order.id !== deleted.id,
            );
            setOrders(newOrders);
        }
    }, [deleted, orders]);

    return (
        <>
            <Header bold="orders" />
            <Main>
                {isVisualizationVisible.isDataAction && <NoteVisualization setVisible={setIsVisualizationVisible} order={(orders && orders.find(order => order.id === isVisualizationVisible.id))}/>}
                <MainHeader>
                    <div>
                        <h2>Gerenciando encomendas</h2>
                        <SearchInput
                            name="inputOrder"
                            placeHolder="Buscar por encomendas"
                        />
                    </div>

                    <Button pageRef="/orders/register" withPlus={true}>
                        CADASTRAR
                    </Button>
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
                        {orders &&
                            orders.map((order) => {
                                return (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.recipient.name}</td>
                                        <td>
                                            {order.courier.avatar_id && (
                                                <>{order.courier.avatar_id}</>
                                            )}
                                            {order.courier.avatar_id ==
                                                null && <ProfileImage />}
                                            {order.courier.name}
                                        </td>
                                        <td>{order.recipient.city}</td>
                                        <td>{order.recipient.state}</td>
                                        <td>
                                            <Status
                                                start_date={order.start_date}
                                                canceled_at={order.canceled_at}
                                                end_date={order.end_date}
                                            />
                                        </td>
                                        <td>
                                            <Action
                                                typeAction="orders"
                                                id={order.id}
                                                setDeleted={setDeleted}
                                                setVisualizationVisible={setIsVisualizationVisible}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                    </Tbody>
                </Table>
            </Main>
        </>
    );
};

export default OrderPage;
