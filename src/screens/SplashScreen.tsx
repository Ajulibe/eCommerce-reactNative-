import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../constants/Colors";

const SplashScreen: React.FC = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("GetStarted");
    }, 3000);
  });

  return (
    <View style={styles.screen}>
      <Image
        source={require("../images/images/splash.png")}
        style={styles.Logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Logo: {
    resizeMode: "contain",
    height: hp("10%"),
    width: wp("70%"),
    marginBottom: hp("10%"),
    marginRight: wp("5%"),
  },
});

export default SplashScreen;
