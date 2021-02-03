import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Shop from "../screens/mainScreens/Shop";
import ExploreScreen from "../screens/mainScreens/Explore";
import Cart from "../screens/mainScreens/Cart";
import Favourite from "../screens/mainScreens/Favourite";
import Account from "../screens/mainScreens/Account";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

type RootStackParamList = {
  Shop: undefined;
  Explore: undefined;
  Cart: undefined;
  Favourite: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function ProductFlowTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#53B175",
        inactiveTintColor: "#181725",
      }}
    >
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={() => ({
          tabBarLabel: "Shop",
          tabBarIcon: ({ color }: any) => (
            <Entypo name="shop" size={18} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={() => ({
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }: any) => (
            <MaterialCommunityIcons
              name="text-search"
              size={20}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }: any) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: "Favourite",
          tabBarIcon: ({ color }: any) => (
            <AntDesign name="hearto" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }: any) => (
            <MaterialCommunityIcons
              name="account-arrow-right-outline"
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
