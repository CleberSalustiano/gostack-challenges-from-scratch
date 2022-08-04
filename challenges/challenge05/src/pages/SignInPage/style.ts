import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #7d40e7;
    align-items: center;
    justify-content: center;
    & > div {
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

    & > div {
        div a {
            width: 363px;
            height: 40px;
        }
    }

`