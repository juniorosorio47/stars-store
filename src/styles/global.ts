import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #000; 
        border-radius: 5px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #121212; 
    }
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        max-width:100vw;
    }
    a {
        color: inherit;
        cursor: pointer;
        text-decoration: none; /* no underline */
    }
    
    body {
        background-color:#F7F7F8;
        -webkit-font-smoothing: antialiased;
        height:100%;
        width:100%;
    }
    body, input, button {
        outline: none;
        font-family:'Spartan', sans-serif;
        font-size:16px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight:500;
    }
    p{
        /* font-family: 'Roboto', serif; */
        font-weight:200;
        font-size:16px;
    }
    button {
        cursor:pointer;
        background:none;
        border:none;
    }
`;

