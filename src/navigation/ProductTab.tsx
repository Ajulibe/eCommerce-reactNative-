import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductFlowTab from "./ProductFlowTab";
import ProductDetails from "../screens/stackNavScreens/ProductDetails";
import FindProductDetail from "../screens/stackNavScreens/FindProductDetail";
import FilterScreen from "../screens/stackNavScreens/FilterScreen";
import FilterScreen2 from "../screens/stackNavScreens/FilterScreen2";

type RootStackParamList = {
  ProductDetails: undefined;
  ProductFlowTab: undefined;
  FindProductDetail: undefined;
  FilterScreen: undefined;
  FilterScreen2: undefined;
};

const ProductsStack = createStackNavigator<RootStackParamList>();

export default function ProductTab() {
  return (
    <ProductsStack.Navigator headerMode={"none"}>
      <ProductsStack.Screen name="ProductFlowTab" component={ProductFlowTab} />
      <ProductsStack.Screen name="ProductDetails" component={ProductDetails} />
      <ProductsStack.Screen
        name="FindProductDetail"
        component={FindProductDetail}
      />
      <ProductsStack.Screen name="FilterScreen" component={FilterScreen} />
      <ProductsStack.Screen name="FilterScreen2" component={FilterScreen2} />
    </ProductsStack.Navigator>
  );
}
