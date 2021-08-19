import { createGlobalStyle } from "styled-components";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";

import OB from "../assets/fonts/Oswald-Bold.ttf";
import OM from "../assets/fonts/Oswald-Medium.ttf";
import OR from "../assets/fonts/Oswald-Regular.ttf";
import OSB from "../assets/fonts/Oswald-SemiBold.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RB';
    src: url(${RobotoBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'RM';
    src: url(${RobotoMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'RR';
    src: url(${RobotoRegular});
    font-style: normal;
  }

  @font-face {
    font-family: 'OB';
    src: url(${OB});
    font-style: normal;
  }
  @font-face {
    font-family: 'OM';
    src: url(${OM});
    font-style: normal;
  }
  @font-face {
    font-family: 'OR';
    src: url(${OR});
    font-style: normal;
  }
  @font-face {
    font-family: 'OSB';
    src: url(${OSB});
    font-style: normal;
  }
`;

export default Typography;
