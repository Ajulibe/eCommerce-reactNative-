import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  productname1: string;
  productname2: string;
  borderColor: string;
  backgroundColor: string;
  borderColor2: string;
  backgroundColor2: string;
  source1: any;
  source2: any;
  onPress1?: () => void;
  onPress2?: () => void;
}

const FindProductList: React.FC<Props> = ({
  productname1,
  productname2,
  backgroundColor2,
  borderColor2,
  backgroundColor,
  borderColor,
  source1,
  source2,
  onPress1,
  onPress2,
}) => {
  return (
    <View style={styles.exclusive}>
      <TouchableOpacity onPress={onPress1}>
        <View
          style={[
            styles.productContainer,
            {
              borderColor: borderColor,
              backgroundColor: backgroundColor,
            },
          ]}
        >
          <Image style={styles.products} source={source1} />
          <View style={{ width: wp("40%") }}>
            <Text style={styles.productname}>{productname1}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress2}>
        <View
          style={[
            styles.productContainer2,
            {
              borderColor: borderColor2,
              backgroundColor: backgroundColor2,
            },
          ]}
        >
          <Image style={styles.products} source={source2} />
          <View style={{ width: wp("40%") }}>
            <Text style={styles.productname}>{productname2}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  exclusive: {
    width: wp("100%"),
    flexDirection: "row",
    marginBottom: hp("1.4%"),
    justifyContent: "space-around",
  },
  products: {
    resizeMode: "contain",
    height: hp("14%"),
    width: wp("20%"),
  },
  productContainer: {
    width: wp("43%"),
    height: hp("22%"),
    borderColor: "#F2F3F2",
    borderWidth: 1,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: wp("3%"),
  },
  productContainer2: {
    width: wp("43%"),
    height: hp("22%"),
    borderColor: "#F2F3F2",
    borderWidth: 1,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: wp("3%"),
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

export default FindProductList;
