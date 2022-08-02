import React, { ButtonHTMLAttributes } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    pageRef: string;
}

const Button: React.FC<ButtonProps> = ({ pageRef, children }) => {
    return (
        <Container>
            <Link to={pageRef}>
                <FiPlus />
                {children}
            </Link>
        </Container>
    );
};

export default Button;
