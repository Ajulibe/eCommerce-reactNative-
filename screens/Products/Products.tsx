import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const ProductList = ({ navigation }: any) => {
  return (
    <ScrollView
      horizontal={true}
      style={{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "transparent",
        borderColor: "red",
        borderWidth: 2,
      }}
    >
      <View style={styles.exclusive}>
        <View style={styles.productContainer}>
          <Image
            style={styles.products}
            source={require("../../images/images/potato.png")}
          />
          <View style={{ width: "80%" }}>
            <Text style={styles.productname}>Organic Potato</Text>
            <Text style={styles.productquantity}>7pcs</Text>
            <View style={styles.priceandbutton}>
              <Text style={styles.productprice}>$4.99 </Text>
              <View style={styles.addbtn}>
                <Ionicons name="add" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.productContainer}>
          <Image
            style={styles.products}
            source={require("../../images/images/apple.png")}
          />
          <View style={{ width: "80%" }}>
            <Text style={styles.productname}>Red Apple</Text>
            <Text style={styles.productquantity}>1kg</Text>
            <View style={styles.priceandbutton}>
              <Text style={styles.productprice}>$4.99 </Text>
              <View style={styles.addbtn}>
                <Ionicons name="add" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.productContainer}>
          <Image
            style={styles.products}
            source={require("../../images/images/potato.png")}
          />
          <View style={{ width: "80%" }}>
            <Text style={styles.productname}>Organic Potato</Text>
            <Text style={styles.productquantity}>7pcs</Text>
            <View style={styles.priceandbutton}>
              <Text style={styles.productprice}>$4.99 </Text>
              <View style={styles.addbtn}>
                <Ionicons name="add" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.productContainer}>
          <Image
            style={styles.products}
            source={require("../../images/images/apple.png")}
          />
          <View style={{ width: "80%" }}>
            <Text style={styles.productname}>Red Apple</Text>
            <Text style={styles.productquantity}>1kg</Text>
            <View style={styles.priceandbutton}>
              <Text style={styles.productprice}>$4.99 </Text>
              <View style={styles.addbtn}>
                <Ionicons name="add" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  products: {
    resizeMode: "contain",
    height: hp("14%"),
    width: wp("20%"),
  },
  productContainer: {
    width: "45%",
    height: hp("30%"),
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
    marginTop: "10%",
    marginBottom: "10%",
  },
  addbtn: {
    width: wp("13%"),
    height: hp("7%"),
    borderRadius: 19,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: "3%",
  },
  productprice: {
    color: "#181725",
    fontFamily: "gilroy-bold",
    fontSize: 18,
  },
  exclusive: {
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp("3%"),
  },
});

export default ProductList;
