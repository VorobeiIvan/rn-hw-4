import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "@expo/vector-icons/Ionicons";
import BackButton from "../components/BackButton";
// import MapScreen from "../screens/MapScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import Home from "../icons/Home";
import Profile from "../icons/Profile";
import HomeScreen from "../screens/HomeScreen";
import Plus from "../icons/Plus";
import ProfileScreen from "../screens/ProfileScreen";
import PostsScreen from "../screens/PostsScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }: { navigation: any }) => ({
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        tabBarLabel: "",
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }: { navigation: any }) => ({
          title: "Публікація",
          tabBarIcon: ({ focused }) => <Home />,
        })}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={({ navigation }: { navigation: any }) => ({
          title: "Створити публікацію",
          tabBarIcon: ({ focused }) => <Plus />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }: { navigation: any }) => ({
          title: "Профіль",
          tabBarIcon: ({ focused }) => <Profile />,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
