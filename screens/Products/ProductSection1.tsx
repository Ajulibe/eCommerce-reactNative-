import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { EvilIcons } from "@expo/vector-icons";

const ProductSections1: React.FC = () => {
  return (
    <View style={styles.detailsContent}>
      <View>
        <Text style={{ fontFamily: "gilroy-bold", fontSize: 24 }}>
          Natural Red Apple
        </Text>
        <Text
          style={{
            fontFamily: "gilroy-regular",
            fontSize: 14,
            marginTop: hp("1%"),
            color: "#7C7C7C",
          }}
        >
          1kg, Price
        </Text>
      </View>

      <EvilIcons name="heart" size={24} color="#7C7C7C" />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContent: {
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp("3%"),
  },
});

export default ProductSections1;
