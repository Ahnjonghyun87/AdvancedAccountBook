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

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
