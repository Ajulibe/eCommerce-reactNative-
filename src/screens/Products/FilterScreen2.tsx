import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationTabProp } from "react-navigation-tabs";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/UI/Button";
import Colors from "../../constants/Colors";

interface Navigation {
  navigation: NavigationTabProp<{ screen: string }>;
}

const FilterScreen: React.FC<Navigation> = ({ navigation }) => {
  const [search, setSearch] = useState<string>("");
  const [eggs, setEggs] = useState<boolean>(false);
  const [noodles, setNoodles] = useState<boolean>(false);
  const [chips, setChips] = useState<boolean>(false);
  const [food, setFood] = useState<boolean>(false);
  const [collection, setCollection] = useState<boolean>(false);
  const [coca, setCoca] = useState<boolean>(false);
  const [ifad, setIfad] = useState<boolean>(false);
  const [farmers, setfarmers] = useState<boolean>(false);
  return (
    <View style={styles.screen}>
      <View style={styles.display}>
        <View style={styles.FindproductsContainer}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              navigation.navigate("Explore");
            }}
          >
            <AntDesign name="close" size={20} color="#212121" />
          </TouchableOpacity>

          <Text style={styles.Findproducts}>Filters</Text>
        </View>
      </View>

      <View style={styles.downContainer}>
        <View>
          <Text style={styles.downContainerText}>Categories</Text>
          <CheckBox
            checkedIcon={<Ionicons name="checkbox" size={22} color="#53B175" />}
            uncheckedIcon={
              <MaterialIcons
                name="check-box-outline-blank"
                size={24}
                color="rgba(177,177,177,1)"
              />
            }
            title="Eggs"
            checked={eggs}
            onPress={() => {
              setEggs(!eggs);
            }}
            checkedColor="#53B175"
            containerStyle={styles.containerStyle}
            textStyle={[
              styles.textStyle,
              { color: eggs ? "#53B175" : "rgba(24,23,37,1)" },
            ]}
          />
          <CheckBox
            checkedIcon={<Ionicons name="checkbox" size={22} color="#53B175" />}
            uncheckedIcon={
              <MaterialIcons
                name="check-box-outline-blank"
                size={24}
                color="rgba(177,177,177,1)"
              />
            }
            title="Noodles & Pasta"
            checked={noodles}
            onPress={() => {
              setNoodles(!noodles);
            }}
            checkedColor="#53B175"
            containerStyle={styles.containerStyle2}
            textStyle={[
              styles.textStyle,
              { color: noodles ? "#53B175" : "rgba(24,23,37,1)" },
            ]}
          />
          <CheckBox
            checkedIcon={<Ionicons name="checkbox" size={22} color="#53B175" />}
            uncheckedIcon={
              <MaterialIcons
                name="check-box-outline-blank"
                size={24}
                color="rgba(177,177,177,1)"
              />
            }
            title="Chips & Crisps"
            checked={chips}
            onPress={() => {
              setChips(!chips);
            }}
            checkedColor="#53B175"
            containerStyle={styles.containerStyle2}
            textStyle={[
              styles.textStyle,
              { color: chips ? "#53B175" : "rgba(24,23,37,1)" },
            ]}
          />
          <CheckBox
            checkedIcon={<Ionicons name="checkbox" size={22} color="#53B175" />}
            uncheckedIcon={
              <MaterialIcons
                name="check-box-outline-blank"
                size={24}
                color="rgba(177,177,177,1)"
              />
            }
            title="Fast Food"
            checked={food}
            onPress={() => {
              setFood(!food);
            }}
            checkedColor="#53B175"
            containerStyle={styles.containerStyle2}
            textStyle={[
              styles.textStyle,
              { color: food ? "#53B175" : "rgba(24,23,37,1)" },
            ]}
          />
        </View>
        <View>
          <Text style={styles.headerText}>Brand</Text>
          <CheckBox
            checkedIcon={<Ionicons name="checkbox" size={22} color="#53B175" />}
            uncheckedIcon={
              <MaterialIcons
                name="check-box-outline-blank"
                size={24}
                color="rgba(177,177,177,1)"
              />
            }
            title="Individual Collection"
            checked={collection}
            onPress={() => {
              setCollection(!collection);
            }}
            checkedColor="#53B175"
            containerStyle={styles.containerStyle}
            textStyle={[
              styles.textStyle,
              { color: collection ? "#53B175" : "rgba(24,23,37,1)" },
            ]}
          />
          <CheckBox
            checkedIcon={<Ionicons name="checkbox" size={22} color="#53B175" />}
            uncheckedIcon={
              <MaterialIcons
                name="check-box-outline-blank"
                size={24}
                color="rgba(177,177,177,1)"
              />
            }
            title="Coca Cola"
            checked={coca}
            onPress={() => {
              setCoca(!coca);
            }}
            checkedColor="#53B175"
            containerStyle={styles.containerStyle2}
            textStyle={[
              styles.textStyle,
              {
                color: coca ? "#53B175" : "rgba(24,23,37,1)",
              },
            ]}
          />
          <CheckBox
            checkedIcon={<Ionicons name="checkbox" size={22} color="#53B175" />}
            uncheckedIcon={
              <MaterialIcons
                name="check-box-outline-blank"
                size={24}
                color="rgba(177,177,177,1)"
              />
            }
            title="Ifad"
            checked={ifad}
            onPress={() => {
              setIfad(!ifad);
            }}
            checkedColor="#53B175"
            containerStyle={styles.containerStyle2}
            textStyle={[
              styles.textStyle,
              {
                color: ifad ? "#53B175" : "rgba(24,23,37,1)",
              },
            ]}
          />
          <CheckBox
            checkedIcon={<Ionicons name="checkbox" size={22} color="#53B175" />}
            uncheckedIcon={
              <MaterialIcons
                name="check-box-outline-blank"
                size={24}
                color="rgba(177,177,177,1)"
              />
            }
            title="Kazi Farmers"
            checked={farmers}
            onPress={() => {
              setfarmers(!farmers);
            }}
            checkedColor="#53B175"
            containerStyle={styles.containerStyle2}
            textStyle={[
              styles.textStyle,
              {
                color: farmers ? "#53B175" : "rgba(24,23,37,1)",
              },
            ]}
          />
        </View>
        <View style={styles.submitBtnStyle}>
          <Button Color={Colors.primary} style={styles.submitbtn}>
            <Text style={styles.submit}>Apply Filter</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  display: {
    height: hp("10%"),
    width: wp("100%"),
  },
  downContainer: {
    height: hp("87%"),
    backgroundColor: "rgba(242,243,242,1)",
    width: wp("100%"),
    borderTopRightRadius: wp("7.24%"),
    borderTopLeftRadius: wp("7.24%"),
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  close: {
    marginLeft: wp("5%"),
  },
  filter: {
    marginTop: hp("4%"),
    marginRight: wp("4%"),
  },

  Findproducts: {
    fontFamily: "gilroy-bold",
    fontSize: wp("4.83%"),
    color: "#181725",
    marginLeft: wp("30%"),
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
    width: wp("100%"),
    alignItems: "center",
    marginTop: hp("15%"),
  },
  FindproductsContainer: {
    marginTop: hp("6%"),
    height: hp("5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  downContainerText: {
    fontSize: wp("5.79%"),
    fontFamily: "gilroy-medium",
    marginTop: hp("3.35%"),
    marginLeft: wp("6.04%"),
  },
  containerStyle: {
    backgroundColor: "rgba(242,243,242,1)",
    borderWidth: 0,
    marginTop: hp("2.79%"),
  },
  textStyle: {
    fontFamily: "gilroy-regular",
    fontSize: wp("3.86%"),
    marginTop: hp("0.5%"),
  },
  containerStyle2: {
    backgroundColor: "rgba(242,243,242,1)",
    borderWidth: 0,
    marginTop: hp("-1.3%"),
  },
  headerText: {
    fontSize: wp("5.79%"),
    fontFamily: "gilroy-medium",
    marginTop: hp("3.35%"),
    marginLeft: wp("6.04%"),
  },
});

export default FilterScreen;
