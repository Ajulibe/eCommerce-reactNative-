import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationTabProp } from "react-navigation-tabs";

import ProductDescription from "./ProductDescription";

interface Navigation {
  navigation: NavigationTabProp<{ screen: string }>;
}

const ProductDetails: React.FC<Navigation> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.display}>
        <View style={styles.headers}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.navigate("Shop");
            }}
          >
            <Ionicons name="chevron-back-outline" size={24} color="#212121" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.share}>
            <Ionicons name="share-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.productContainer}>
          <Image
            style={styles.products}
            source={require("../../images/images/hdapple.png")}
          />
        </View>
      </View>
      <ProductDescription />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FfFfff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    flex: 1.8,
    width: wp("100%"),
    backgroundColor: "#F2F3F2",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },

  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  back: {
    marginTop: hp("4%"),
    marginLeft: wp("3%"),
  },
  share: {
    marginTop: hp("4%"),
    marginRight: wp("3%"),
  },
  products: {
    resizeMode: "contain",
    height: hp("25%"),
    width: wp("70%"),
  },
  productContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductDetails;
