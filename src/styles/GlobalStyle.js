import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --grey-0: #f8f9fa;
    --grey-100: #e9ecef;
    --grey-200: #dee2e6;
    --grey-300: #ced4da;
    --grey-400: #adb5bd;
    --grey-500: #6c757d;
    --grey-600: #495057;
    --grey-700: #343a40;
    --grey-800: #212529;
    --grey-900: #121519;
  }
  body{
    overscroll-behavior-y: none;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  html{
    font-family: 'RR';
    font-size: 1rem;
    background-color: var(--grey-900);
    color: var(--grey-0);
    height: 100%;
    cursor: context-menu;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
export default GlobalStyles;
