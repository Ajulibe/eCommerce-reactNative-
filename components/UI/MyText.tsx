import * as React from "react";
import { Text } from "react-native";

import adjust from "../Utils/adjustfont";

const MyText = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  small,
  bold,
  italic,
  title,
  style,
  ...rest
}: any) => {
  return (
    <Text
      style={[
        h1 && { fontSize: adjust(48), fontFamily: "gilroy-bold" },
        h2 && { fontSize: adjust(45) },
        h3 && { fontSize: adjust(35) },
        h4 && { fontSize: adjust(25) },
        h5 && {
          fontSize: adjust(14),
          fontFamily: "gilroy-medium",
        },
        small && { fontSize: adjust(12), fontFamily: "gilroy-light" },
        bold && { fontWeight: "bold" },
        italic && { fontStyle: "italic" },
        style,
      ]}
      {...rest}
    >
      {title}
    </Text>
  );
};

export { MyText };
