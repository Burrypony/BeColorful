import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function RegForm() {
  return <View style={styles.regform}> 
    <Text style={styles.header}>Registration</Text>
    
  </View>;
}

const styles = StyleSheet.create({
    regform: {},
    header:{
        fontSize: 24,
        color: '#c5e3f6',
        textAlign: 'center',
        borderBottomColor: '#fccde2',
        borderBottomWidth: 1
    }
});
