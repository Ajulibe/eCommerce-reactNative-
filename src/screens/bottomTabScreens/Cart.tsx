import React, { useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationTabProp } from "react-navigation-tabs";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/UI/Button";
import Colors from "../../constants/Colors";
import { useScrollToTop } from "@react-navigation/native";
import CartProduct from "../stackNavScreens/CartProduct";

interface Navigation {
  navigation: NavigationTabProp<{ screen: string }>;
}

const FilterScreen: React.FC<Navigation> = ({ navigation }) => {
  const ref = useRef<ScrollView | null>(null);

  useScrollToTop(ref);

  return (
    <View style={styles.screen}>
      <View style={styles.FindproductsContainer}>
        <Text style={styles.Findproducts}>Cart</Text>
      </View>
      <ScrollView ref={ref} showsVerticalScrollIndicator={false}>
        <CartProduct
          productName="Bell Pepper Red"
          source={require("../../images/images/berries.png")}
          productSizePrice="1kg, Price"
          quantity={1}
          price="$4.99"
        />
        <CartProduct
          productName="Egg Chicken"
          source={require("../../images/images/eggs.png")}
          productSizePrice="4pcs, Price"
          quantity={1}
          price="$1.99"
        />
        <CartProduct
          productName="Organic Bananas"
          source={require("../../images/images/nanas.png")}
          productSizePrice="12kg, Price"
          quantity={1}
          price="$3.00"
        />
        <CartProduct
          productName="Ginger"
          source={require("../../images/images/tatoes.png")}
          productSizePrice="250gm, Price"
          quantity={1}
          price="$4.99"
        />
        <View style={styles.submitBtnStyle}>
          <Button Color={Colors.primary} style={styles.submitbtn}>
            <Text style={styles.submit}>Go to Checkout</Text>
            <View style={styles.checkOutPriceContainer}>
              <Text style={styles.checkOutText}>$12.96</Text>
            </View>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },

  Findproducts: {
    fontFamily: "gilroy-bold",
    fontSize: wp("4.83%"),
    color: "#181725",
  },

  FindproductsContainer: {
    marginTop: hp("5%"),
    height: hp("8.6%"),
    width: wp("100%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "rgba(226,226,226,1)",
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
  submitBtnStyle: {
    width: wp("95%"),
    alignItems: "center",
    marginTop: hp("2%"),
  },
  checkOutPriceContainer: {
    textAlign: "right",
    width: wp("10.38%"),
    height: hp("2.46%"),
    backgroundColor: "#489E67",
    paddingLeft: wp("1.21%"),
    paddingRight: wp("1.21%"),
    paddingTop: hp("0.22%"),
    paddingBottom: hp("0.22%"),
    borderRadius: wp("0.97%"),
    position: "absolute",
    right: wp("5.85%"),
  },
  checkOutText: {
    fontFamily: "gilroy-regular",
    color: "#ffffff",
    fontSize: wp("2.89%"),
    lineHeight: hp("2%"),
  },
});

export default FilterScreen;
