import styled from "styled-components";
import { Container } from "../CourierPage/style";

export const Tbody = styled.tbody`
    td:nth-child(3) {
        display: flex;
        align-items: center;
    }
`

export const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & > div {
        margin-top: 40px;
    }

    h2 {
        margin-bottom: 45px;
    }
`;

export const Main = styled.div`
    margin-left: 6%;
    width: 88%;
    
`;

export const Table = styled.table`
    width: 100%;
    align-items: center;
    text-align: left;
    border-collapse: separate;
    border-spacing: 0 20px;
    color: #777;

    td {
        background-color: white;
        padding: 12px 0;
    }

    td, th {
        padding-right: 10px;
    }

    th {
        color: #444;
    }

    td:first-child,
    th:first-child {
        padding-left: 20px;
    }

    td:last-child,
    th:last-child {
        padding-left: 50px;
        text-align: right;
        padding-right: 10px;
    }

    td:last-child{
        padding-right: 25px;
    }

`;