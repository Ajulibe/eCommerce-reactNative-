import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import NavigationContainer from "./navigation/NavigationContainer";
import { View, StatusBar } from "react-native";

const fetchFonts = () => {
  return Font.loadAsync({
    "gilroy-regular": require("./assets/fonts/Gilroy-Regular.ttf"),
    "gilroy-light": require("./assets/fonts/Gilroy-Light.ttf"),
    "gilroy-bold": require("./assets/fonts/Gilroy-Bold.ttf"),
    "gilroy-medium": require("./assets/fonts/Gilroy-Medium.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <NavigationContainer />
    </View>
  );
}
