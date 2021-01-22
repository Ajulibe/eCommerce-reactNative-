import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SearchBar } from "react-native-elements";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Products from "./Products";

const ProductList = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>("");
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.carrot}
          source={require("../../images/images/ColoredCarrot.png")}
        />
        <Text
          style={{
            fontFamily: "gilroy-bold",
            fontSize: 18,
            color: "#4C4F4D",
            marginBottom: hp("2%"),
          }}
        >
          Dhaka, Banassre
        </Text>
        <SearchBar
          inputStyle={{
            backgroundColor: "#F2F3F2",
            fontSize: 14,
            fontFamily: "gilroy-bold",
            color: "#7C7C7C",
          }}
          inputContainerStyle={{
            backgroundColor: "#F2F3F2",
            borderRadius: 19,
            height: hp("8%"),
          }}
          placeholder="Search Store"
          onChangeText={setSearch}
          value={search}
          lightTheme={true}
          containerStyle={{
            width: wp("98%"),
            backgroundColor: "#ffffff",
          }}
        />
        <TouchableOpacity>
          <Image
            style={{
              resizeMode: "contain",
              height: hp("24%"),
              width: wp("90%"),
            }}
            source={require("../../images/images/banner.png")}
          />
        </TouchableOpacity>

        <View style={styles.exclusive}>
          <Text
            style={{ color: "black", fontSize: 24, fontFamily: "gilroy-bold" }}
          >
            Exclusive Offer
          </Text>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 16,
              fontFamily: "gilroy-medium",
            }}
          >
            See all
          </Text>
        </View>

        <Products />
        <Products />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    borderColor: "red",
    borderWidth: 3,
  },
  productView: {
    width: wp("100%"),
  },
  carrot: {
    resizeMode: "contain",
    height: hp("9%"),
    width: wp("10%"),
    marginTop: hp("3%"),
    marginBottom: hp("2%"),
  },
  exclusive: {
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp("6%"),
  },
});

export default ProductList;
