import { StyleSheet, TextStyle } from "react-native";
import { FONTS, LETTER_SPACINGS, LINE_HEIGHTS, COLORS } from "../../constants";

const styles = StyleSheet.create({
  title: {
    fontSize: FONTS.SIZES.TITLE,
    fontWeight: FONTS.WEIGHTS.BOLD,
    lineHeight: LINE_HEIGHTS.TITLE,
    textAlign: "center",
  },
});

export default styles;
