import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '50',
    },
    log : {
        gap : 15,
        width : "100%",
        paddingHorizontal : 40,
        marginBottom  :5,
    },
    forgetText : {
        fontSize : 16,
        textAlign: 'right',
        color : "black",
    },
    tet1:{
        textAlign:"left",
    },
    input : {
        width: "80",
        height : 50,
        paddingHorizontal : 20,
        borderColor : "black",
        borderWidth : 1,
        borderRadius: 7,
    },
    button1:{
        width: "100",
        paddingHorizontal: 50,
    },
    button : {
        backgroundColor : "blue",
        height : 45,
        borderColor : "black",
        borderWidth  : 1,
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "center"
    },
    buttonText : {
        color : "white"  ,
        fontSize: 18,
        fontWeight : "bold"
    }, 
  })
export default styles;  