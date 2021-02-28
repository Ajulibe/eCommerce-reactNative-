import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onPress1?: () => void;
  onPress2?: () => void;
  productname1: string;
  productname2: string;
  source1: any;
  source2: any;
}

const ProductList: React.FC<Props> = ({
  onPress1,
  onPress2,
  productname1,
  productname2,
  source1,
  source2,
}) => {
  return (
    <View style={styles.exclusive}>
      <View style={styles.productContainer}>
        <Image style={styles.products} source={source1} />
        <View style={styles.productNameContainer}>
          <Text style={styles.productname}>{productname1}</Text>
          <Text style={styles.productquantity}>7pcs</Text>
          <View style={styles.priceandbutton}>
            <Text style={styles.productprice}>$4.99 </Text>
            <TouchableOpacity onPress={onPress1}>
              <View style={styles.addbtn}>
                <Ionicons name="add" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.productContainer}>
        <Image style={styles.products} source={source2} />
        <View style={styles.productNameContainer}>
          <Text style={styles.productname}>{productname2}</Text>
          <Text style={styles.productquantity}>1kg</Text>
          <View style={styles.priceandbutton}>
            <Text style={styles.productprice}>$4.99 </Text>
            <TouchableOpacity onPress={onPress2}>
              <View style={styles.addbtn}>
                <Ionicons name="add" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productNameContainer: {
    width: wp("30%"),
    marginTop: hp("2%"),
  },
  products: {
    resizeMode: "contain",
    height: hp("8%"),
    width: wp("15%"),
  },
  productContainer: {
    width: wp("45%"),
    height: hp("30%"),
    borderColor: "#F2F3F2",
    borderWidth: 1.5,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    marginRight: wp("4%"),
  },
  priceandbutton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("1%"),
    marginBottom: hp("1%"),
  },
  addbtn: {
    width: wp("13%"),
    height: wp("13%"),
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
  exclusive: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp("4%"),
    marginLeft: wp("5%"),
  },
});

export default ProductList;
