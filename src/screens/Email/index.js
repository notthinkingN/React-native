import React, {useState} from "react";
import { Text, TextInput, View, TouchableOpacity} from "react-native";
import { StyleSheet } from './style.js';

const email = () => {
    const [mailid, setMailid] = useState();
    const [password, setPassword] = useState();
    return(
        <View style={StyleSheet.container}>
            <View style={styles.log}>
                <Text>MailId:</Text>
                <TextInput style={styles.input} placeholder='Enter Mail Id' value={mailid} onChange={setMailid}/>
                <Text>Password:</Text>
                <TextInput style={styles.input} placeholder='Password' value={password} onChange={setPassword}/>
            </View>
            <View>
                <TouchableOpacity onPress={() => Alert.alert("Forget Password!")}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button1}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Login Successfuly!")}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default email;