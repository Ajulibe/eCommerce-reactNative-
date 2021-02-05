import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationTabProp } from "react-navigation-tabs";
import { EvilIcons } from "@expo/vector-icons";

interface Navigation {
  navigation: NavigationTabProp<{ screen: string }>;
}

const FilterScreen: React.FC<Navigation> = ({ navigation }) => {
  const [search, setSearch] = useState<string>("");

  return (
    <View style={styles.screen}>
      <View style={styles.display}>
        <View style={{ marginTop: hp("10%") }}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              navigation.navigate("FindProductDetail");
            }}
          >
            <EvilIcons name="close" size={24} color="#212121" />
          </TouchableOpacity>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.Findproducts}>Filters</Text>
          </View>
          <TouchableOpacity
            style={styles.invisible}
            onPress={() => {
              navigation.navigate("FindProductDetail");
            }}
          >
            <EvilIcons name="close" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.downContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    height: hp("10%"),
    width: wp("100%"),
    // marginTop: hp("7%"),
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  downContainer: {
    height: hp("90%"),
    backgroundColor: "#E5E5E5",
    width: wp("100%"),
    borderTopRightRadius: hp("3%"),
    borderTopLeftRadius: hp("3%"),
  },
  close: {
    marginLeft: wp("5%"),
  },
  filter: {
    marginTop: hp("4%"),
    marginRight: wp("4%"),
  },

  Findproducts: {
    fontFamily: "gilroy-bold",
    fontSize: 20,
    color: "#181725",
  },
  invisible: {},
});

export default FilterScreen;
