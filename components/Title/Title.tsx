import { FC } from "react";
import { Text } from "react-native";

import styles from "./TitleStyles";

type TitleProps = {
  text?: string;
  children?: React.ReactNode;
};

const Title: FC<TitleProps> = ({ text }, { children }) => {
  return (
    <Text style={styles.title}>
      {text}
      {children}
    </Text>
  );
};

export default Title;
