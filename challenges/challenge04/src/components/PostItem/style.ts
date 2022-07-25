import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 1em #ddd;
    header {
        display: flex;
        height: 32px;

        img {
            width: 32px;
            border-radius: 50%;
            margin-right: 10px;
        }

        h2 {
            font-size: 16px;
            margin-bottom: 2px;
        }

        p {
            font-size: 12px;
            color: #777;
        }

        margin-bottom: 15px;
    }
    p {
        margin-bottom: 20px ;
        
    }
    
    & > p::after {
        content: '';
        display: flex;
        max-width: 700px;
        height: 1px;
        background-color: #eee;
        margin-top: 15px;
    }

`;