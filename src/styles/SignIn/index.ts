import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
    background:#312E38;
    height:100vh;
    display:flex;
    align-items:stretch;

`;

export const Content = styled.div`
    color:#fff;
    display:flex;
    flex-direction:column;
    place-content:center;
    align-items:center;
    width:100%;
    max-width:700px;

    > a {
        color: #ff9000;
        display:flex;
        align-items:center;
        margin-top:24px;
        text-decoration: none;
        transition: color 0.2s;

        svg{
            margin-right: 16px;
        }
    }
`;

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }

    to{
        opacity: 1;
        transform: translateX(0);
    }
`;


export const AnimationContainer = styled.div`
    color:#fff;
    display:flex;
    flex-direction:column;
    place-content:center;
    align-items:center;
    width:100%;
    max-width:700px;

    animation: ${appearFromLeft} 1s;

    img {
        max-width:150px;
    }

    form {
        display:flex;
        flex-direction:column;
        margin:80px 0;
        width:540px;
        text-align:center;
        place-content:center;
        align-items:center;

        h1 {
            margin-bottom:24px;
        }

        a {
            color: #f4ede8;
            display:block;
            margin-top:24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#f4ede8')};
            }

        }

    }
`;

export const Background = styled.div`
    flex:1;
    background: url('http://localhost:8000/api/media/sign-in-background.jpg') no-repeat center;
    background-size: cover;
    filter: grayscale(100%);
`;