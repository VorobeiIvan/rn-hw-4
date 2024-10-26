import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { BORDER_RADIUS, COLORS, FONTS, LINE_HEIGHTS } from "../constants";
const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  buttonContainer: {
    marginTop: 42,
    marginBottom: 44,
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  formContainer: {
    width: SCREEN_WIDTH,
    backgroundColor: COLORS.WHITE,
    borderTopRightRadius: BORDER_RADIUS.CONTAINER,
    borderTopLeftRadius: BORDER_RADIUS.CONTAINER,
    paddingHorizontal: 16,
    paddingTop: 32,
  },

  baseText: {
    fontWeight: FONTS.WEIGHTS.REGULAR,
    fontSize: FONTS.SIZES.TEXT,
    lineHeight: LINE_HEIGHTS.TEXT,
  },
  loginButtonText: {
    color: COLORS.WHITE,
    textAlign: "center",
  },
  passwordButtonText: {
    color: COLORS.BLUE,
  },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    textDecorationLine: "underline",
    marginBottom: 46,
  },
  avatar: {
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: BORDER_RADIUS.AVATAR,
    width: 120,
    height: 120,
  },
  avatarContainer: {
    position: "relative",
    alignSelf: "center",
    marginTop: -92,
    marginBottom: 32,
  },

  removeAvatarButton: {
    width: 24,
    height: 24,
    position: "absolute",
    bottom: 12,
    right: -12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
