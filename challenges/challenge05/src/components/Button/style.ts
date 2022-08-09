import styled, { css } from "styled-components";

interface ButtonProps {
    voltar ?: boolean;
}

export const Container = styled.div<ButtonProps>`
    svg {
        color: white;
        margin-right: 5px;
    }

    a {
        align-items: center;
        justify-content: center;
        background-color: #7d40e7;
        width: 140px;
        height: 35px;
        text-decoration: none;
        color: white;
        font-weight: 700;
        font-size: 14px;
        display: flex;
        border-radius: 5px;
        ${(props) =>
        props.voltar === true &&
        css`
            background-color: #ccc;
        `}
    }

    
`;
