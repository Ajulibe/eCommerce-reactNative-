import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon, Picker, Form } from "native-base";
import Input from "../../components/UI/Input";
import { BlurView } from "expo-blur";
import Button from "../../components/UI/Button";
import Colors from "../../constants/Colors";
import { MyText } from "../../components/UI/MyText";

const Signup = ({ navigation }: any) => {
  const inputChangeHandler = useCallback(() => {}, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <BlurView intensity={100} style={styles.image}>
        <Image
          style={styles.topPic}
          source={require("../../images/images/blurheader.png")}
        />
      </BlurView>
      <View style={styles.textContainer}>
        <View style={styles.locatorView}>
          <Image
            style={styles.locator}
            source={require("../../images/images/ColoredCarrot.png")}
          />
        </View>
        <Text style={styles.signup}>Sign Up</Text>
        <MyText
          title="Enter your Credentials to continue"
          h5
          style={{ color: "#7C7C7C", marginBottom: hp("5%") }}
        />

        <Form>
          <View style={{ marginBottom: hp("3%") }}>
            <Input
              placeholder=""
              placeholderTextColor="black"
              id="username"
              label="Username"
              errorText="* Please enter a valid Username"
              keyboardType="default"
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
          </View>
          <View style={{ marginBottom: hp("3%") }}>
            <Input
              placeholder=""
              placeholderTextColor="black"
              id="phoneNumber"
              label="Email"
              errorText="* Please enter a valid Email"
              keyboardType="email-address"
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
          </View>
          <Input
            placeholder=""
            placeholderTextColor="black"
            id="phoneNumber"
            label="Password"
            errorText="* Please set a password"
            keyboardType="default"
            autoCapitalize="sentences"
            returnKeyType="none"
            onInputChange={inputChangeHandler}
            initialValue=""
            initiallyValid={false}
            required
            secureTextEntry={true}
            minLength={11}
            textContentType="telephoneNumber"
          />
          <Text
            style={{
              marginTop: hp("3%"),
              color: "#7C7C7C",
              fontSize: 14,
              lineHeight: 22,
              textAlign: "left",
            }}
          >
            By continuing you agree to out{" "}
            <Text style={{ color: Colors.primary }}>Terms of Service</Text>
            &nbsp; and&nbsp;
            <Text style={{ color: Colors.primary }}>Privacy Policy</Text>
          </Text>
        </Form>
      </View>
      <View style={styles.submitBtnStyle}>
        <Button
          Color={Colors.primary}
          onPress={() => {
            navigation.navigate("ProductTab");
          }}
          style={styles.submitbtn}
        >
          <Text style={styles.submit}>Sign Up</Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

Signup.navigationOptions = () => {
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
    marginTop: hp("5%"),
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
    height: hp("9%"),
    width: wp("10%"),
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
  signup: {
    width: wp("60%"),
    lineHeight: 35,
    fontSize: 26,
    fontFamily: "gilroy-bold",
    marginBottom: hp("3%"),
    marginTop: hp("3%"),
  },
});

export default Signup;
