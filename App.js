import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import RegForm from "./app/components/regForm";

export default function App() {
  return <View style={styles.container}>
    <RegForm/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fc5c9c',
    paddingLeft: 60,
    paddingRight: 60
  },
});
