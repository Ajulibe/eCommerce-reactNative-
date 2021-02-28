import React, { useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useScrollToTop } from "@react-navigation/native";

interface Navigation {
  productName: string;
  productSizePrice: string;
  quantity: number;
  source: any;
  price: string;
}

const FilterScreen: React.FC<Navigation> = ({
  productName,
  source,
  productSizePrice,
  quantity,
  price,
}) => {
  const ref = useRef<ScrollView | null>(null);

  useScrollToTop(ref);

  return (
    <>
      <View style={styles.individualProductContainer}>
        <View style={styles.imageContainer}>
          <Image source={source} style={styles.image} />
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.middleTopContainer}>
            <Text style={styles.middleTopContainerText}>{productName}</Text>
            <Text style={styles.priceAndQuantity}>{productSizePrice}</Text>
          </View>
          <View style={styles.middleBottomContainer}>
            <TouchableOpacity>
              <View style={styles.addbtn}>
                <AntDesign name="minus" size={24} color="#B3B3B3" />
              </View>
            </TouchableOpacity>
            <Text style={{ color: "#181725" }}>{quantity}</Text>
            <TouchableOpacity>
              <View style={styles.addbtn}>
                <Ionicons name="add" size={24} color="#53B175" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.closeContainer}>
          <TouchableOpacity>
            <Ionicons name="close" size={24} color="rgba(179,179,179,1)" />
          </TouchableOpacity>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  addbtn: {
    width: wp("13%"),
    height: wp("13%"),
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E2E2E2",
    borderWidth: 0.5,
  },
  individualProductContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("95%"),
    borderBottomWidth: 0.5,
    borderColor: "rgba(226,226,226,1)",
  },
  imageContainer: {
    width: wp("20%"),
    height: hp("18.82%"),
    marginLeft: wp("6.10%"),
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    width: wp("17.01%"),
    height: wp("15.6%"),
  },
  middleContainer: {
    width: wp("45%"),
    height: hp("18.82%"),
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: hp("2%"),
    paddingBottom: hp("3%"),
    marginRight: wp("5%"),
  },
  middleTopContainer: {
    width: wp("35%"),
    justifyContent: "space-between",
  },
  middleTopContainerText: {
    textAlign: "left",
    fontFamily: "gilroy-bold",
    fontSize: wp("3.86%"),
  },
  priceAndQuantity: {
    textAlign: "left",
    color: "#7C7C7C",
    fontFamily: "gilroy-medium",
    lineHeight: hp("2%%"),
    fontSize: wp("3.38%"),
    marginTop: hp("0.55%"),
  },
  middleBottomContainer: {
    flexDirection: "row",
    width: wp("35%"),
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeContainer: {
    width: wp("17.8%"),
    marginRight: wp("6.10%"),
    height: hp("18.82%"),
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: hp("2%"),
    paddingBottom: hp("3%"),
  },
  priceText: {
    color: "rgba(24,23,37,1)",
    fontFamily: "gilroy-medium",
    fontSize: wp("4.35%"),
    marginBottom: hp("1.5%"),
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
