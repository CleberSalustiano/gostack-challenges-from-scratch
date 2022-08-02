import styled from "styled-components";

export const Container = styled.header`
    background-color: white;
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;

    div {
        display: flex;
    }

    img {
        max-height: 25px;
        margin-left: 35px;
        padding-right: 30px;
        border-right: 2px solid #eee;
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
            color: #DE3B3B;
            text-decoration: none;
            font-weight: 300; 
            transition: color .2s;

            &:hover {
                color: red;
            }
        }
    }


    .bold {
        font-weight: 700;
        color: #444;
    }

    border-bottom: 1px solid #eee;
`;

export const Navigation = styled.nav`
    margin-left: 30px;
    ul {
        display: flex;
        list-style: none;
        li a {
            margin-right: 20px;
            font-size: 15px;
            color: #777;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: #555;
                &.bold {
                    color: #444;
                }
            }
        }
    }
`;
