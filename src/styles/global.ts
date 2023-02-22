import { createGlobalStyle } from "styled-components";

const defaultFont =
  "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, #root, body {
    height: 100%;
  }

  body {
    font-family: ${defaultFont};
    background: #f3f6f9;
  }
`;
