import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    input {
        text-decoration: none;
        border: none;
        width: 300px;
    }

    input::placeholder{
        color: #777;
    }

    div {
        border: 1px solid #aaa;
        padding: 10px 50px 10px 10px;
        border-radius: 5px;
    }

    strong {
        font-size: 14px;
        color: #333;
        margin-bottom: 10px;
    }

    margin-bottom: 20px;
`