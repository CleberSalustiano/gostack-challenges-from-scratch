import React, { useCallback, useRef, useState } from "react";
import { Container } from "./style";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import LogoGrande from "../../assets/fastfeet-logo@2x.png";
import Input from "../../components/Input";
import { useAuth } from "../../hook/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import {AxiosError} from "axios"

interface SignInData {
    email: string;
    password: string;
}

interface ErrorProp{
    isError: boolean;
    message: string;
}

const SignInPage: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const navigate = useNavigate();
    const [error, setError] = useState<ErrorProp>({isError: false, message: ""});
    const { signIn , user } = useAuth();

    const handleSubmit = useCallback(
        async ({ email, password }: SignInData) => {
            try {
                await signIn({ email, password });
                navigate("/orders");
            } catch (error) {
                if (error instanceof AxiosError) {
                    setError({isError: true, message: error.response?.data.error});
                }
            }
        },
        [signIn, navigate],
    );

    if (user != null) {
        return <Navigate to="/orders" />
    }

    return (
        <Container>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <img src={LogoGrande} alt="logo" />
                {error.isError && <p>{error.message}</p>}
                <Input
                    name="email"
                    type="text"
                    title="SEU E-MAIL"
                    placeHolder="exemplo@email.com"
                />
                <Input
                    name="password"
                    type="password"
                    title="SUA SENHA"
                    placeHolder="*****************"
                />
                <button type="submit">Entrar no Sistema</button>
            </Form>
        </Container>
    );
};

export default SignInPage;
