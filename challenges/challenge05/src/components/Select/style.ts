import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    select {
        text-decoration: none;
        border: none;
        width: 100%;
        background-color: white;
        color: #777;
        font-size: 14px;
    }

    strong {
        font-size: 14px;
        color: #333;
        margin-bottom: 10px;
    }

    div {
        border: 1px solid #aaa;
        padding: 10px 10px 10px 10px;
        border-radius: 5px;

    }
`