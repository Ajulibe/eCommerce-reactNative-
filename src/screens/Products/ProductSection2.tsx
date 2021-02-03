import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const ProductSection2: React.FC = () => {
  return (
    <View style={styles.detailsContent2}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: wp("30%"),
        }}
      >
        <AntDesign name="minus" size={15} color="#B3B3B3" />
        <View style={styles.next}>
          <Text
            style={{
              fontFamily: "gilroy-bold",
              fontSize: 18,
              color: "black",
            }}
          >
            1
          </Text>
        </View>
        <AntDesign name="plus" size={15} color="#53B175" />
      </View>

      <Text
        style={{
          fontFamily: "gilroy-bold",
          fontSize: 24,
          color: "black",
        }}
      >
        $4.99
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  detailsContent2: {
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp("4%"),
  },
});

export default ProductSection2;
