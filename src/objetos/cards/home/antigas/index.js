import React from "react";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import * as ReactNativeElements from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";
import "moment/locale/pt-br";

export default function CardNewsNovas(props) {
  const { View, Text, Linking, ImageBackground, TouchableOpacity } =
    ReactNativeElements;

  const [isPopoverVisible, setIsPopoverVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const siteText =
    props.data.creator.length > 20
      ? props.data.creator.substring(0, 20) + "..."
      : props.data.creator;

  const abrirLink = () => {
    Linking.openURL(props.data.url);
  };

  const currentDate = moment();
  const newsDate = moment(props.data.date, "YYYY-MM-DD HH:mm:ss");

  const diffInDays = currentDate.diff(newsDate, "days");
  const formattedDiff = moment.duration(diffInDays, "days").humanize();

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  if (!fontsLoaded || !props.data) {
    return null;
  }

  return (
    <TouchableOpacity>
      <ImageBackground source={{ uri: props.data.image }} style={styles.card}>
        <LinearGradient
          colors={["transparent", "#000", "#000"]}
          style={styles.gradient}
        >
          <View style={styles.items_post}>
            <TouchableOpacity style={styles.status}>
              <Text style={styles.txt_status}>antiga</Text>
            </TouchableOpacity>
            <View style={styles.site}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[styles.site_txt, { fontFamily: "Inter_400Regular" }]}
              >
                {siteText}
              </Text>
              <Text style={[styles.data, { fontFamily: "Inter_400Regular" }]}>
                {`há ${formattedDiff}`}
              </Text>
            </View>
            <Text style={[styles.titulo, { fontFamily: "Inter_900Black" }]}>
              {props.data.title}
            </Text>
            <Text
              numberOfLines={20}
              ellipsizeMode="tail"
              style={[styles.descricao, { fontFamily: "Inter_400Regular" }]}
            >
              {props.data.description}
            </Text>
            <TouchableOpacity style={styles.btn}>
              <Text
                style={[styles.txt_btn, { fontFamily: "Inter_400Regular" }]}
                onPress={abrirLink}
              >
                ver noticia
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  gradient: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  status: {
    width: 65,
    height: 28,
    borderRadius: 50,
    backgroundColor: "#1C9AEF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50%",
  },
  txt_status: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  site: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
    paddingLeft: 3,
    paddingRight: 3,
  },
  site_txt: {
    color: "#fff",
    fontSize: 12,
    flex: 1,
  },
  data: {
    color: "#fff",
    fontSize: 12,
  },
  titulo: {
    color: "#fff",
    marginTop: 25,
    fontSize: 16,
    textAlign: "left",
  },
  descricao: {
    color: "#fff",
    marginTop: 18,
    fontSize: 13,
    paddingLeft: 3,
    paddingRight: 3,
  },
  txt_btn: {
    color: "#fff",
    fontWeight: "bold",
  },
  length: {
    color: "#00FF01",
    marginLeft: 5,
    fontSize: 15,
  },
  comentes: {
    flexDirection: "row",
    marginTop: 15,
    paddingLeft: 5,
    alignItems: "center",
    width: 100,
  },
  btn: {
    width: "35%",
    height: 40,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C9AEF",
  },
});
