import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={4}
    height={3}
    viewBox="0 0 4 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.79355 2.06832C1.42496 2.06832 1.05638 2.07265 0.687797 2.06832C0.319213 2.064 0.0746916 1.83318 0.073249 1.49633C0.0718064 1.15949 0.300459 0.926508 0.680583 0.922901C1.42737 0.91665 2.17271 0.91665 2.91661 0.922901C3.28303 0.922901 3.5326 1.17463 3.52466 1.49994C3.51673 1.82525 3.2686 2.05967 2.89713 2.06544C2.52566 2.07121 2.16357 2.06832 1.79355 2.06832Z"
      fill="white"
    />
  </Svg>
);
export default SVGComponent;
