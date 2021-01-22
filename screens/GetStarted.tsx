import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../constants/Colors";

import Button from "../components/UI/Button";
import { MyText } from "../components/UI/MyText";

const SplashScreen: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../images/images/getstarted.png")}
        style={styles.background}
      >
        <View style={styles.info}>
          <Image
            resizeMode="contain"
            source={require("../images/images/Carrot.png")}
            style={styles.carrot}
          />

          <MyText title={"Welcome"} h1 style={styles.textColor} />
          <MyText title={"to our store"} h1 style={styles.textColor} />
          <MyText
            title={"Get your groceries in as fast as one hour"}
            small
            style={styles.get}
          />
          <Button
            Color={Colors.primary}
            style={{ marginBottom: "0%" }}
            onPress={() => {
              navigation.navigate("Auth");
            }}
          >
            <MyText title={"Get Started"} h5 style={styles.textColor} />
          </Button>
        </View>
      </ImageBackground>
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
    resizeMode: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  info: {
    bottom: hp("10%"),
    height: hp("45%"),
    width: wp("80%"),
    justifyContent: "center",
    alignItems: "center",
  },
  get: {
    color: "#ffffff",
    marginBottom: hp("6%"),
    marginTop: hp("2%"),
  },
  textColor: {
    color: "#ffffff",
  },
  carrot: {
    height: hp("9%"),
    width: wp("9%"),
  },
});

export default SplashScreen;
