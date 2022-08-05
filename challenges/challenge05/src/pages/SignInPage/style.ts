import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #7d40e7;
    align-items: center;
    justify-content: center;
    & > Form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img {
            width: 300px;
            margin-bottom: 60px;
        }

        height: 500px;
        width: 450px;
        background-color: white;
        border-radius: 5px;
    }

    button {
        border: none;
        align-items: center;
        justify-content: center;
        background-color: #7d40e7;
        width: 363px;
            height: 40px;
        text-decoration: none;
        color: white;
        font-weight: 700;
        font-size: 14px;
        display: flex;
        border-radius: 5px;
    }

    p {
        margin-bottom: 20px;
        color: #de3b3b;
    }

`