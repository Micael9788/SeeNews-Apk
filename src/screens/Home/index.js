import React from "react";
import * as ReactNativeElements from "react-native";
import styles from "../../styles/home";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CardNewsNovas from "../../objetos/cards/home/novas";
import CardNewsAntigas from "../../objetos/cards/home/antigas";
import StatusBarHeight from "../../objetos/status-bar";
import axios from "axios";

export default function Home() {
  const { View, FlatList, Text, Image, TouchableOpacity, ActivityIndicator } =
    ReactNativeElements;

  const [isTabLayout, setIsTabLayout] = React.useState(false);
  const [data1, setData1] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  const [isDisplay1, setIsDisplay1] = React.useState("flex");
  const [isDisplay2, setIsDisplay2] = React.useState("none");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);

  React.useEffect(() => {
    fetchNewsNovas();
    fetchNewsAntigas();
  }, []);

  const fetchNewsNovas = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api-seenews-org-production.up.railway.app/api/news/v1/list?&limit=15&oder=desc&page=1`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2JjZDcyOTNhMjNkZmY5ZDk0ZjY4MCIsImlhdCI6MTY4NTgzNTEzNywiZXhwIjoxNjg4NDI3MTM3fQ.K8UptiOAAtTnVsaJElKO1QzWrf-hGHERc0lZiTDJp3LurNq73LRpPid_7yQzb6EoQIPbV31-lcFTVD1Zr9S2p4JGI2Quq8C2piF7dC2-LU2b2f7FVGh8752Ds2gjv9nMrJswAwQdxWZtdWx3OI3pFyrXNC4LxZUCofaPq2q6vR13qF3v0Pp0VNGAW1U-7wp1hRUcpt58rjaj_coksm7Pis_sWuyToZ861AtwRdgfnsgdgjSSCOr2DqjuaCkm0swe50pzm57b1i9ARiLjYE7EaxJXpwwb9P7TcfIsA6SbOcxhFUhrXRZ9hje1BfNi6PcOYtkogzNiBPraWktlILrxtKjTYP_6l9PgLKrbak7zKlxFyDznlzp20uSHTbun0TGVYWcSMT0QX8lfxXW75_icU4Qt5iJDX-Df6RCGS1YS7hAPjMLLS2eXsMTyIXpcCs2QyeLPMzkV876JI7RZ6jEGoaRK_0oELlbKlhM1aqHhgNmJ0ZqGQGJAzpesZsY210QBDSZY0UfINPHcyDccTlOQF1F0o77VVF6vTZ2gtUd6mkJmKmTqfc6SkefEgqOX0FrmAsY0tAlOTxsixRBaGfFeBkFKvdtN82OOLhINUhxHWEhB3qAdIXVSCElwEKoyoePq8duBGtlywE8498TDlWXrkltKiEzmGGYKdJt5LAtIgtY",
          }
        }
      );
      const newData = response.data.noticias.map((item) => ({ ...item }));
      setData1(newData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchNewsAntigas = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api-seenews-org-production.up.railway.app/api/news/v1/list?&limit=15&oder=asc&page=1`,
           {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2JjZDcyOTNhMjNkZmY5ZDk0ZjY4MCIsImlhdCI6MTY4NTgzNTEzNywiZXhwIjoxNjg4NDI3MTM3fQ.K8UptiOAAtTnVsaJElKO1QzWrf-hGHERc0lZiTDJp3LurNq73LRpPid_7yQzb6EoQIPbV31-lcFTVD1Zr9S2p4JGI2Quq8C2piF7dC2-LU2b2f7FVGh8752Ds2gjv9nMrJswAwQdxWZtdWx3OI3pFyrXNC4LxZUCofaPq2q6vR13qF3v0Pp0VNGAW1U-7wp1hRUcpt58rjaj_coksm7Pis_sWuyToZ861AtwRdgfnsgdgjSSCOr2DqjuaCkm0swe50pzm57b1i9ARiLjYE7EaxJXpwwb9P7TcfIsA6SbOcxhFUhrXRZ9hje1BfNi6PcOYtkogzNiBPraWktlILrxtKjTYP_6l9PgLKrbak7zKlxFyDznlzp20uSHTbun0TGVYWcSMT0QX8lfxXW75_icU4Qt5iJDX-Df6RCGS1YS7hAPjMLLS2eXsMTyIXpcCs2QyeLPMzkV876JI7RZ6jEGoaRK_0oELlbKlhM1aqHhgNmJ0ZqGQGJAzpesZsY210QBDSZY0UfINPHcyDccTlOQF1F0o77VVF6vTZ2gtUd6mkJmKmTqfc6SkefEgqOX0FrmAsY0tAlOTxsixRBaGfFeBkFKvdtN82OOLhINUhxHWEhB3qAdIXVSCElwEKoyoePq8duBGtlywE8498TDlWXrkltKiEzmGGYKdJt5LAtIgtY",
          }
        }
      );
      const newData = response.data.noticias.map((item) => ({ ...item }));
      setData2(newData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const StatusBarHeightGet = StatusBarHeight();

  const getItemKey = React.useCallback((item, index) => item._id, []);

  const renderNovas = ({ item }) => {
    return <CardNewsNovas data={item} />;
  };

  const renderAntigas = ({ item }) => {
    return <CardNewsAntigas data={item} />;
  };

  function handleBackButton() {
    BackHandler.exitApp();
    return true;
  }

  function isTabLayoutFunctionTab2() {
    setIsTabLayout(true);
    setIsDisplay1("none");
    setIsDisplay2("flex");
  }

  function isTabLayoutFunctionTab1() {
    setIsTabLayout(false);
    setIsDisplay1("flex");
    setIsDisplay2("none");
  }

  const navigation = useNavigation();

  function drawer() {
    navigation.openDrawer();
  }

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  return (
    <View style={[styles.container, { paddingTop: StatusBarHeightGet }]}>
      <View style={styles.navbar}>
        <MaterialIcons
          style={styles.menu}
          name="menu"
          size={30}
          color="#000000"
          onPress={drawer}
        />
        <Image
          source={require("../../../assets/icons/icon.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.tablayout}>
        <TouchableOpacity style={styles.tab1} onPress={isTabLayoutFunctionTab1}>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontWeight: "bold",
              color: "#5d5d5d",
              fontSize: 15,
              marginBottom: 8,
            }}
          >
            Noticias Hoje
          </Text>
          <View style={[styles.tab1_select, { display: isDisplay1 }]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab2} onPress={isTabLayoutFunctionTab2}>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontWeight: "bold",
              color: "#5d5d5d",
              fontSize: 15,
              marginBottom: 8,
            }}
          >
            Noticias Velhas
          </Text>
          <View style={[styles.tab2_select, { display: isDisplay2 }]}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        {isTabLayout ? (
          isLoading ? (
            <ActivityIndicator style={styles.load} size={55} color="#1C9AEF" />
          ) : (
            <FlatList
              data={data2}
              renderItem={renderAntigas}
              keyExtractor={getItemKey}
              initialNumToRender={10}
              maxToRenderPerBatch={10}
              windowSize={10}
              updateCellsBatchingPeriod={50}
              removeClippedSubviews={true}
              disableIntervalMomentum={false}
            />
          )
        ) : isLoading ? (
          <ActivityIndicator style={styles.load} size={55} color="#1C9AEF" />
        ) : (
          <FlatList
            data={data1}
            renderItem={renderNovas}
            keyExtractor={getItemKey}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={10}
            updateCellsBatchingPeriod={50}
            removeClippedSubviews={true}
            disableIntervalMomentum={false}
          />
        )}
      </View>
    </View>
  );
}
