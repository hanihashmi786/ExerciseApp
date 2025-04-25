import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={38}
    height={38}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={38} height={38} rx={5} fill="#070707" />
    <G clipPath="url(#clip0_321_1990)">
      <Path
        d="M9.83301 19L18.6717 23.4194C18.792 23.4795 18.8521 23.5096 18.9152 23.5214C18.971 23.5319 19.0283 23.5319 19.0842 23.5214C19.1473 23.5096 19.2074 23.4795 19.3276 23.4194L28.1663 19M9.83301 23.5834L18.6717 28.0027C18.792 28.0628 18.8521 28.0929 18.9152 28.1047C18.971 28.1152 19.0283 28.1152 19.0842 28.1047C19.1473 28.0929 19.2074 28.0628 19.3276 28.0027L28.1663 23.5834M9.83301 14.4167L18.6717 9.99733C18.792 9.93721 18.8521 9.90714 18.9152 9.89531C18.971 9.88483 19.0283 9.88483 19.0842 9.89531C19.1473 9.90714 19.2074 9.93721 19.3276 9.99733L28.1663 14.4167L19.3276 18.836C19.2074 18.8962 19.1473 18.9262 19.0842 18.9381C19.0283 18.9485 18.971 18.9485 18.9152 18.9381C18.8521 18.9262 18.792 18.8962 18.6717 18.836L9.83301 14.4167Z"
        stroke="#D0D5DD"
        strokeWidth={1.83333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_321_1990">
        <Rect width={22} height={22} fill="white" transform="translate(8 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
