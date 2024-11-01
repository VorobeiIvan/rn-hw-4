import { createStackNavigator } from "@react-navigation/stack";
// import { NativeStackScreenProps } from "@react-navigation/native-stack"; // Правильний імпорт

import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

export type StackParamList = {
  Home: undefined; // Якщо екран не приймає параметрів
  Login: undefined;
  Registration: { userEmail: string }; // Якщо екран приймає параметри
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          title: "",
        }}
      />

      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
