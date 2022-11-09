import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";


const LogIn = props =>{
    return(
        <View>

        </View>
    )
}


// export default function LogInForm() {
//   return <View style={styles.regform}> 
//     <Text style={styles.header}>Registration</Text>
//     <TextInput style={styles.input} placeholder="Your email / phone"></TextInput>
//     <TextInput style={styles.input} placeholder="Your password" secureTextEntry={true}></TextInput>
//     <TouchableOpacity style={styles.btn}>
//       <Text style={styles.btnText}>Sign In</Text>
//     </TouchableOpacity>

//   </View>;
// }

const styles = StyleSheet.create({
    regform: {},
    header:{
        fontSize: 24,
        color: '#c5e3f6',
        textAlign: 'center',
        borderBottomColor: '#fccde2',
        borderBottomWidth: 1,
        paddingBottom: 15,
        marginBottom: 20
    },
    input:{
      padding: 15,
      margin: 5,
      borderBottomWidth: 1
    },
    btn:{
      alignSelf: 'center',
      alignItems: 'center',
      padding: 20,
      marginTop: 30
    }
});


export default LogIn