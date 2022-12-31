import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', 'Sans-serif';
    }

    body {
        color: ${props => props.theme.colors.textSecondary};
        background-color: ${props => props.theme.colors.backgroundBody};
    }

    :focus {
        border: none
    }
`;