import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import Inputs from "./Inputs";
import Submit from "./Submit";

const RegForm = props => {
  return (
    <ScrollView >
      <View style={styles.regform}>
        <Text style={styles.header}>Let's Get Started</Text>
        <Inputs name="Your name" icon="user"/>
        <Inputs name="Your email" icon="envelope"/>
        <Inputs name="Your phone" icon="phone"/>
        <Inputs name="Your password" icon="lock" pass={true}/>
        <Inputs name="Confirm your password" icon="lock" pass={true}/>
        <Submit color="#0251ce" title="CREATE" />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textBody}>Already have an account</Text>
          <Text style={[styles.textBody, {color:'blue'}]} onPress={()=> props.navigation.navigate('Home')}>Login here</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  regform: {
    flex:1,
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    color: "#c5e3f6",
    textAlign: "center",
    borderBottomColor: "#fccde2",
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 20,
  },
  textBody:{
    fontSize: 16
  }
});

export default RegForm