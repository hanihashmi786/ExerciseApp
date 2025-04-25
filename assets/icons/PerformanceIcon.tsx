import * as React from "react";
import Svg, {
  Mask,
  Rect,
  G,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";
const PerformanceIcon = (props) => (
  <Svg
    width={21}
    height={25}
    viewBox="0 0 21 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Mask
      id="mask0_316_1450"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={21}
      height={25}
    >
      <Rect
        y={0.778076}
        width={20.1043}
        height={23.4438}
        rx={2.30222}
        fill="url(#pattern0_316_1450)"
      />
    </Mask>
    <G mask="url(#mask0_316_1450)">
      <Rect
        x={-30.9346}
        y={-11.7424}
        width={55.4646}
        height={39.8443}
        rx={2.30222}
        fill="#D9D9D9"
      />
      <Rect
        x={-30.9346}
        y={-11.7424}
        width={55.4646}
        height={39.8443}
        rx={2.30222}
        fill="white"
      />
    </G>
    <Defs>
      <Pattern
        id="pattern0_316_1450"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_316_1450"
          transform="matrix(0.0111111 0 0 0.00952836 0 0.0712238)"
        />
      </Pattern>
      <Image
        id="image0_316_1450"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgElEQVR4nO2ZS27UQBRFWwz4RWIj7IN1wEpgBpkAAiHxkQhryCBiIywggw4DEDAIDHOQhQdNS6jL+JZ97bpn3H2r3vHLc1VnswkhhBBCCCGEsEyAJ3PvoQn4Q2RPJDqyJxQd2ROKjuwJRUd2CcB14AXwjXE8KlqwVYCTkYIj+xDAA/Tk6LcLcBf4WUH0w78WahngCPgUyZUBPkTyvHP5shspB76fcSGYy/cLMjKTR87lk8KcvPhGzOXuARwV5uR0UWsu72V15Aj3j7l8OWYu7+W1ddUGbnS3MOCC/6doLrf+Q9Ap4yiey02CRvKgudwcaCQPnsstzuQzgeT3c9eydslfgafdX8Xc9SxZ8ln3uQpj6vjAqWbbn3yW/fCYSXK/didw/T/2U/bi+wjcrLT+kPP5540bwB3geT8zx1Clk3f2OYiNE8A94JzxVOvkRYvuu/gNcLUEyYsULeziyST3+x7EFHuaoosnldzvfxBT7atmF2+BxzVffIsQDdwGXgE/Bu7tvHsgFfYjuWg4in49cE9XwLtutFTaj+SiYSUauAb8mruLd+m7tZTt2kR3Xfy2VhfXEGQlunB0VO/iVkTfAl4C3/fW/gI8m6KLmxDtBhEd0auCdPSyLhqsdUZjdtFQ5diB6D8aKkGqHDswE6TKsQMzQaocOzATpMqxAzNBqhw7MBOkyrEDM0GqHBlrvWggypGx1osGohwZa71oIMqR4VYYZjky3ArDLEeGW2GY5chwKwyzHBluhWGWI8OtMMxyZLgVhlmODLfCMMuR4VYYZjky3ArDLEeGW2GY5chwKwyzHBluhWGWI8OtMMxyZLgVhllOCCGEEEIIIYQQwqYBfgNSRyb2BAT2GwAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default PerformanceIcon;
