import React, { useState } from 'react';
import { Text, ImageBackground, TextInput, TouchableOpacity, Image, View, StyleSheet, Pressable} from 'react-native';
import logo from './src/assets/images/logo.jpeg';
import grain3 from './src/assets/images/grain3.png';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function App() {
  
  const [emai, setEmai] = useState(false);
  const [mob, setMob] = useState(true);
  const [number, setNumber] = useState(0);
  const [mailid, setMailid] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [isHovered, setIsHovered] = React.useState(false);
  
  const toggleShowPassword = () => { 
      setShowPassword(!showPassword); 
  };
  const togglemob = () => {
    setMob(true);
    setEmai(false);
  };
  const toggleemail = () =>{
    setMob(false);
    setEmai(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.log1}>
        <Image source={logo}/>
      </View>
      <Text style={styles.head}>LogIn</Text>

      <View style={styles.modd}>
        <Pressable onPress={togglemob} onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)} style={[styles.hover, isHovered && styles.hoveredText]}>
          
          <Text>Mobile Number </Text>
        </Pressable>
        <TouchableOpacity onPress={toggleemail}>
          
          <Text>Mail ID</Text>
        </TouchableOpacity>
      </View>

      {mob && <View style={StyleSheet.container}>
            <View style={styles.log}>
                <Text style={styles.mob1}>Mobile Number</Text>
                <TextInput style={styles.mbin} placeholder='Enter Number' keyboardType = 'numeric' value={number} maxLength={10} onChange={setNumber}/>
            </View>

            <View style={styles.button1}>
                <TouchableOpacity style={styles.button} onPress={() => ("")}>
                    <Text style={styles.buttonText}>Send OTP</Text>
                </TouchableOpacity>
            </View>
        </View>}
        {emai && <View style={StyleSheet.container}>
            <View style={styles.log}>
                <Text style={styles.mob1}>MailId:</Text>
                <TextInput style={styles.input} placeholder='Enter Mail Id' value={mailid} onChange={setMailid}/>
                <Text>Password:</Text>
                <View style={styles.pwd}>
                  <TextInput secureTextEntry={!showPassword} placeholder='Enter password' value={password} onChangeText={setPassword}/>
                  <MaterialCommunityIcons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#aaa"
                    style={styles.icon} 
                    onPress={toggleShowPassword}/> 
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => ("")}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button1}>
                <TouchableOpacity style={styles.button} onPress={() => ("")}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>}
      <View style={styles.last}>
        <ImageBackground source={grain3} style={styles.image}>
          <Text style={styles.ass}>New to DigiGrain?
            <TouchableOpacity>
              <Text style={styles.last1}>SignUp</Text>
            </TouchableOpacity>
          </Text>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: "center",
  },
  log1:{
    marginTop: 50,
    alignItems: "center",
    marginBottom: 8,
  },
  head:{
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    marginBottom: 10,
  },
  hover: {
    padding: 10,
  },
  hoveredText: {
    backgroundColor: 'lightblue',
  },
  log : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 30,
    marginBottom  :7
  },
  mbin:{
    height : 50,
    paddingHorizontal : 20,
    borderColor : "black",
    borderWidth : 2,
    borderRadius: 7,
    marginBottom: 45
  },
  mob1:{
    fontSize: 13,
    fontWeight: "bold",
  },
  icon:{
    marginLeft: 155,
  },
  mai:{
    fontSize: 13,
    fontWeight: "bold",
  },
  pwd:{
    height: 50,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#f3f3f3', 
    borderWidth: 3,
    borderRadius: 8, 
    paddingHorizontal: 14, 
  },
  
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "black",
    borderWidth : 2,
    borderRadius: 7,
    marginBottom: 5,
  },
  modd:{
    flexDirection: 'row',
    justifyContent: "space-around",
    marginBottom: 18,
    width: "90",
    height : 70,
    marginBottom: 25,
  },
  
  forgetText:{
    gap: 5,
    color: "blue",
    fontSize: 18,
    marginBottom: 6
  },
  button1:{
    width: "80",
    paddingHorizontal: 50,
    marginBottom: 18,
  },
  button : {
    backgroundColor : "blue",
    height : 45,
    borderColor : "white",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold",
  },
  last:{
    width: "100",
    marginTop: "20",
  },
  last1:{
    color: "blue",
  },
  ass:{
    
  },
  image:{
    height: 305,
    width: "100",
    flexDirection: "row",
    justifyContent: "center",
  },
})