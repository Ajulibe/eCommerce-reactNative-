import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import GetStarted from "../screens/GetStarted";
import SplashScreen from "../screens/SplashScreen";
import PhoneAuth from "../screens/PhoneAuth";
import EnterNumber from "../screens/authScreens/EnterNumber";
import EnterOtp from "../screens/authScreens/EnterOtp";
import EnterLocation from "../screens/authScreens/EnterLocation";
import Signup from "../screens/authScreens/Signup";
import ProductList from "../screens/bottomTabScreens/Shop";
import ProductDetails from "../screens/stackNavScreens/ProductDetails";
import ExploreScreen from "../screens/bottomTabScreens/Explore";
import Cart from "../screens/bottomTabScreens/Cart";
import Favourite from "../screens/bottomTabScreens/Favourite";
import Account from "../screens/bottomTabScreens/Account";

const AuthFlow = createStackNavigator({
  EnterNumber: EnterNumber,
  EnterOtp: EnterOtp,
  EnterLocation: EnterLocation,
  Signup: Signup,
  ProductDetails: ProductDetails,
});

const ProductFlow = createBottomTabNavigator(
  {
    ProductList: ProductList,
    Explore: ExploreScreen,
    Cart: Cart,
    Favourite: Favourite,
    Account: Account,
  },
  {
    tabBarOptions: {
      activeTintColor: "#53B175",
      inactiveTintColor: "#181725",
    },
  }
);

const Products = createStackNavigator(
  {
    ProductFlow: ProductFlow,
    ProductDetails: ProductDetails,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const MainNavigator = createSwitchNavigator({
  Startup: SplashScreen,
  GetStarted: GetStarted,
  Auth: PhoneAuth,
  Register: AuthFlow,
  Products: Products,
});

export default createAppContainer(MainNavigator);
