import styled from "styled-components";

export const Container = styled.div`
    div:first-child {
        position: fixed;
        background: black;
        color: white;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 60%;
    }

    div:last-child {
        position: fixed;
        background-color: white;
        border-radius: 5px;
        top: calc(50% - 177px);
        left: calc(50% - 225px);
        width: 450px;
        height: 354px;

        padding: 20px;

        h2 {
            font-size: 16px;
            color: #555;
            margin-bottom: 5px;
        }

        div {
            background-color: #eee;
            width: 100%;
            height: 1px;
            margin: 10px 0 ;
        }

        p {
            font-size: 16px;
            margin: 7px 0;
            color: #555;
        }

        p:last-child {
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
