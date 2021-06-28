import { createGlobalStyle } from "styled-components";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import MontserratMedium from "../assets/fonts/Montserrat-Medium.ttf";
import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratSemiBold from "../assets/fonts/Montserrat-SemiBold.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import PoppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'MB';
    src: url(${MontserratBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'MSB';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'MM';
    src: url(${MontserratMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'MR';
    src: url(${MontserratRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'PB';
    src: url(${PoppinsBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'PSB';
    src: url(${PoppinsSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'PM';
    src: url(${PoppinsMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'PR';
    src: url(${PoppinsRegular});
    font-style: normal;
  }
`;

export default Typography;
