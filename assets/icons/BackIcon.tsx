import * as React from "react";
import Svg, { G, Rect, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
    width={38}
    height={41}
    viewBox="0 0 38 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_dddd_323_2113)">
      <Rect
        x={1}
        y={1.12085}
        width={32}
        height={32}
        rx={4.81735}
        fill="#182230"
      />
      <Path
        d="M12.825 18.1208L18.425 23.7208L17 25.1208L9 17.1208L17 9.12085L18.425 10.5208L12.825 16.1208H25V18.1208H12.825Z"
        fill="white"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SVGComponent;
