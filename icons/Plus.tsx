import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Plus = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#212121"
      fillOpacity={0.8}
      fillRule="evenodd"
      d="M20.5 13.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Plus;
