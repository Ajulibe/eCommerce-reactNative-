import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// interface Props {
//   Color: string;
//   onPress: () => void;
//   children: any;
//   marginBottom: string | number;
//   marginTop: any;
//   style: any;
//   ...rest:any
// }

const Button = ({
  Color,
  onPress,
  children,
  marginBottom,
  marginTop,
  style,
  ...rest
}: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: Color, marginBottom: marginBottom },
        style,
      ]}
      {...rest}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: wp("90%"),
    height: hp("9%"),
    borderRadius: 19,
    flexDirection: "row",
  },
});

export default Button;
