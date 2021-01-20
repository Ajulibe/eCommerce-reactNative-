import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import GetStarted from "../screens/GetStarted";
import SplashScreen from "../screens/SplashScreen";
import PhoneAuth from "../screens/PhoneAuth";
import EnterNumber from "../screens/auth/EnterNumber";
import EnterOtp from "../screens/auth/EnterOtp";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "gilroy-medium",
  },
  headerBackTitleStyle: {
    fontFamily: "gilroy-medium",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const AuthFlow = createStackNavigator(
  {
    EnterNumber: EnterNumber,
    EnterOtp: EnterOtp,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const MainNavigator = createSwitchNavigator({
  Startup: SplashScreen,
  GetStarted: GetStarted,
  Auth: PhoneAuth,
  Register: AuthFlow,
});

export default createAppContainer(MainNavigator);
