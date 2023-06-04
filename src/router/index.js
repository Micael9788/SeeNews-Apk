import React from "react";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import DrawerHome from "../objetos/drawer/home";

enableScreens();

const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <Drawer.Navigator
      drawerHideStatusBarOnOpen="true"
      drawerStatusBarAnimation="fade"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 240,
        },
      }}
      drawerContent={(props) => <DrawerHome {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
