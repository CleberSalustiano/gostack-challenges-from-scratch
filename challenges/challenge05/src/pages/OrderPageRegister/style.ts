import styled from "styled-components";

export const Main = styled.div`
    margin-left: 6%;
    width: 88%;

    a,
    button {
        width: 120px;
    }
`;

export const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 20px;

    div {
        display: flex;
        a {
            margin-right: 20px;
        }
        button {
            background-color: #7d40e7;
            border: none;
            color: white;
            font-weight: 700;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                margin-right: 5px;
            }
            border-radius: 5px;
        }
    }
`;

export const FormBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    padding: 30px 20px;
    border-radius: 7px;

    & > div {
        display: flex;
    }
    
    div > div:first-child {
        margin-right: 20px;
    }

    div:last-child {
        margin-bottom: 0;
    }

`;
