import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    image:{
       width: '100%',
       height: 130,
       marginBottom: 10
    },
    input:{
        width: '100%',
        height: 56,
        borderBottomWidth: 1,
        borderBottomColor: '#4cb050',
        marginBottom: 20, 
        textAlign: 'center'
    },
    button: {
        width: '100%',
        marginBottom: 10,
        marginTop: 10
    }, 
    subtitle:{
       fontSize: 15
    }
})