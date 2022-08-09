import { Form } from "@unform/web";
import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Main } from "./style";

const OrderPageRegister: React.FC = () => {
    return (
        <>
            <Header bold="orders" />
            <Main>
                <form>
                    <div>
                        <h2>Cadastro de encomendas</h2>
                        <Button
                            pageRef="/orders"
                            voltar={true}
                            withArrow={true}
                        >
                            VOLTAR
                        </Button>
                        <button>Salvar</button>
                    </div>
                    <div>
                        <Input
                            name="email"
                            type="text"
                            title="SEU E-MAIL"
                            placeHolder="exemplo@email.com"
                        />
                    </div>
                </form>
            </Main>
        </>
    );
};

export default OrderPageRegister;
