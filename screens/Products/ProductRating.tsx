import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ProductRating = ({ navigation }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#E2E2E2",
        borderTopWidth: 0.5,
        paddingTop: hp("2%"),
        marginBottom: hp("1%"),
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
        Review
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: wp("25%"),
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Entypo name="star" size={15} color="#F3603F" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="star" size={15} color="#F3603F" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="star" size={15} color="#F3603F" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="star" size={15} color="#F3603F" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="star" size={15} color="#F3603F" />
          </TouchableOpacity>
        </View>
        <AntDesign name="right" size={15} color="black" />
      </View>
    </View>
  );
};

export default ProductRating;
