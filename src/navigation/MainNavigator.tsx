import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../screens/GetStarted";
import SplashScreen from "../screens/SplashScreen";
import PhoneAuth from "../screens/PhoneAuth";
import AuthRootStack from "./AuthRootStack";
import ProductTab from "./ProductTab";

type RootStackParamList = {
  SplashScreen: undefined;
  GetStarted: undefined;
  Auth: undefined;
  Register: undefined;
  Products: undefined;
};

const MainStack = createStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="SplashScreen" headerMode={"none"}>
        {/* <MainStack.Screen name="SplashScreen" component={SplashScreen} />
        <MainStack.Screen name="GetStarted" component={GetStarted} />
        <MainStack.Screen name="Auth" component={PhoneAuth} />
        <MainStack.Screen name="Register" component={AuthRootStack} /> */}
        <MainStack.Screen name="Products" component={ProductTab} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
