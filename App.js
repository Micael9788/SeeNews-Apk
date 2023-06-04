import "react-native-gesture-handler";
import React, { useEffect, useRef } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import Router from "./src/router";

enableScreens();

export default function App(ref) {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor="#fff" />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
}
