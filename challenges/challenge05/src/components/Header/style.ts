import styled from 'styled-components';

export const Container = styled.header`
    background-color: white;
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
    }

    img {
        max-height: 25px;
        margin-left: 35px;
    }

    div:last-child {
        margin-right: 20px;
        flex-direction: column;
        align-items: center;
        h1 {
            color: #777;
            font-size: 16px;
            margin-bottom: 5px;
        }

        a {
            color: red;
            text-decoration: none;
        }
    }

    .bold {
        font-weight: 700;
        color: #444;
    }
`;

export const Navigation = styled.nav`
    margin-left: 60px;
    ul {
        display: flex;
        list-style: none;
        li a {
            margin-right: 20px;
            font-size: 15px;
            color: #777;
            text-decoration: none;
        }
    }
`;
