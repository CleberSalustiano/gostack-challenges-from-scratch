import styled, { css } from "styled-components";
import { StatusProps } from ".";

export const Container = styled.div<StatusProps>`
    padding: 2px;
    display: inline-flex;
    align-items: center;
    background-color: #BAD2FF;
    color: #4D85EE;
    border-radius: 10px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    padding-right: 5px;

    svg {
        margin-right: 5px;
        margin-left: 2px;
        background-color: #4D85EE;
        border-radius: 50%;
        width: 12px;
        height: 12px;
    }

    ${props => props.status === "ENTREGUE" && css`
    `}
`