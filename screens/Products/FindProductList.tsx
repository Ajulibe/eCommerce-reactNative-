import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  NavigationTabProp,
  NavigationBottomTabScreenComponent,
} from "react-navigation-tabs";
import Colors from "../../constants/Colors";

const Explore = () => {
  return (
    <View style={styles.exclusive}>
      <View style={styles.productContainer}>
        <Image
          style={styles.products}
          source={require("../../images/images/potato.png")}
        />
        <View style={{ width: "80%" }}>
          <Text style={styles.productname}>Fresh Fruits and Vegetable</Text>
        </View>
      </View>
      <View style={styles.productContainer}>
        <Image
          style={styles.products}
          source={require("../../images/images/apple.png")}
        />
        <View style={{ width: "80%" }}>
          <Text style={styles.productname}>Cooking Oil and Ghee </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exclusive: {
    width: wp("100%"),
    borderWidth: 10,
    borderColor: "red",
    flexDirection: "row",
    height: hp("80%"),
    justifyContent: "space-around",
  },
  products: {
    resizeMode: "contain",
    height: hp("14%"),
    width: wp("20%"),
  },
  productContainer: {
    width: wp("45%"),
    height: hp("25%"),
    borderColor: "#F2F3F2",
    borderWidth: 1.5,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  priceandbutton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("1%"),
    marginBottom: hp("3%"),
  },
  addbtn: {
    width: wp("13%"),
    height: hp("7%"),
    borderRadius: 19,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  productname: {
    color: "#181725",
    fontFamily: "gilroy-bold",
    fontSize: 16,
    textAlign: "center",
    lineHeight: hp("3%"),
  },
  productquantity: {
    color: "#7C7C7C",
    fontFamily: "gilroy-medium",
    fontSize: 14,
    marginTop: hp("1%"),
  },
  productprice: {
    color: "#181725",
    fontFamily: "gilroy-bold",
    fontSize: 18,
  },
});

export default Explore;
