import "react-native-gesture-handler";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register";
import Home from "./src/Screens/Home";
import CommentsScreen from "./src/Screens/CommentsScreen";
import MapScreen from "./src/Screens/MapScreen";
import HeaderLeftBtn from "./src/components/HeaderLeftBtn/HeaderLeftBtn";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer style={styles.container}>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={() => ({
            title: "Коментарі",
            headerRight: null,
            headerLeft: () => <HeaderLeftBtn />,
          })}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: "Мапа",
            headerRight: null,
            headerLeft: () => <HeaderLeftBtn />,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
