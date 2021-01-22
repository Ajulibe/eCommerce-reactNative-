import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import GetStarted from "../screens/GetStarted";
import SplashScreen from "../screens/SplashScreen";
import PhoneAuth from "../screens/PhoneAuth";
import EnterNumber from "../screens/auth/EnterNumber";
import EnterOtp from "../screens/auth/EnterOtp";
import EnterLocation from "../screens/auth/EnterLocation";
import Signup from "../screens/auth/Signup";
import ProductList from "../screens/Products/ProductList";

const AuthFlow = createStackNavigator({
  EnterNumber: EnterNumber,
  EnterOtp: EnterOtp,
  EnterLocation: EnterLocation,
  Signup: Signup,
});

const MainNavigator = createSwitchNavigator({
  Startup: SplashScreen,
  GetStarted: GetStarted,
  Auth: PhoneAuth,
  Register: AuthFlow,
  ProductFlow: createBottomTabNavigator({
    ProductList: ProductList,
  }),
});

export default createAppContainer(MainNavigator);
