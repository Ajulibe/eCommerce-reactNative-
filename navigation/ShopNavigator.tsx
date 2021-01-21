import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GetStarted from "../screens/GetStarted";
import SplashScreen from "../screens/SplashScreen";
import PhoneAuth from "../screens/PhoneAuth";
import EnterNumber from "../screens/auth/EnterNumber";
import EnterOtp from "../screens/auth/EnterOtp";
import EnterLocation from "../screens/auth/EnterLocation";

const AuthFlow = createStackNavigator({
  EnterNumber: EnterNumber,
  EnterOtp: EnterOtp,
  EnterLocation: EnterLocation,
});

const MainNavigator = createSwitchNavigator({
  Startup: SplashScreen,
  GetStarted: GetStarted,
  Auth: PhoneAuth,
  Register: AuthFlow,
});

export default createAppContainer(MainNavigator);
