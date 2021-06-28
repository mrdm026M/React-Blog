import { createGlobalStyle } from "styled-components";
// import bgImage from "../assets/images/bg-2.jpg";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --white : white;
    --blue : #4648CA;
    --dark-grey: #1B1B1B;
    --grey: rgb(70,70,70);
    --medium-grey: rgb(150,150,150);
    --light-grey: #F6F6FC;
  }
  body{
    overscroll-behavior-y: none;
  }
  html{
    font-family: 'MR';
    font-size: 1rem;
    background-color: var(--white);
    height: 100%;
    cursor: context-menu;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`;
export default GlobalStyles;
