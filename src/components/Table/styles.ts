import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    place-items:center;
`;

export const Tbody = styled.tbody`
    
`;

export const Thead = styled.thead`
`;

export const Th = styled.th`
    padding:10px;
    background:#fff;
    text-transform:capitalize;

`;

export const Tr = styled.tr`
    background:${shade(0.05, '#F8F9FA')};
    border:1px solid #000;
    cursor:pointer;
    transition: all 0.2s ease-in;

    &:hover {
        background:${shade(0.1, '#F8F9FA')};
        transition: all 0.2s ease-in;
    }

    &+tr{
        background:#F8F9FA;
    }
`;

export const Td = styled.td`
    overflow-wrap: break-word;
    /* border: 1px solid rgba(0, 0, 0,0.2); */
    max-width:600px;
    min-width:30px;
    width:auto;
    padding:8px;
    text-align:center;
    >img{
        width:200px;
    }  

    button{
        cursor: pointer;
    }
    
`;

export const Table = styled.table`
    width:100%;
    box-shadow:2px 2px 8px rgba(0, 0, 0,0.2);
    border: 1px solid rgba(0, 0, 0,0.2);
`;
