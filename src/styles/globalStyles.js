import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins-Regular';
    src: url('fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins-Medium';
    src: url('fonts/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins-SemiBold';
    src: url('fonts/Poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins-Bold';
    src: url('fonts/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  
  /* Styles reset */
  * {
    margin: 0 !important;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.regular};
    background-color: ${({ theme }) => theme.colors.ivory};
    color: ${({ theme }) => theme.colors.terracota};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.medium};
  }
`;

export default GlobalStyles;
