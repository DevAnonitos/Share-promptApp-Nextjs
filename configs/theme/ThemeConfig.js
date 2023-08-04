import { createGlobalStyle} from "styled-components"

export const lightTheme = {
    body: '#f1f1f1',
    text: '#333',
    toggleBorder: '#FFF',
    background: '"#f1f1f1"',
}

export const darkTheme = {
    body: '#111',
    text: '#fff',
    toggleBorder: '#a6e22e',
    background: '#cddcc3',
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }
`
