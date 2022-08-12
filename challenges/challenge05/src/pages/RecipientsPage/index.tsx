import React, { useEffect, useState } from "react";
import Action from "../../components/Action";
import Button from "../../components/Button";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import api from "../../service/api";
import { Main, MainHeader, Table } from "../OrderPage/style";

interface RecipientProp {
    id: string;
    city: string;
    state: string;
    street: string;
    number: string;
    name: string;
}

const RecipientsPage: React.FC = () => {

    const [recipients, setRecipients] = useState<RecipientProp[]>();


    const token = localStorage.getItem("FastFeet:token");
    useEffect(() => {
        const loadRecipients = async () => {
            const { data } = await api.get("/recipients", {
                headers: {
                    authorization: token as string,
                },
            });
            setRecipients(data);
        };

        loadRecipients();
    }, [token]);

    return (
        <>
            <Header bold="recipients" />
            <Main>
                <MainHeader>
                        <div>
                            <h2>Gerenciando destinatários</h2>
                            <SearchInput
                                name="inputOrder"
                                placeHolder="Buscar por destinatários"
                            />
                        </div>

                        <Button pageRef="/recipients/register" withPlus={true}>CADASTRAR</Button>
                    </MainHeader>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipients &&
                            recipients.map((recipient) => {
                                return (
                                    <tr key={recipient.id}>
                                        <td>{recipient.id}</td>
                                        <td>{recipient.name}</td>
                                        <td>{recipient.street + ", " +  recipient.number +", " + recipient.city + " - " + recipient.state }</td>
                                        <td>
                                            <Action typeAction="recipients" id=""></Action>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </Main>
        </>
    );
};

export default RecipientsPage