import styled, { css } from "styled-components";

interface StatusProps {
    status: "PENDENTE" | "ENTREGUE" | "RETIRADA" | "CANCELADA";
}

export const Container = styled.div<StatusProps>`
    padding: 2px;
    display: inline-flex;
    align-items: center;
    background-color: #bad2ff;
    color: #4d85ee;
    border-radius: 10px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    padding-right: 5px;

    svg {
        margin-right: 5px;
        margin-left: 2px;
        background-color: #4d85ee;
        border-radius: 50%;
        width: 12px;
        height: 12px;
    }

    ${(props) =>
        props.status === "ENTREGUE" &&
        css`
            background-color: #dff0df;
            color: #2ca42b;

            svg {
                background-color: #2ca42b;
            }
        `}

    ${(props) =>
        props.status === "PENDENTE" &&
        css`
            background-color: #f0f0df;
            color: #c1bc35;

            svg {
                background-color: #c1bc35;
            }
        `}

    ${(props) =>
        props.status === "CANCELADA" &&
        css`
            background-color: #fab0b0;
            color: #de3b3b;

            svg {
                background-color: #de3b3b;
            }
        `}
`;
