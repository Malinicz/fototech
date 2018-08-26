import { injectGlobal } from 'styled-components';
import theme from './theme';

const primaryRegular = require('assets/fonts/Montserrat-Regular.ttf');
const primarySemiBold = require('assets/fonts/Montserrat-SemiBold.ttf');
const primaryBold = require('assets/fonts/Montserrat-Bold.ttf');
const primaryBlack = require('assets/fonts/Montserrat-Black.ttf');

injectGlobal`
  @font-face {
    font-family: ${theme.primaryFontFamily};
    src: url('${primaryRegular}');
    font-weight: ${theme.fontWeight.regular};
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.primaryFontFamily};
    src: url('${primarySemiBold}');
    font-weight: ${theme.fontWeight.semiBold};
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.primaryFontFamily};
    src: url('${primaryBold}');
    font-weight: ${theme.fontWeight.bold};
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.primaryFontFamily};
    src: url('${primaryBlack}');
    font-weight: ${theme.fontWeight.black};
    font-style: normal;
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: ${theme.primaryFontFamily};
    font-style: normal;
    font-weight: ${theme.fontWeight.regular};
    font-size: 16px;
    color: ${theme.colors.darker};
    background-color: ${theme.colors.brighter};
    overflow-x: hidden;
  }

  button, input, textarea {
    font-family: ${theme.primaryFontFamily};
    font-size: inherit;
    color: inherit;
  }

  a {
    text-decoration: none;
  }

  * {
    border: 0px solid lightgray;
    box-sizing: border-box;
  }

`;
