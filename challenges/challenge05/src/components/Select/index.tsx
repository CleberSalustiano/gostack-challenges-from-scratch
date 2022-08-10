import React, { SelectHTMLAttributes } from "react";
import { Container } from "./style";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    title: string;
}

const Select: React.FC<SelectProps> = ({ children, title, name, id }) => {
    return (
        <Container>
            <strong>{title}</strong>
            <div>
                <select name="" id="">
                    {children}
                </select>
            </div>
        </Container>
    );
};

export default Select;
