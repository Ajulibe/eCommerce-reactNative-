import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SearchBar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  NavigationTabProp,
  NavigationBottomTabScreenComponent,
} from "react-navigation-tabs";
import Colors from "../../constants/Colors";

type Props = {
  navigation: NavigationTabProp<{ userId: string }>;
};

const Explore: NavigationBottomTabScreenComponent<Props> = (props) => {
  const [search, setSearch] = useState<string>("");
  return (
    <SafeAreaView style={{ backgroundColor: "#FfFfFf" }}>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              height: hp("20%"),
              borderWidth: 10,
              borderColor: "red",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "gilroy-bold",
                fontSize: 20,
                color: "#181725",
                marginBottom: hp("2%"),
              }}
            >
              Find Products
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
                borderRadius: 15,
                height: hp("6%"),
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
          </View>
          <View style={styles.exclusive}>
            <View style={styles.productContainer}>
              <Image
                style={styles.products}
                source={require("../../images/images/potato.png")}
              />
              <View style={{ width: "80%" }}>
                <Text style={styles.productname}>
                  Fresh Fruits and Vegetable
                </Text>
              </View>
            </View>
            <View style={styles.productContainer}>
              <Image
                style={styles.products}
                source={require("../../images/images/apple.png")}
              />
              <View style={{ width: "80%" }}>
                <Text style={styles.productname}>Cooking Oil and Ghee </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Explore.navigationOptions = {
  tabBarLabel: "Explore",
  tabBarIcon: ({ tintColor }) => (
    <MaterialCommunityIcons name="text-search" size={20} color={tintColor} />
  ),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
  productView: {
    width: wp("100%"),
  },
  carrot: {
    resizeMode: "contain",
    height: hp("7%"),
    width: wp("9%"),
    marginTop: hp("5%"),
    marginBottom: hp("2%"),
  },
  exclusive: {
    width: wp("100%"),
    borderWidth: 10,
    borderColor: "red",
    flexDirection: "row",
    height: hp("80%"),
    justifyContent: "space-around",
    //alignItems: "center",
  },
  products: {
    resizeMode: "contain",
    height: hp("14%"),
    width: wp("20%"),
  },
  productContainer: {
    width: wp("45%"),
    height: hp("25%"),
    borderColor: "#F2F3F2",
    borderWidth: 1.5,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  priceandbutton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("1%"),
    marginBottom: hp("3%"),
  },
  addbtn: {
    width: wp("13%"),
    height: hp("7%"),
    borderRadius: 19,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  productname: {
    color: "#181725",
    fontFamily: "gilroy-bold",
    fontSize: 16,
    textAlign: "center",
    lineHeight: hp("3%"),
  },
  productquantity: {
    color: "#7C7C7C",
    fontFamily: "gilroy-medium",
    fontSize: 14,
    marginTop: hp("1%"),
  },
  productprice: {
    color: "#181725",
    fontFamily: "gilroy-bold",
    fontSize: 18,
  },
});

export default Explore;
