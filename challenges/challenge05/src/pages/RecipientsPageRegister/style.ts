import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    padding: 30px 20px;
    border-radius: 7px;

    div {
        display: flex;
        width: 100%;
        
        div{
            margin-right: 10px;
        }
        
    }

    div:first-child {

        div:first-child {
            flex: 3;
        }

        div {
            margin-right: 10px;
            flex: 1;
        }
    }
`;
