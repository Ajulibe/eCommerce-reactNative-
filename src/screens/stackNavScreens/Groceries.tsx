import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { ScrollView } from "react-native-gesture-handler";

const Groceries = ({ navigation }: any) => {
  return (
    <ScrollView
      horizontal={true}
      style={{ flex: 1 }}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.exclusive}>
        <View style={styles.productContainer}>
          <Image
            style={styles.products}
            source={require("../../images/images/potato.png")}
          />

          <Text style={styles.productname}>Pulses</Text>
        </View>
        <View
          style={[
            styles.productContainer,
            {
              backgroundColor: "rgba(83,177,117,0.2)",
              borderColor: "rgba(83,177,117,0.3)",
            },
          ]}
        >
          <Image
            style={styles.products}
            source={require("../../images/images/potato.png")}
          />

          <Text style={styles.productname}>Pulses</Text>
        </View>
        <View style={styles.productContainer}>
          <Image
            style={styles.products}
            source={require("../../images/images/potato.png")}
          />

          <Text style={styles.productname}>Pulses</Text>
        </View>
        <View
          style={[
            styles.productContainer,
            {
              backgroundColor: "rgba(83,177,117,0.2)",
              borderColor: "rgba(83,177,117,0.3)",
            },
          ]}
        >
          <Image
            style={styles.products}
            source={require("../../images/images/potato.png")}
          />

          <Text style={styles.productname}>Pulses</Text>
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
    flexDirection: "row",
    width: wp("55%"),
    height: hp("18%"),
    borderColor: "#FFC589",
    borderWidth: 1,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: wp("4%"),
    backgroundColor: "#FBDFC2",
  },

  productname: {
    color: "#181725",
    fontFamily: "gilroy-bold",
    fontSize: 16,
  },
  exclusive: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp("4%"),
    marginLeft: wp("5%"),
  },
});

export default Groceries;
