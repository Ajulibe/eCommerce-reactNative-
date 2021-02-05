import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SearchBar } from "react-native-elements";
import {
  NavigationTabProp,
  NavigationBottomTabScreenComponent,
} from "react-navigation-tabs";
import Colors from "../../constants/Colors";
import FindProductList from "../Products/FindProductList";
import { useScrollToTop } from "@react-navigation/native";

type Props = {
  navigation: NavigationTabProp<{ userId: string }>;
};

const ExploreScreen: NavigationBottomTabScreenComponent<Props> = (props) => {
  const [search, setSearch] = useState<string>("");

  const ref = useRef<ScrollView | null>(null);

  useScrollToTop(ref);

  return (
    <SafeAreaView style={{ backgroundColor: "#FfFfFf" }}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.Findproducts}>Find Products</Text>
        <SearchBar
          inputStyle={styles.searchbar}
          inputContainerStyle={styles.inputContainerStyle}
          placeholder="Search Store"
          onChangeText={setSearch}
          value={search}
          lightTheme={true}
          containerStyle={styles.containerStyle}
        />
      </View>
      <ScrollView ref={ref}>
        <View style={styles.container}>
          <FindProductList
            productname1="Fresh Fruits And Vegetable"
            productname2="Cooking Oil And Ghee"
            borderColor2="#FFC589"
            backgroundColor2="#FFFBF8"
            borderColor="#53B175"
            backgroundColor="#F7FCF8"
            source1={require("../../images/images/vegetable.png")}
            source2={require("../../images/images/oil.png")}
          />
          <FindProductList
            productname1="Meat And Fish"
            productname2="Bakery And Snacks"
            borderColor2="#D3B0E0"
            backgroundColor2="#FCF4FF"
            borderColor="#F7A593"
            backgroundColor="#FFF7F5"
            source1={require("../../images/images/meat.png")}
            source2={require("../../images/images/bakery.png")}
          />
          <FindProductList
            productname1="Diary And Eggs"
            productname2="Beverages"
            borderColor2="#B7DFF5"
            backgroundColor2="#ECF9FF"
            borderColor="#FDE598"
            backgroundColor="#FFFCF4"
            source1={require("../../images/images/Diary.png")}
            source2={require("../../images/images/Beverage.png")}
            onPress2={() => {
              props.navigation.navigate("FindProductDetail");
            }}
          />
          <FindProductList
            productname1="Diary And Eggs"
            productname2="Beverages"
            borderColor2="#FFC589"
            backgroundColor2="#FFFBF8"
            borderColor="#53B175"
            backgroundColor="#F7FCF8"
            source1={require("../../images/images/vegetable.png")}
            source2={require("../../images/images/oil.png")}
          />
          <FindProductList
            productname1="Fresh Fruits And Vegetable"
            productname2="Cooking Oil And Ghee"
            borderColor2="#FFC589"
            backgroundColor2="#FFFBF8"
            borderColor="#53B175"
            backgroundColor="#F7FCF8"
            source1={require("../../images/images/meat.png")}
            source2={require("../../images/images/bakery.png")}
          />
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
    paddingTop: hp("1.2%"),
  },
  productView: {
    width: wp("100%"),
  },
  Findproducts: {
    fontFamily: "gilroy-bold",
    fontSize: 20,
    color: "#181725",
    marginBottom: hp("1.4%"),
  },
  searchbar: {
    backgroundColor: "#F2F3F2",
    fontSize: 14,
    fontFamily: "gilroy-bold",
    color: "#7C7C7C",
  },
  inputContainerStyle: {
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    height: hp("6%"),
  },
  containerStyle: {
    width: wp("98%"),
    backgroundColor: "#ffffff",
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
    flexDirection: "row",
    height: hp("80%"),
    justifyContent: "space-around",
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
    borderWidth: 1,
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

export default ExploreScreen;
