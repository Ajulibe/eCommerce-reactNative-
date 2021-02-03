import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Picker, Form, Icon } from "native-base";

import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Button from "../../components/UI/Button";
import Colors from "../../constants/Colors";
import { states } from "../../components/Utils/nigerianStates";

const EnterNumber = ({ navigation }: any) => {
  const [value, onChangeText] = useState("Useless Placeholder");
  const [country, setCountry] = useState("uk");

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
              navigation.navigate("EnterOtp");
            }}
          >
            <Ionicons name="chevron-back-outline" size={24} color="#212121" />
          </TouchableOpacity>
        </View>
        <View style={styles.locatorView}>
          <Image
            style={styles.locator}
            source={require("../../images/images/Locator.png")}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.groceries}>Select Your Location</Text>
          <Text style={styles.switch}>
            Switch on your location to stay in tune with what's happening in
            your area
          </Text>

          <Form>
            <Picker
              mode="dropdown"
              iosIcon={
                <Icon
                  name="arrow-down-circle"
                  style={{ color: Colors.primary, fontSize: 25 }}
                />
              }
              placeholder="Select your State"
              placeholderStyle={{
                color: "#bfc6ea",
                fontFamily: "gilroy-regular",
              }}
              placeholderIconColor={Colors.primary}
              style={{ width: wp("80%") }}
            >
              {states.map(function (item) {
                return (
                  <Picker.Item
                    key={item.state}
                    label={item.state}
                    value={item.state}
                  />
                );
              })}
            </Picker>
          </Form>
        </View>
      </View>

      <View style={styles.submitBtnStyle}>
        <Button
          Color={Colors.primary}
          onPress={() => {
            navigation.navigate("Signup");
          }}
          style={styles.submitbtn}
        >
          <Text style={styles.submit}>Submit</Text>
        </Button>
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

EnterNumber.navigationOptions = () => {
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
    fontFamily: "gilroy-bold",
    marginBottom: hp("3%"),
    marginTop: hp("2%"),
    color: "#181725",
    textAlign: "center",
  },
  next: {
    width: wp("15%"),
    height: hp("8.5%"),
    borderRadius: hp("7.5%"),
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
  locator: {
    resizeMode: "contain",
    height: hp("30%"),
    width: wp("44%"),
  },
  locatorView: {
    justifyContent: "center",
    marginTop: 0,
    alignItems: "center",
  },
  switch: {
    width: wp("90%"),
    lineHeight: 35,
    fontSize: 15,
    fontFamily: "gilroy-light",
    color: "#181725",
    textAlign: "center",
    marginBottom: wp("5%"),
  },
  botPic: {
    width: wp("100%"),
    resizeMode: "cover",
    height: hp("24%"),
    zIndex: -2000,
    position: "relative",
    // bottom: 0,
    // left: 0,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "gilroy-medium",
  },
  submitbtn: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "black",
    shadowOpacity: 0.2,
    marginBottom: hp("4%"),
  },
  submitBtnStyle: {
    position: "absolute",
    bottom: 0,
    zIndex: 2000,
  },
  dropdownStyle: {
    backgroundColor: "#fafafa",
    width: wp("80%"),
    zIndex: 1000,
    height: hp("10%"),
  },
});

export default EnterNumber;
