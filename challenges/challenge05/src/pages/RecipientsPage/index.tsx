import React from "react";
import Action from "../../components/Action";
import Button from "../../components/Button";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import { Main, MainHeader, Table } from "../OrderPage/style";

const RecipientsPage: React.FC = () => {
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
                        <tr>
                            <td>#01</td>
                            <td>Ludwig Van Beethonven</td>
                            <td>Rua Beethonven, 1992, Diadema - Bahia</td>
                            <td><Action typeAction="recipients" /></td>
                        </tr>
                        <tr>
                            <td>#01</td>
                            <td>Ludwig Van Beethonven</td>
                            <td>Rua Beethonven, 1992, Diadema - Bahia</td>
                            <td><Action typeAction="recipients" /></td>
                        </tr>
                        <tr>
                            <td>#01</td>
                            <td>Ludwig Van Beethonven</td>
                            <td>Rua Beethonven, 1992, Diadema - Bahia</td>
                            <td><Action typeAction="recipients" /></td>
                        </tr>
                        <tr>
                            <td>#01</td>
                            <td>Ludwig Van Beethonven</td>
                            <td>Rua Beethonven, 1992, Diadema - Bahia</td>
                            <td><Action typeAction="recipients" /></td>
                        </tr>
                    </tbody>
                </Table>
            </Main>
        </>
    );
};

export default RecipientsPage