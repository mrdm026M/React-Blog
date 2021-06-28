import { createGlobalStyle } from "styled-components";
import CascadiaMonoBold from "../assets/fonts/CascadiaMono-Bold.ttf";
import CascadiaMonoRegular from "../assets/fonts/CascadiaMono-Regular.ttf";
import CascadiaMonoSemiBold from "../assets/fonts/CascadiaMono-SemiBold.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";

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
`;

export default Typography;
