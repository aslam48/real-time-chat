import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView, Alert,TouchableOpacity} from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";



const Login = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

const onHandleLogin = () => {
    if (email !== "" && password !== ""){
        signInWithEmailAndPassword(auth, email, password)
        .then(()=> console.log("login success"))
        .catch((err)=> Alert.alert("login error", err.message))
    }
}

  
return (
    <View style={{margin:15}}>
        <SafeAreaView>
        <TextInput 
        placeholder="enter email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{width: "100%", height: 20, borderBottomColor: "#111", borderBottomWidth: 1}}
        />

<TextInput 
        placeholder="enter password"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry={true}
        autoFocus={false}
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{width: "100%", height: 20, borderBottomColor: "#111", borderBottomWidth: 1, marginTop: 20}}
        />

      <TouchableOpacity style={{  alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 15
    }} onPress={onHandleLogin}>
        <Text>Log in</Text>
      </TouchableOpacity>

      {/* dont have and account  */}
      <View style={{marginTop:20, flexDirection: "row", alignItems:"center"}}>

        <Text style={{marginLeft: 20}}>Dont have and account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={{marginLeft: 5}}>
            <Text style={{color: "orange"}}>Sign up</Text>
        </TouchableOpacity>
      </View>
        </SafeAreaView>
    </View>
)

}

export default Login
