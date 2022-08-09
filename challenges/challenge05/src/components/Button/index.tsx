import React, { ButtonHTMLAttributes } from "react";
import { FiPlus, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    pageRef: string;
    withPlus?: boolean;
    withArrow?: boolean
    voltar?: boolean;
}

const Button: React.FC<ButtonProps> = ({ pageRef, children, withPlus, withArrow, voltar }) => {
    return (
        <Container voltar={voltar}>
            <Link to={pageRef}>
                {withPlus && <FiPlus />}
                {withArrow && <FiArrowLeft />}
                {children}
            </Link>
        </Container>
    );
};

export default Button;
