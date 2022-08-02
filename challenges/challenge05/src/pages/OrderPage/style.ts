import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    & > div {
        margin-top: 40px;
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
    border-collapse: separate;
    border-spacing: 0 20px;    

    tr td {
        background-color: white;
        padding: 20px 0;
    }

    tr td:first-child, tr th:first-child {
        padding-left: 20px;
    }

    tr td:last-child, tr th:last-child {
        padding-left: 50px;
        text-align: center;
    }
    
`;
