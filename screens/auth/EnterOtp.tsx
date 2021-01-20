import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const EnterOtp: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>EnterNumber</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Logo: {
    height: hp("10%"),
    width: wp("70%"),
    marginBottom: hp("10%"),
    marginRight: wp("5%"),
  },
});

export default EnterOtp;
