import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={9}
    height={5}
    viewBox="0 0 9 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.28809 0.814453L4.67809 4.20445L8.06809 0.814453"
      stroke="#D0D5DD"
      strokeWidth={1.13}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
