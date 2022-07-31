import React, { ButtonHTMLAttributes } from "react";
import {FiPlus} from "react-icons/fi"
import { Container } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    pageRef: string;
}

const Button : React.FC<ButtonProps> = ({pageRef, children}) => {
    return (
        <Container>
            <FiPlus />
            <a href={pageRef}>
                {children}
            </a>
        </Container>
    )
}

export default Button;