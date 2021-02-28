import React, { useCallback } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Input from "../../components/UI/Input";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const EnterLocation = ({ navigation }: any) => {
  const [value, onChangeText] = React.useState("Useless Placeholder");

  const inputChangeHandler = useCallback(() => {}, []);

  return (
    <View style={styles.screen}>
      <BlurView intensity={100} style={styles.image}>
        <Image
          style={styles.topPic}
          source={require("../../images/images/blurheader.png")}
        />
      </BlurView>
      <View style={styles.textContainer}>
        <View>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.navigate("Auth");
              // Alert.alert("done");
            }}
          >
            <Ionicons name="chevron-back-outline" size={24} color="#212121" />
          </TouchableOpacity>
        </View>
        <Text style={styles.groceries}>Enter your mobile number</Text>
        <Input
          id="phoneNumber"
          label="Mobile Number"
          errorText="* Please enter a valid Phone Number!"
          keyboardType="number-pad"
          autoCapitalize="sentences"
          returnKeyType="none"
          onInputChange={inputChangeHandler}
          initialValue=""
          initiallyValid={false}
          required
          secureTextEntry={false}
          minLength={11}
          textContentType="telephoneNumber"
        />
        <View style={styles.btnCn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EnterOtp");
            }}
          >
            <View style={styles.next}>
              <AntDesign name="right" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <BlurView intensity={100}>
        <Image
          style={styles.botPic}
          source={require("../../images/images/bottom.png")}
        />
      </BlurView>
    </View>
  );
};

EnterLocation.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FCFCFC",
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
  textContainer: {
    flex: 1,
    width: wp("90%"),
  },
  groceries: {
    width: wp("100%"),
    lineHeight: 35,
    fontSize: 26,
    fontFamily: "gilroy-medium",
    marginBottom: hp("3%"),
    marginTop: hp("5%"),
    color: "#181725",
  },
  next: {
    width: wp("15%"),
    height: wp("15%"),
    borderRadius: wp("15%"),
    backgroundColor: "#53B175",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "black",
    shadowOpacity: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    marginTop: hp("6%"),
    marginLeft: wp("-2%"),
  },
  topPic: {
    resizeMode: "cover",
    height: hp("44%"),
    width: wp("100%"),
  },
  image: {
    zIndex: -200,
    height: hp("1%"),
    position: "relative",
  },
  btnCn: {
    marginTop: hp("25%"),
    marginLeft: wp("70%"),
  },
  botPic: {
    resizeMode: "cover",
    height: hp("24%"),
    width: wp("100%"),
  },
});

export default EnterLocation;
