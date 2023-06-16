import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import NavBar from "./components/navBar";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello world </Text> */}
      <StatusBar style="light" />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#5e0acc",
  },
});
