import { FC, useCallback, useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MESSAGE, BUTTON, PLACEHOLDER, TITLE, IMAGES } from "../constants";
import { Button, Input, Title } from "../components";
import styles from "./stylesScreens";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

// Типізуємо параметри для HomeScreen
type HomeScreenProps = NativeStackScreenProps<StackParamList, "Login">;

const LoginScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onLogin = () => {
    // Alert.alert("Credentials", `${email} + ${password}`);
    navigation.navigate("Home");
  };

  const onSignUp = () => {
    // console.log("Sign up!");
    navigation.navigate("Registration", { userEmail: email });
  };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>
        {isPasswordVisible === true
          ? BUTTON.PASSWORD_SHOW
          : BUTTON.PASSWORD_HIDE}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <Image
          source={IMAGES.MAIN_BACKGROUND}
          resizeMode="cover"
          style={styles.image}
        />

        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <Title text={TITLE.AUTHORIZATION} />

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={email}
                autofocus={true}
                placeholder={PLACEHOLDER.EMAIL}
                onTextChange={handleEmailChange}
              />

              <Input
                value={password}
                placeholder={PLACEHOLDER.PASSWORD}
                rightButton={showButton}
                outerStyles={styles.passwordButton}
                onTextChange={handlePasswordChange}
                secureTextEntry={isPasswordVisible}
              />
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onLogin}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  {BUTTON.AUTHORIZATION}
                </Text>
              </Button>

              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  {MESSAGE.ACCOUNT_NOT_EXISTS}
                  <TouchableWithoutFeedback onPress={onSignUp}>
                    <Text style={styles.signUpText}>{BUTTON.REGISTRATION}</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "flex-end",
//   },
//   innerContainer: {
//     gap: 16,
//   },
//   inputContainer: {
//     marginTop: 32,
//   },
//   buttonContainer: {
//     marginTop: 42,
//   },
//   image: {
//     position: "absolute",
//     top: 0,
//     bottom: 0,
//     height: "100%",
//     width: "100%",
//   },
//   formContainer: {
//     width: SCREEN_WIDTH,
//     height: "55%",
//     backgroundColor: colors.white,
//     borderTopRightRadius: 25,
//     borderTopLeftRadius: 25,
//     paddingHorizontal: 16,
//     paddingTop: 32,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "500",
//     lineHeight: 36,
//     textAlign: "center",
//   },
//   baseText: {
//     fontWeight: "400",
//     fontSize: 16,
//     lineHeight: 18,
//   },
//   loginButtonText: {
//     color: colors.white,
//     textAlign: "center",
//   },
//   passwordButtonText: {
//     color: colors.blue,
//   },
//   passwordButton: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   signUpContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   signUpText: {
//     textDecorationLine: "underline",
//   },
// });
