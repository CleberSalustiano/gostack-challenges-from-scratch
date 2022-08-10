import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useRef } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { FormBody, FormHeader, Main } from "./style";
import { FiCheck } from "react-icons/fi";
import Select from "../../components/Select";

const OrderPageRegister: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(() => {}, []);

    return (
        <>
            <Header bold="orders" />
            <Main>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <FormHeader>
                        <h2>Cadastro de encomendas</h2>
                        <div>
                            <Button
                                pageRef="/orders"
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
                        <div>
                            <Select name="select" title="Texto">
                                <option value="valor1">Valor 1</option>
                                <option value="valor2" selected>
                                    Valor 2
                                </option>
                                <option value="valor3">Valor 3</option>
                            </Select>

                            <Select name="select" title="Texto">
                                <option value="valor1">Valor 1</option>
                                <option value="valor2" selected>
                                    Valor 2
                                </option>
                                <option value="valor3">Valor 3</option>
                            </Select>
                        </div>

                        <Input
                            name="email"
                            type="text"
                            title="SEU E-MAIL"
                            placeHolder="exemplo@email.com"
                        />
                    </FormBody>
                </Form>
            </Main>
        </>
    );
};

export default OrderPageRegister;
