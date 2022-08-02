import React, { useCallback, useState } from "react";
import Action from "../../components/Action";
import Button from "../../components/Button";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import Status from "../../components/Status";
import { Container, Main, Table } from "./style";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const OrderPage: React.FC = () => {
    const [actionOpen, setActionOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setActionOpen(!actionOpen);
    }, [actionOpen]);

    return (
        <>
            <Header bold="orders" />

            <Main>
                <Container>
                    <div>
                        <h2>Gerenciando encomendas</h2>
                        <SearchInput
                            name="inputEncomendas"
                            placeHolder="Buscar por encomendas"
                        />
                    </div>

                    <Button pageRef="/orders/register">CADASTRAR</Button>
                </Container>
                <Table>
                    <tr>
                        <th>ID</th>
                        <th>Destinatário</th>
                        <th>Entregador</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                    <tr>
                        <td>#01</td>
                        <td>Ludwig van Beethoven</td>
                        <td>John Doe</td>
                        <td>Rio do Sul</td>
                        <td>Santa Catarina</td>
                        <td>
                            <Status status="ENTREGUE" />
                        </td>
                        <td>
                            <Action
                                isOpen={actionOpen}
                                onClick={handleOpen}
                                setIsOpen={handleOpen}
                            >
                                {/* Alterar essa parte depois */}
                                <div><FiEye className="view"/> Visualizar</div>
                                <div><FiEdit2  className="edit"/> Editar</div>
                                <div><FiTrash2 className="remove"/> Excluir</div>
                            </Action>
                        </td>
                    </tr>
                    <tr>
                        <td>#02</td>
                        <td>Ludwig van Beethoven</td>
                        <td>John Doe</td>
                        <td>Rio do Sul</td>
                        <td>Santa Catarina</td>
                        <td>
                            <Status status="PENDENTE" />
                        </td>
                        <td>...</td>
                    </tr>
                </Table>
            </Main>
        </>
    );
};

export default OrderPage;
