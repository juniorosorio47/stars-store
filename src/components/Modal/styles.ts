import styled from 'styled-components';

export const DialogContainer = styled.dialog`
    background-color: white;
    color: var(--text-color);
    text-align: center;
    border: none;
    padding: 2rem;
    box-shadow: 0 0 40px rgba(0,0,0,0.1), 0 0 10px rgba(0,0,0,0.25);
    max-width: 90vw;
    position:absolute;
    margin:auto;
    display:grid;
    grid-gap: 2rem;
    



    &[open]{
        animation: appear .15s cubic-bezier(0, 1.8, 1, 1.8);
    }

    >header{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        background:yellow;

        >h1{
            grid-column:2/3;
        }

        >button{
            justify-self:flex-end;
            font-size:24px;
            display:flex;
            place-items:center;

            &:hover{
                background:red;
            }
        }
    }

    >main{
        img {
            max-width:400px;
        }
    }
`;
