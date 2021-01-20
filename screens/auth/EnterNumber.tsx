import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const EnterNumber: React.FC = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.groceries}>Enter your mobile number</Text>
        <Text style={styles.phonenum}>Mobile Number</Text>
        <TextInput style={styles.number} value="" />
      </View>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.next}
            source={require("../../images/images/next.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: hp("4%"),
    borderRightColor: "#ffffff",
    borderLeftColor: "#ffffff",
    borderTopColor: "#ffffff",
    borderBottomColor: "#E2E2E2",
  },
  phonenum: {
    fontSize: 16,
    fontFamily: "gilroy-bold",
    color: "#7C7C7C",
    marginBottom: hp("2%"),
  },
  textContainer: {
    flex: 1,
    width: wp("90%"),
    marginBottom: hp("60%"),
  },
  groceries: {
    width: wp("100%"),
    lineHeight: 35,
    fontSize: 26,
    fontFamily: "gilroy-medium",
    marginBottom: hp("3%"),
  },
  next: {
    resizeMode: "contain",
    width: wp("15%"),
    height: hp("15%"),
  },
});

export default EnterNumber;
