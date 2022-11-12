import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Inputs from "./Inputs";
import Submit from "./Submit";

const LogIn = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.outer}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to BeColorful</Text>
        <Text style={styles.textBody}>Log in to your existant account</Text>
        <View style={{ marginTop: 20 }}></View>
        <Inputs name="Email" icon="user"></Inputs>
        <Inputs name="Password" icon="lock" pass={true}></Inputs>
        <View style={{ width: "90%" }}>
          <Text style={[styles.textBody, { alignSelf: "flex-end" }]}>
            Forgot Password ?
          </Text>
        </View>
        <Submit title="LOG IN" color="#0148a4" />
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.textBody}>Don't Have an account </Text>
          <Text style={[styles.textBody, {color:'blue'}]} onPress={()=> props.navigation.navigate('SignUp')}>Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  regform: {},
  outer: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    marginTop: 50,
    fontSize: 24,
    color: "#799EC1",
    borderBottomColor: "#799EC1",
    borderBottomWidth: 1,
    paddingBottom: 1,
    marginBottom: 1,
  },
  btn: {
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 30,
  },
  textBody: {
    fontSize: 20,
    color: "#BDE0FE",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFAFCC",
  },
});

export default LogIn;
