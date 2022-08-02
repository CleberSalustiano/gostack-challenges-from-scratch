import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f4f4f4;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  /* #root {

  } */

  button {
    cursor: pointer;
  }


  .edit {
        color: #4d85ee;
    }

    .remove {
        color: #de3b3b;
    }

    .view {
        color: #7d40e7;
    }

`;
