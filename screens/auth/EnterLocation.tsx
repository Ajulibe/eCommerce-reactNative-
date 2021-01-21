import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Input from "../../components/UI/Input";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import Button from "../../components/UI/Button";
import Colors from "../../constants/Colors";

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
          <DropDownPicker
            items={[
              {
                label: "USA",
                value: "usa",
                // icon: () => <Icon name="flag" size={18} color="#900" />,
                hidden: true,
              },
              {
                label: "UK",
                value: "uk",
                // icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: "France",
                value: "france",
                // icon: () => <Icon name="flag" size={18} color="#900" />,
              },
            ]}
            defaultValue={country}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: "#fafafa", width: wp("80%") }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={styles.dropdownStyle}
            onChangeItem={(item) => {
              setCountry(item.value);
            }}
          />
        </View>
      </View>
      <View>
        <Button
          Color={Colors.primary}
          marginBottom={hp("4%")}
          onPress={() => {
            Alert.alert("clicked");
          }}
          style={styles.submitbtn}
        >
          <Text style={styles.submit}>Submit</Text>
        </Button>
      </View>
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
  },
  dropdownStyle: {
    backgroundColor: "#fafafa",
    width: wp("80%"),
    zIndex: 1000,
    height: hp("10%"),
  },
});

export default EnterNumber;
