import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../constants/Colors";
import Font from "../constants/Font";

const SplashScreen: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../images/images/getstarted.png")}
        style={styles.background}
      />
      <View style={styles.info}>
        <Image
          resizeMode="contain"
          source={require("../images/images/Carrot.png")}
          style={styles.carrot}
        />
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.header}>to our store</Text>
        <Text style={styles.get}>
          Get your groceries in as fast as one hour
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Auth");
          }}
        >
          <Text style={styles.content}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    height: hp("100%"),
    width: wp("100%"),
    zIndex: 20,
    resizeMode: "cover",
    justifyContent: "center",
    alignContent: "center",
    position: "relative",
  },
  info: {
    zIndex: 100,
    position: "absolute",
    bottom: hp("10%"),
    height: hp("45%"),
    width: wp("80%"),
    justifyContent: "center",
    alignItems: "center",
  },
  get: {
    color: "#ffffff",
    marginBottom: hp("6%"),
    fontSize: Font.smaller,
    fontWeight: "100",
    marginTop: hp("2%"),
    fontFamily: "gilroy-light",
  },
  header: {
    fontSize: Font.large,
    color: "white",
    fontFamily: "gilroy-bold",
  },
  carrot: {
    height: hp("9%"),
    width: wp("9%"),
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    padding: 10,
    width: wp("90%"),
    height: hp("9%"),
    borderRadius: 19,
  },
  content: {
    color: "#ffffff",
    fontSize: Font.smaller,
    fontFamily: "gilroy-medium",
  },
});

export default SplashScreen;
