import React, { ButtonHTMLAttributes } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    pageRef: string;
    withPlus?: boolean;
}

const Button: React.FC<ButtonProps> = ({ pageRef, children, withPlus }) => {
    return (
        <Container>
            <Link to={pageRef}>
                {withPlus && <FiPlus />}
                {children}
            </Link>
        </Container>
    );
};

export default Button;
