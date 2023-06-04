import { Platform, StatusBar } from "react-native";

function getStatusBarHeight() {
  return Platform.OS === "android" ? StatusBar.currentHeight : 20;
}

export default getStatusBarHeight;
