import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationTabProp } from "react-navigation-tabs";
import { useScrollToTop } from "@react-navigation/native";
import Beverages from "./Beverages";

interface Navigation {
  navigation: NavigationTabProp<{ screen: string }>;
}

const FindProductDetail: React.FC<Navigation> = ({ navigation }) => {
  const [search, setSearch] = useState<string>("");
  const ref = useRef<ScrollView | null>(null);

  useScrollToTop(ref);

  return (
    <View style={styles.screen}>
      <View style={styles.display}>
        <View style={styles.headers}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.navigate("ProductFlowTab");
            }}
          >
            <Ionicons name="chevron-back-outline" size={24} color="#212121" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => {
              navigation.navigate("FilterScreen");
            }}
          >
            <Ionicons name="filter-outline" size={22} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.Findproducts}>Beverages</Text>
        </View>
        <ScrollView ref={ref} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Beverages
              onPress1={() => {
                Alert.alert("clicked");
              }}
              productname1="Diet Coke"
              productname2="Sprite Can"
              source1={require("../../images/images/diet.png")}
              source2={require("../../images/images/sprite.png")}
            />
            <Beverages
              productname1="Apple & Grape"
              productname2="Orange Juice"
              source1={require("../../images/images/grape.png")}
              source2={require("../../images/images/juice.png")}
            />
            <Beverages
              productname1="Coca Cola Can"
              productname2="Pepsi Can"
              source1={require("../../images/images/coke.png")}
              source2={require("../../images/images/pepsi.png")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    paddingTop: hp("1.2%"),
  },
  screen: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    flex: 1.8,
    width: wp("100%"),
    backgroundColor: "#FFFFFF",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },

  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  back: {
    marginTop: hp("4%"),
    marginLeft: wp("3%"),
  },
  filter: {
    marginTop: hp("4%"),
    marginRight: wp("4%"),
  },
  products: {
    resizeMode: "contain",
    height: hp("25%"),
    width: wp("70%"),
  },
  productContainer: {
    alignItems: "center",
    justifyContent: "center",
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
});

export default FindProductDetail;
