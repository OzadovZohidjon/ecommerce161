import { createGlobalStyle } from 'styled-components'
import { mainFont } from '../utils/constants'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul,
    ol,
    li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    body{
        overflow-x: hidden;
    }

    .wrapper{
        position: relative;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .main{
        flex: 1 1 auto;
    }
`
