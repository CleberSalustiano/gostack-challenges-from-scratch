import React from "react";
import { Container } from "./style";

interface InputProps {
    title?: string;
    placeHolder: string;
    type: string;
}

const Input: React.FC<InputProps> = ({ title, placeHolder, type }) => {
    return (
        <Container>
            <strong>{title}</strong>
            <div>
                <input type={type} placeholder={placeHolder} />
            </div>
        </Container>
    );
};

export default Input;
