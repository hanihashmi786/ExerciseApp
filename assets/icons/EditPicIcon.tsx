import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.416016}
      y={-0.280518}
      width={17.4818}
      height={19.1436}
      fill="#1F2937"
    />
  </Svg>
);
export default SVGComponent;
