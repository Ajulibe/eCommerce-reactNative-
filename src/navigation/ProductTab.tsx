import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductFlowTab from "./ProductFlowTab";
import ProductDetails from "../screens/Products/ProductDetails";
import FindProductDetail from "../screens/Products/FindProductDetail";
import FilterScreen from "../screens/Products/FilterScreen";

type RootStackParamList = {
  ProductDetails: undefined;
  ProductFlowTab: undefined;
  FindProductDetail: undefined;
  FilterScreen: undefined;
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
    </ProductsStack.Navigator>
  );
}
