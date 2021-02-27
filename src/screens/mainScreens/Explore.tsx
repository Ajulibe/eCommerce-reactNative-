import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
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
import { Ionicons } from "@expo/vector-icons";

type Props = {
  navigation: NavigationTabProp<{ userId: string }>;
};

const ExploreScreen: NavigationBottomTabScreenComponent<Props> = (props) => {
  const [search, setSearch] = useState<string>("");

  const ref = useRef<ScrollView | null>(null);

  useScrollToTop(ref);

  return (
    <SafeAreaView style={{ backgroundColor: "#FfFfFf" }}>
      <View style={{}}>
        <Text style={styles.Findproducts}>Find Products</Text>
        <View style={styles.searchContainer}>
          <SearchBar
            inputStyle={styles.searchbar}
            inputContainerStyle={styles.inputContainerStyle}
            placeholder="Search Store"
            onChangeText={setSearch}
            value={search}
            lightTheme={true}
            containerStyle={styles.containerStyle}
          />
          <TouchableOpacity
            style={styles.filter}
            onPress={() => {
              props.navigation.navigate("FilterScreen2");
            }}
          >
            <Ionicons name="filter-outline" size={22} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView ref={ref}>
        <View style={styles.container}>
          <FindProductList
            productname1="Fresh Fruits And Vegetable"
            productname2="Cooking Oil And Ghee"
            borderColor2="rgba(248, 164, 76, 0.7)"
            backgroundColor2="rgba(248, 164, 76, 0.1)"
            borderColor="rgba(83,177,117,0.7)"
            backgroundColor="rgba(83, 177, 117, 0.1)"
            source1={require("../../images/images/vegetable.png")}
            source2={require("../../images/images/oil.png")}
          />
          <FindProductList
            productname1="Meat And Fish"
            productname2="Bakery And Snacks"
            borderColor2="#D3B0E0"
            backgroundColor2="rgba(211, 176, 224, 0.25)"
            borderColor="#F7A593"
            backgroundColor="rgba(247, 165, 147, 0.25)"
            source1={require("../../images/images/meat.png")}
            source2={require("../../images/images/bakery.png")}
          />
          <FindProductList
            productname1="Diary And Eggs"
            productname2="Beverages"
            borderColor2="#B7DFF5"
            backgroundColor2="rgba(183, 223, 245, 0.25)"
            borderColor="#FDE598"
            backgroundColor="rgba(253, 229, 152, 0.25)"
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
            borderColor="#D3B0E0"
            backgroundColor="rgba(211, 176, 224, 0.25)"
            borderColor2="#F7A593"
            backgroundColor2="rgba(247, 165, 147, 0.25)"
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
    textAlign: "center",
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
    width: wp("90%"),
    backgroundColor: "#ffffff",
    // marginLeft: wp("2%"),
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
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
  filter: {
    marginTop: hp("4%"),
    marginRight: wp("4%"),
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: wp("100%"),
  },
});

export default ExploreScreen;
