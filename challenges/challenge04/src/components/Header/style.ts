import styled from 'styled-components';

const Container = styled.header`
    height: 64px;
    background-color: #4a90e2;
    display: flex;
    align-items: center;
    padding: 0px 42px;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        color: white;
        font-size: 18px;
        font-weight: bold;
        img {
            height: 32px;
            margin-left: 5px;;
        }
    }
`;

export default Container;
