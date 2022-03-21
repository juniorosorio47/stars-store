import styled from 'styled-components';

export const ButtonLink = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    width: 150px;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color:#121212;
    }

  
`;

export const LogoutButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    width:40px;
    padding:8px;
    color:white;
    border-radius:8px;
    transition: all 0.15s ease-in-out;

    &:hover{
        height:42px;
        width:42px;
        background-color:#121212;
        transition: all 0.15s ease-in-out;

        >svg{
            transition: all 0.15s ease-in-out;
            font-size:19px;
        }
    }
    >svg{
        transition: all 0.15s ease-in-out;
        font-size:18px;
        display:flex;
        place-items:center;
    }

`;




export const NavbarContainer = styled.div`
    background:#444444;
    color: #FFFFFF;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height:60px;
    padding-right:10px;
    padding-left:10px;
    box-shadow:0px 2px 5px rgba(0, 0, 0,0.3);

    >a{
        display:flex;
        justify-content:center;
        align-items:center;
        width:250px;
    }

    >div{
        height:100%;
        width:100%;
        z-index:2;
        display:flex;
        align-items:center;
        justify-content:flex-end;

    }
`;


export const Nav = styled.nav`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-template-rows:1fr;
    justify-content:flex-start;
    align-items:center;
    flex:1;
    max-width:650px;
    height:100%;
  
    ${ButtonLink}{
        
    }
`;

