import { createGlobalStyle } from "styled-components";
import CascadiaMonoBold from "../assets/fonts/CascadiaMono-Bold.ttf";
import CascadiaMonoRegular from "../assets/fonts/CascadiaMono-Regular.ttf";
import CascadiaMonoSemiBold from "../assets/fonts/CascadiaMono-SemiBold.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";

import DB from "../assets/fonts/Dosis-Bold.ttf";
import DM from "../assets/fonts/Dosis-Medium.ttf";
import DR from "../assets/fonts/Dosis-Regular.ttf";
import DSB from "../assets/fonts/Dosis-SemiBold.ttf";

import OB from "../assets/fonts/Oswald-Bold.ttf";
import OM from "../assets/fonts/Oswald-Medium.ttf";
import OR from "../assets/fonts/Oswald-Regular.ttf";
import OSB from "../assets/fonts/Oswald-SemiBold.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'CB';
    src: url(${CascadiaMonoBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'CSB';
    src: url(${CascadiaMonoSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'CR';
    src: url(${CascadiaMonoRegular});
    font-style: normal;
  }
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
    font-family: 'DB';
    src: url(${DB});
    font-style: normal;
  }
  @font-face {
    font-family: 'DM';
    src: url(${DM});
    font-style: normal;
  }
  @font-face {
    font-family: 'DR';
    src: url(${DR});
    font-style: normal;
  }
  @font-face {
    font-family: 'DSB';
    src: url(${DSB});
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
