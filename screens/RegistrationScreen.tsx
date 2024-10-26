import { useState } from "react";
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
import { colors } from "../styles/global";
import Input from "../components/Input";
import Button from "../components/Button";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [avatar, setAvatar] = useState(
    require("../assets/images/default-avatar.png")
  );
  const [isAvatarDefault, setIsAvatarDefault] = useState(true);

  const handleLoginChange = (value: string) => {
    setLogin(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const addAvatar = () => {
    if (isAvatarDefault) {
      setAvatar(require("../assets/images/avatar.jpg"));
    } else {
      setAvatar(require("../assets/images/default-avatar.png"));
    }
    setIsAvatarDefault((prev) => !prev);
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
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>
        {isPasswordVisible ? "Сховати" : "Показати"}
      </Text>
    </TouchableOpacity>
  );

  const avatarButtonStyle = isAvatarDefault
    ? styles.addAvatarButton
    : styles.removeAvatarButton;

  const avatarTextColor = isAvatarDefault ? colors.orange : colors.border_gray;
  const borderColor = isAvatarDefault ? colors.orange : colors.border_gray;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image
          source={require("../assets/images/background.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <Image source={avatar} resizeMode="contain" style={styles.avatar} />
            <TouchableOpacity
              onPress={addAvatar}
              style={[avatarButtonStyle, { borderColor }]}
            >
              <Image
                source={
                  isAvatarDefault
                    ? require("../assets/images/add.png")
                    : require("../assets/images/remove.png")
                }
                resizeMode="cover"
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Реєстрація</Text>

          <View style={[styles.innerContainer, styles.inputContainer]}>
            <Input
              value={login}
              autofocus={true}
              placeholder="Логін"
              onTextChange={handleLoginChange}
            />
            <Input
              value={email}
              placeholder="Адреса електронної пошти"
              onTextChange={handleEmailChange}
            />
            <Input
              value={password}
              placeholder="Пароль"
              rightButton={showButton}
              outerStyles={styles.passwordButton}
              onTextChange={handlePasswordChange}
              secureTextEntry={isPasswordVisible}
            />
          </View>

          <View style={[styles.innerContainer, styles.buttonContainer]}>
            <Button onPress={onLogin}>
              <Text style={[styles.baseText, styles.loginButtonText]}>
                Зареєструватися
              </Text>
            </Button>

            <View style={styles.signUpContainer}>
              <Text style={[styles.baseText, styles.passwordButtonText]}>
                Вже є акаунт?
                <TouchableWithoutFeedback onPress={onSignUp}>
                  <Text style={styles.signUpText}> Увійти</Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

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
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  formContainer: {
    height: "60%",
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  loginButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  passwordButtonText: {
    color: colors.blue,
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
    backgroundColor: colors.light_gray,
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  avatarContainer: {
    position: "relative",
    alignSelf: "center",
    marginTop: -92,
    marginBottom: 32,
  },
  addAvatarButton: {
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 1,
    position: "absolute",
    bottom: 12,
    right: -12,
  },
  removeAvatarButton: {
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 1,
    position: "absolute",
    bottom: 12,
    right: -12,
    backgroundColor: colors.light_gray,
  },
  addAvatarButtonText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
