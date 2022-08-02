import styled, { css } from "styled-components";

interface MenuProps {
    isOpen: boolean;
}

export const Menu = styled.div<MenuProps>`
    position: absolute;
    background-color: white;
    padding: 10px;
    text-align: left;
    border: 1px solid #eee;
    border-radius: 5px;
    visibility: hidden;

    ${(props) => props.isOpen === true && css`
        visibility: visible;
    `}

    div {
        display: flex;
        align-items: center;
        cursor: pointer;

        padding: 7px 25px 7px 0;
        border-bottom: 1px #eee solid;
        svg {
            margin-right: 10px;
        }
        transition: color .2s;

        &:hover {
            color: #333;
        }
    }

    div:first-child {
        padding-top: 0;
    }

    div:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }

`;

export const Container = styled.div`
    svg {
        cursor: pointer;
    }
    display: block;
    justify-content: center;

`;