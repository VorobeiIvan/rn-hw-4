import React from "react";
import { SvgUri } from "react-native-svg";

type SvgUriProps = {
  source: string;
  width?: number;
  height?: number;
};

const Icon: React.FC<SvgUriProps> = ({ source, width = 24, height = 24 }) => {
  return <SvgUri width={width} height={height} uri={source} />;
};

export default Icon;
