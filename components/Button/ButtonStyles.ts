import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS } from "../../constants";

const style = StyleSheet.create({
  button: {
    borderRadius: BORDER_RADIUS.BUTTON,
    backgroundColor: COLORS.ORANGE,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});

export default style;
