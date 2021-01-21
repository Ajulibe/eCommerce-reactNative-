import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../components/UI/Button";
import Colors from "../constants/Colors";

const PhoneAuth: React.FC = ({ navigation }: any) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.screen}>
        <View style={styles.top}>
          <Image
            style={styles.topPic}
            source={require("../images/images/topPic.png")}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.groceries}>Get your groceries with nectar</Text>
          <TextInput style={styles.number} value="" />
          <Text style={styles.connect}>Or connect with social media</Text>

          <Button
            Color="#5383Ec"
            marginBottom={hp("3%")}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Image
              style={styles.google}
              source={require("../images/images/google.png")}
            />
            <Text style={styles.content}>Continue with Google</Text>
          </Button>
          <Button
            Color="#4A66AC"
            marginBottom="0%"
            onPress={() => {
              console.log("pressed");
            }}
          >
            <Image
              style={styles.facebook}
              source={require("../images/images/facebook.png")}
            />
            <Text style={styles.content}>Continue with Facebook</Text>
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    backgroundColor: "#FCFCFC",
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
  top: { flex: 0.44 },
  bottom: {
    flex: 0.56,
    alignContent: "center",
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
    fontSize: 18,
    fontFamily: "gilroy-medium",
  },
  connect: {
    marginBottom: hp("4%"),
    textAlign: "center",
    color: "#828282",
    fontSize: 14,
    fontFamily: "gilroy-medium",
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
  groceries: {
    width: wp("60%"),
    lineHeight: 35,
    fontSize: 26,
    fontFamily: "gilroy-medium",
    marginBottom: hp("3%"),
  },
  google: {
    resizeMode: "contain",
    height: hp("4%"),
    width: wp("4%"),
    position: "relative",
    left: wp("-12%"),
  },
  facebook: {
    resizeMode: "contain",
    height: hp("3%"),
    width: wp("3%"),
    position: "relative",
    left: wp("-10%"),
  },
  topPic: {
    resizeMode: "cover",
    height: hp("44%"),
    width: wp("100%"),
  },
});

export default PhoneAuth;
