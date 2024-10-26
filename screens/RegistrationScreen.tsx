import { FC, useEffect, useLayoutEffect, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { BUTTON, IMAGES, MESSAGE, PLACEHOLDER, TITLE } from "../constants";
import { AddAvatarButtonIcon, RemoveAvatarButtonIcon } from "../icons";
import { Button, Input, Title } from "../components";
import styles from "./stylesScreens";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../navigation/StackNavigator";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "Signup">;

const RegistrationScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmVisible, setIsConfirmVisible] = useState(true);
  const [selectedInput, setSelelectedInput] = useState<"password" | "confirm">(
    "password"
  );
  const [avatar, setAvatar] = useState(IMAGES.DEFAULT_AVATAR);
  const [isAvatarDefault, setIsAvatarDefault] = useState(true);

  const handleLoginChange = (value: string) => {
    setLogin(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: "Hello world!" });
  }, []);

  const handlePasswordChange = (value: string, isPassword: boolean) => {
    if (isPassword) {
      setPassword(value);
    } else {
      setPasswordConfirm(value);
    }
  };

  const showPassword = (isPassword: "password" | "confirm") => {
    if (isPassword) {
      setIsPasswordVisible((prev) => !prev);
      const addAvatar = () => {
        if (isAvatarDefault) {
          setAvatar(IMAGES.GIRL);
        } else {
          setAvatar(IMAGES.DEFAULT_AVATAR);
        }
        setIsAvatarDefault((prev) => !prev);
      };
    } else {
      setIsConfirmVisible((prev) => !prev);
    }
  };

  const onLogin = () => {
    if (!login || !email || !password) {
      Alert.alert("Credentials", "All fields are required");
      return;
    }
    Alert.alert("Credentials", `${login} + ${email} + ${password}`);
  };

  const onSignUp = () => {
    console.log("Sign up!");
  };

  const showButton = (
    <TouchableOpacity onPress={() => showPassword(selectedInput)}>
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
         <View style={styles.avatarContainer}>
            <Image source={avatar} resizeMode="contain" style={styles.avatar} />
            <TouchableOpacity
              onPress={addAvatar}
              style={styles.removeAvatarButton}
            >
              {isAvatarDefault === true ? (
                <AddAvatarButtonIcon />
              ) : (
                <RemoveAvatarButtonIcon />
              )}
            </TouchableOpacity>
          </View>

          <Title text={TITLE.MAIN_TITLE_REGISTRATION} />

          <View style={[styles.innerContainer, styles.inputContainer]}>
             <Input
              value={login}
              autofocus={true}
              placeholder={PLACEHOLDER.LOGIN}
              onTextChange={handleLoginChange}
            />              <Input
                value={email}
                 placeholder={PLACEHOLDER.EMAIL}
                onTextChange={handleEmailChange}
              />

              <Pressable onPress={() => setSelelectedInput("password")}>
                <Input
                  value={password}
                   placeholder={PLACEHOLDER.PASSWORD}
                  rightButton={showButton}
                  outerStyles={styles.passwordButton}
                  onTextChange={(value) => handlePasswordChange(value, true)}
                  secureTextEntry={isPasswordVisible}
                />
              </Pressable>

              <Pressable onPress={() => setSelelectedInput("confirm")}>
                <Input
                  value={passwordConfirm}
                  placeholder="Пароль ще раз"
                  rightButton={showButton}
                  outerStyles={styles.passwordButton}
                  onTextChange={(value) => handlePasswordChange(value, false)}
                  secureTextEntry={isConfirmVisible}
                />
              </Pressable>
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onLogin}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                 {BUTTON.REGISTRATION}
                </Text>
              </Button>

              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                 {MESSAGE.ACCOUNT_EXISTS}
                  <TouchableWithoutFeedback onPress={onSignUp}>
                    <Text style={styles.signUpText}> {BUTTON.AUTHORIZATION}</Text>
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

export default RegistrationScreen;

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
//     height: "70%",
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
