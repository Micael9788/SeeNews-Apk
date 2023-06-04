import React from "react";
import { StyleSheet } from "react-native";
import * as ReactNativeElements from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Inter_900Black, Inter_400Regular } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";

export default function DrawerHome(props) {
  const { View, Linking, Text, TouchableOpacity, Image } = ReactNativeElements;

  function privacidade() {
    Linking.openURL(
      "http://api-seenews-org-production.up.railway.app/api/privacidade"
    );
  }

  function suporte() {
    Linking.openURL(
      "http://api-seenews-org-production.up.railway.app/api/suporte"
    );
  }

  function api() {
    Linking.openURL(
      "http://api-seenews-org-production.up.railway.app/api/docs"
    );
  }

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.card} onPress={privacidade}>
          <MaterialIcons
            style={{ marginTop: 13 }}
            name="lock"
            size={23}
            color="#5d5d5d"
          />
          <View style={styles.container_texto}>
            <Text style={styles.title}>Política De Privacidade</Text>
            <Text style={styles.descricao}>
              saiba como proteger sua privacidade e como mantemos seus dados
              seguros.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={suporte}>
          <MaterialIcons
            style={{ marginTop: 13 }}
            name="help"
            size={23}
            color="#5d5d5d"
          />
          <View style={styles.container_texto}>
            <Text style={styles.title}>Suporte See News</Text>
            <Text style={styles.descricao}>
              entre em contato conosco para relatar bugs ou para melhorias no
              aplicativo.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={api}>
          <MaterialIcons
            style={{ marginTop: 13 }}
            name="api"
            size={23}
            color="#5d5d5d"
          />
          <View style={styles.container_texto}>
            <Text style={styles.title}>See News Api</Text>
            <Text style={styles.descricao}>
              entre em contato conosco para usar nossa api.
            </Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../../../assets/icons/icon.png")}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt_btn}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>@ 2023 • SeeNews</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  card: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 12,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(93, 93, 93, 0.2)",
  },
  container_texto: {
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 1,
    fontFamily: "Inter_900Black",
  },
  descricao: {
    fontSize: 12,
    color: "#5d5d5d",
    marginBottom: 3,
    width: 170,
    fontWeight: "450",
    fontFamily: "Inter_400Regular",
  },
  logo: {
    height: 60,
    width: 60,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "60%",
  },
  footer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "12%",
    fontWeight: "450",
    fontSize: 13,
  },
  btn: {
    width: "85%",
    borderRadius: 7,
    height: 45,
    backgroundColor: "#1C9AEF",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70%",
  },
  txt_btn: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Inter_900Black",
    fontWeight: "bold",
  },
});
