import React from "react";
import { Container } from "./style";
import LogoGrande from "../../assets/fastfeet-logo@2x.png"
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignInPage : React.FC = () => {
    return <Container>
        <div>
            <img src={LogoGrande} alt="logo" />
            <Input type="text" title="SEU E-MAIL" placeHolder="exemplo@email.com" />
            <Input type="password" title="SUA SENHA" placeHolder="*****************" />
            <Button pageRef="/orders">Entrar no Sistema</Button>
        </div>
    </Container>
}

export default SignInPage;