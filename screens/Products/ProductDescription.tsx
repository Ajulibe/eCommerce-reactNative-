import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/UI/Button";
import Colors from "../../constants/Colors";
import ProductRating from "./ProductRating";
import ProductSections1 from "./ProductSection1";
import ProductSection2 from "./ProductSection2";

const ProductDetails = ({ navigation }: any) => {
  return (
    <View style={styles.details}>
      <ProductSections1 />
      <ProductSection2 />
      <View style={styles.description}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderColor: "#E2E2E2",
            borderTopWidth: 0.5,
            paddingTop: hp("2%"),
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "gilroy-medium",
              fontSize: 16,
              marginTop: hp("0.8%"),
              lineHeight: 18,
            }}
          >
            Product Detail
          </Text>
          <AntDesign name="down" size={15} color="black" />
        </View>

        <Text
          style={{
            color: "#7C7C7C",
            fontFamily: "gilroy-regular",
            fontSize: 12,
            marginTop: hp("1%"),
            lineHeight: 21,
          }}
        >
          Apples Are Nutritious. Apples May BeGood for Weight loss. Apples may
          be good for your heart as part of a healthy and varied diet.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderColor: "#E2E2E2",
          borderTopWidth: 0.5,
          paddingTop: hp("2%"),
          marginBottom: hp("2%"),
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "gilroy-medium",
            fontSize: 16,
            marginTop: hp("0.8%"),
            lineHeight: 18,
          }}
        >
          Nutrition
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: wp("15%"),
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#EBEBEB",
              borderRadius: 5,
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <Text
              style={{
                color: "#7C7C7C",
                fontFamily: "gilroy-medium",
                fontSize: 9,
                lineHeight: 13.5,
              }}
            >
              100gr
            </Text>
          </View>
          <AntDesign name="right" size={15} color="black" />
        </View>
      </View>

      <ProductRating />

      <Button
        Color={Colors.primary}
        onPress={() => {
          navigation.navigate("ProductFlow");
        }}
        style={styles.submitbtn}
      >
        <Text style={styles.submit}>Add To Basket</Text>
      </Button>
    </View>
  );
};

ProductDetails.navigationOptions = () => {
  return {
    headerShown: false,
    tabBarVisible: false,
  };
};

const styles = StyleSheet.create({
  details: {
    flex: 3.2,
    backgroundColor: "#ffffff",
  },
  next: {
    width: wp("12%"),
    height: hp("5%"),
    borderRadius: hp("1.5%"),
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    width: wp("90%"),
    marginTop: hp("3%"),
    marginBottom: hp("2%"),
  },
  submit: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "gilroy-medium",
  },
  submitbtn: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "black",
    shadowOpacity: 0.2,
    marginTop: hp("2%"),
  },
});

export default ProductDetails;
