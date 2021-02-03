import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EnterNumber from "../screens/auth/EnterNumber";
import EnterOtp from "../screens/auth/EnterOtp";
import EnterLocation from "../screens/auth/EnterLocation";
import Signup from "../screens/auth/Signup";
import ProductTab from "./ProductTab";

type RootStackParamList = {
  EnterNumber: undefined;
  EnterOtp: undefined;
  EnterLocation: undefined;
  Signup: undefined;
  ProductTab: undefined;
};

const AuthStack = createStackNavigator<RootStackParamList>();

export default function AuthRootStack() {
  return (
    <AuthStack.Navigator
      initialRouteName="EnterNumber"
      screenOptions={{ gestureEnabled: false }}
      headerMode={"none"}
    >
      <AuthStack.Screen name="EnterNumber" component={EnterNumber} />
      <AuthStack.Screen name="EnterOtp" component={EnterOtp} />
      <AuthStack.Screen name="EnterLocation" component={EnterLocation} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ProductTab" component={ProductTab} />
    </AuthStack.Navigator>
  );
}
