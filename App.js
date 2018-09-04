import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./Component/HomeScreen";
import SettingScreen from "./Component/Settings";

export default class App extends React.Component {
  render() {
    return <AppTabNavigator />;
  }
}

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "Settings",
    order: ["Settings", "Home"],
    navigationOptions: {
      tabBarVisible: true
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTinitColor: "grey"
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
