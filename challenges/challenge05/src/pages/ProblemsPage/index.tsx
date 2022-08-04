import React from "react";
import Action from "../../components/Action";
import Header from "../../components/Header";
import { Main, MainHeader, Table } from "../OrderPage/style";

const ProblemsPage: React.FC = () => {
    return (
        <>
            <Header bold="problems" />
            <Main>
                <MainHeader>
                    <div>
                        <h2>Gerenciando encomendas</h2>
                    </div>
                </MainHeader>
                <Table>
                    <thead>
                        <tr>
                            <th>Encomenda</th>
                            <th>Problema</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#01</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatibus consequatur cum,
                                quia dolorem unde doloribus consectetur
                            </td>
                            <td>
                                <Action typeAction="problems" />
                            </td>
                        </tr>
                        <tr>
                            <td>#01</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatibus consequatur cum,
                                quia dolorem unde doloribus consectetur
                            </td>
                            <td>
                                <Action typeAction="problems" />
                            </td>
                        </tr>
                        <tr>
                            <td>#01</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatibus consequatur cum,
                                quia dolorem unde doloribus consectetur
                            </td>
                            <td>
                                <Action typeAction="problems" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Main>
        </>
    );
};

export default ProblemsPage;
