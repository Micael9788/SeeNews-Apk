import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828"
  },
  navbar: {
    height: 65,
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(93, 93, 93, 0.2)",
  },
  load: {
    marginTop: "15%"
  },
  menu: {
    marginRight: "auto",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: "auto",
    marginLeft: -27,
  },
  tablayout: {
    height: 58,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(93, 93, 93, 0.2)",
  },
  tab1: {
    marginRight: 50,
  },
  tab1_select: {
    width: "90%",
    marginRight: "auto",
    marginLeft: "auto",
    height: 3,
    backgroundColor: "#1C9AEF",
    borderRadius: 10,
  },
  tab2: {
    fontSize: 18,
  },
  tab2_select: {
    display: "none",
    width: "90%",
    marginRight: "auto",
    marginLeft: "auto",
    height: 3,
    backgroundColor: "#1C9AEF",
    borderRadius: 10,
  },
  header: {
    backgroundColor: "#f3f3f3",
    height: "100%",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 60,
  },
  list: {
    height: "100%",
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5,
  },
  bottom_navigate: {
    borderTopWidth: 2,
    borderTopColor: "rgba(93, 93, 93, 0.2)",
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  add: {
    height: 45,
    width: 45,
    backgroundColor: "#1C9AEF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default styles;
