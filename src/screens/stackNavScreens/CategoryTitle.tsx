import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../../constants/Colors";

const CategoryTitle = (props: any) => {
  return (
    <View style={styles.exclusive}>
      <Text style={{ color: "black", fontSize: 24, fontFamily: "gilroy-bold" }}>
        {props.title}
      </Text>
      <Text
        style={{
          color: Colors.primary,
          fontSize: 16,
          fontFamily: "gilroy-medium",
        }}
      >
        See all
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  exclusive: {
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp("3%"),
  },
});

export default CategoryTitle;
