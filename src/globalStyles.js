import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  body {
    background-color: #2ec4b6;
    text-align: center;
    vertical-align: baseline;
    line-height: 1;
  }

  #root {
    max-width: 800px;
    margin: 0 auto;
    padding: 32px;
    text-align: center;
    box-sizing: initial;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
