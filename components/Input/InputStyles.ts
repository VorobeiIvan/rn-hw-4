import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, FONTS, LINE_HEIGHTS } from "../../constants";

const styles = StyleSheet.create({
  input: {
    padding: 16,
    height: 50,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.INPUT,
    borderColor: COLORS.BORDER_GRAY,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  baseText: {
    fontWeight: FONTS.WEIGHTS.REGULAR,
    fontSize: FONTS.SIZES.TEXT,
    lineHeight: LINE_HEIGHTS.TEXT,
    color: COLORS.BLACK_PRIMARY,
  },
  focused: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.ORANGE,
  },
});

export default styles;
