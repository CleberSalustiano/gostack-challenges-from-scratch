import styled from "styled-components";

export const FormBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    padding: 30px 20px;
    border-radius: 7px;
    justify-content: center;
    align-items: center;

    div {
        width: 100%;
    }

    div:first-child{
        width: 200px;
        height: 200px;
    }

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
