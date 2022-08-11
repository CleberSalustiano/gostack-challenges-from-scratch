import React, { useEffect, useState } from "react";
import Action from "../../components/Action";
import Header from "../../components/Header";
import api from "../../service/api";
import { Main, MainHeader, Table } from "../OrderPage/style";

interface ProblemsProp {
    id: string;
    delivery_id: string;
    description: string;
}

const ProblemsPage: React.FC = () => {
    const [problems, setProblems] = useState<ProblemsProp[]>();


    const token = localStorage.getItem("FastFeet:token");
    useEffect(() => {
        const loadProblems = async () => {
            const { data } = await api.get("/delivery", {
                headers: {
                    authorization: token as string,
                },
            });
            setProblems(data);
        };

        loadProblems();
    }, [token]);

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
                        {problems && problems.map(problem => (
                            <tr id={problem.id}>
                                <td>{problem.delivery_id}</td>
                                <td>{problem.description}</td>
                                <td>
                                    <Action typeAction="problems" id=""/>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Main>
        </>
    );
};

export default ProblemsPage;
