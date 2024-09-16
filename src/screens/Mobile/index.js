import React, {useState} from "react";
import { StyleSheet } from "./style.js";
import { Text, View, TouchableOpacity} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const Mobil = () => {
    const [number, setNumber] = useState();
    return(
        <View style={StyleSheet.container}>
            <View style={styles.log}>
                <Text>Mobile Number:</Text>
                <PhoneInput style={styles.input} placeholder='Enter Number' keyboardType = 'numeric' value={number} onChange={setNumber}/>
            </View>

            <View style={styles.button1}>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Sent Successfuly!")}>
                    <Text style={styles.buttonText}>Send OTP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Mobil;