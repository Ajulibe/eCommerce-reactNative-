import React, { useState, useEffect } from "react";
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
import Products from "./Products";
import CategoryTitle from "./CategoryTitle";
import Groceries from "./Groceries";
import {
  NavigationTabProp,
  NavigationBottomTabScreenComponent,
} from "react-navigation-tabs";
import { Entypo } from "@expo/vector-icons";
type RootStackParamList = {
  ProductList: { scrollToTop: () => void };
};

type ProductListScreenProp = NavigationTabProp<
  RootStackParamList,
  "ProductList"
>;

type Props = {
  navigation: ProductListScreenProp;
};

const FindProductDetail: NavigationBottomTabScreenComponent<Props> = (
  props
) => {
  const [search, setSearch] = useState<string>("");

  return (
    <SafeAreaView style={{ backgroundColor: "#FfFfFf" }}>
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
              marginBottom: hp("1.4%"),
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
              borderRadius: 15,
              height: hp("5%"),
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
          <TouchableOpacity style={{ marginBottom: hp("1.4%") }}>
            <Image
              style={{
                resizeMode: "contain",
                height: hp("18%"),
                width: wp("90%"),
              }}
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

///to pass functions from the body of the component to the navigation options,
//we must firstly set up the function as a parameter using navigation.setParams and
//later get it using navigation.getParams.
FindProductDetail.navigationOptions = () => ({
  tabBarLabel: "Shop",
  tabBarIcon: ({ tintColor }) => (
    <Entypo name="shop" size={18} color={tintColor} />
  ),
  tabBarOnPress: ({ navigation, defaultHandler }) => {
    defaultHandler();
    if (navigation.isFocused()) {
      const scrollToTop = navigation.getParam("scrollToTop", null);
      if (scrollToTop) {
        scrollToTop();
      }
    }
  },
});

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
});

export default FindProductDetail;