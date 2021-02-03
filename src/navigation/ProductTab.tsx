import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductFlowTab from "./ProductFlowTab";
import ProductDetails from "../screens/Products/ProductDetails";

type RootStackParamList = {
  ProductDetails: undefined;
  ProductFlowTab: undefined;
};

const ProductsStack = createStackNavigator<RootStackParamList>();

export default function ProductTab() {
  return (
    <ProductsStack.Navigator headerMode={"none"}>
      <ProductsStack.Screen name="ProductFlowTab" component={ProductFlowTab} />
      <ProductsStack.Screen name="ProductDetails" component={ProductDetails} />
    </ProductsStack.Navigator>
  );
}
