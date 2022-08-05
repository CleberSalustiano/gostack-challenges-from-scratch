import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { Container } from "./style";
import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    title?: string;
    placeHolder: string;
    type: string;
}

const Input: React.FC<InputProps> = ({
    name,
    title,
    placeHolder,
    type,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
          name: fieldName,
          ref: inputRef.current,
          path: 'value',
        });
      }, [fieldName, registerField]);

    return (
        <Container>
            <strong>{title}</strong>
            <div>
                <input
                    type={type}
                    ref={inputRef}
                    defaultValue={defaultValue}
                    placeholder={placeHolder}
                    {...rest}
                />
            </div>
        </Container>
    );
};

export default Input;
