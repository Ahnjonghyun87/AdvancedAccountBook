import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2ec4b6;
    text-align: center;
    vertical-align: baseline;
    line-height: 1;
  }

  #origin {
  max-width: 1280px !important;
  margin: 0 auto !important;
  padding: 2rem !important;
  text-align: center !important;
  box-sizing: border-box !important;
  }
  
`;

export default GlobalStyle;
