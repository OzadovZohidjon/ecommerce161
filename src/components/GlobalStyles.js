import { createGlobalStyle } from "styled-components";
import { mainFont } from "../utils/constants";

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

    .wrapper{
        position: relative;
        width: 100%;
        min-height: 100vh;
    }
`