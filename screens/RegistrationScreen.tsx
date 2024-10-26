import { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { BUTTON, IMAGES, MESSAGE, PLACEHOLDER, TITLE } from "../constants";
import { AddAvatarButtonIcon, RemoveAvatarButtonIcon } from "../icons";
import { Button, Input, Title } from "../components";
import styles from "./stylesScreens";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [avatar, setAvatar] = useState(IMAGES.DEFAULT_AVATAR);
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
      setAvatar(IMAGES.GIRL);
    } else {
      setAvatar(IMAGES.DEFAULT_AVATAR);
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
        {isPasswordVisible === true
          ? BUTTON.PASSWORD_SHOW
          : BUTTON.PASSWORD_HIDE}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image
          source={IMAGES.MAIN_BACKGROUND}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.formContainer}>
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
            />
            <Input
              value={email}
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
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
