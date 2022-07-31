import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & > div {
        margin: 40px 0;
    }

    h2 {
        margin-bottom: 45px;
    }
`;

export const Main = styled.main`
    margin-left: 6%;
    width: 88%;
`;

export const Table = styled.table`
    width: 100%;
    align-items: center;
    text-align: left;
    padding-left: 20px;
    background-color: white;
    
    tr {
        background-color: white;
    }
`;
