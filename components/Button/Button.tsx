import { FC } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import style from "./ButtonStyles";

type ButtonProps = {
  children: React.ReactNode;
  buttonStyle?: ViewStyle;
  onPress: () => void;
};

const Button: FC<ButtonProps> = ({ children, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[style.button, buttonStyle]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
