import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SearchBar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Products from "../stackNavScreens/Products";
import CategoryTitle from "../stackNavScreens/CategoryTitle";
import Groceries from "../stackNavScreens/Groceries";
import {
  NavigationTabProp,
  NavigationBottomTabScreenComponent,
} from "react-navigation-tabs";
import { useScrollToTop } from "@react-navigation/native";

type Props = {
  navigation: NavigationTabProp<"Shop">;
};

const ProductList: NavigationBottomTabScreenComponent<Props> = (props) => {
  const [search, setSearch] = useState<string>("");

  const ref = useRef<ScrollView | null>(null);

  useScrollToTop(ref);

  return (
    <SafeAreaView style={{ backgroundColor: "#FfFfFf" }}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.carrot}
          source={require("../../images/images/ColoredCarrot.png")}
        />
        <Text style={styles.header}>Dhaka, Banassre</Text>

        <SearchBar
          inputStyle={styles.SearchBar}
          inputContainerStyle={styles.inputContainerStyle}
          placeholder="Search Store"
          onChangeText={setSearch}
          value={search}
          lightTheme={true}
          containerStyle={styles.containerStyle}
        />
      </View>

      <ScrollView ref={ref} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity style={{ marginBottom: hp("1.4%") }}>
            <Image
              style={styles.ImageStyle}
              source={require("../../images/images/banner.png")}
            />
          </TouchableOpacity>
          <CategoryTitle title="Exclusive Offer" />
          <Products
            onPress={() => {
              props.navigation.navigate("ProductDetails");
            }}
          />
          <CategoryTitle title="Best Selling" />
          <Products />
          <CategoryTitle title="Groceries" />
          <Groceries />
          <Products />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
  SearchBar: {
    backgroundColor: "#F2F3F2",
    fontSize: 14,
    fontFamily: "gilroy-bold",
    color: "#7C7C7C",
  },
  header: {
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "#4C4F4D",
    marginBottom: hp("1.4%"),
  },
  productView: {
    width: wp("100%"),
  },
  inputContainerStyle: {
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    height: hp("5%"),
  },
  containerStyle: {
    width: wp("98%"),
    backgroundColor: "#ffffff",
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  ImageStyle: {
    resizeMode: "contain",
    height: hp("18%"),
    width: wp("90%"),
  },
  carrot: {
    resizeMode: "contain",
    height: hp("7%"),
    width: wp("9%"),
    marginTop: hp("0.5%"),
    marginBottom: hp("1%"),
  },
  exclusive: {
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp("6%"),
  },
  headerContainer: {
    alignItems: "center",
  },
});

export default ProductList;
