import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useRef } from "react";
import Dropzone from "react-dropzone";
import { FiCheck } from "react-icons/fi";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { FormHeader, Main } from "../OrderPageRegister/style";
import { FormBody } from "../RecipientsPageRegister/style";

const CourierPageRegister: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(() => {}, []);

    return (
        <>
            <Header bold="couriers" />
            <Main>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <FormHeader>
                        <h2>Cadastro de encomendas</h2>
                        <div>
                            <Button
                                pageRef="/couriers"
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
                            name="produto"
                            type="text"
                            title="Nome do Produto"
                            placeHolder="Digite o produto"
                        />

                        <Input
                            name="produto"
                            type="text"
                            title="Nome do Produto"
                            placeHolder="Digite o produto"
                        />
                    </FormBody>
                </Form>
            </Main>
        </>
    );
};

export default CourierPageRegister;
