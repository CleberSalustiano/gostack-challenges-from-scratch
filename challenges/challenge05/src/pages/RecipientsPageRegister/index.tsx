import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useRef } from "react";
import { FiCheck } from "react-icons/fi";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Main } from "../OrderPageRegister/style";
import { FormHeader } from "../OrderPageRegister/style";
import { Container,FormBody } from "./style";

const RecipientsPageRegister: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(() => {}, []);

    return (
        <>
            <Header bold="recipients"></Header>
            <Main>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <FormHeader>
                        <h2>Cadastro de encomendas</h2>
                        <div>
                            <Button
                                pageRef="/recipients"
                                voltar={true}
                                withArrow={true}
                            >
                                VOLTAR
                            </Button>
                            <button>
                                <FiCheck /> SALVAR
                            </button>
                        </div>
                    </FormHeader>
                    <FormBody>
                        <Input
                            name="nome"
                            placeHolder="Digite o nome aqui"
                            type="text"
                            title="Nome"
                        />
                        <Container>
                            <div>
                                <Input
                                    name="nome"
                                    placeHolder="Digite o nome aqui"
                                    type="text"
                                    title="Nome"
                                />
                                <Input
                                    name="nome"
                                    placeHolder="Digite o nome aqui"
                                    type="text"
                                    title="Nome"
                                />
                                <Input
                                    name="nome"
                                    placeHolder="Digite o nome aqui"
                                    type="text"
                                    title="Nome"
                                />
                            </div>
                            <div>
                                <Input
                                    name="nome"
                                    placeHolder="Digite o nome aqui"
                                    type="text"
                                    title="Nome"
                                />
                                <Input
                                    name="nome"
                                    placeHolder="Digite o nome aqui"
                                    type="text"
                                    title="Nome"
                                />
                                <Input
                                    name="nome"
                                    placeHolder="Digite o nome aqui"
                                    type="text"
                                    title="Nome"
                                />
                            </div>
                        </Container>
                    </FormBody>
                </Form>
            </Main>
        </>
    );
};

export default RecipientsPageRegister;
