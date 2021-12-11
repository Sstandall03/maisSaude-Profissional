import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        position: 'absolute', 
        bottom: 5,
        right: 40
    },
    button:{
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 /2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: '#4cb050',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10,
            width: 20
        }
    },
    menu: {
        backgroundColor: '#4cb050'
    },
    submenu:{
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#4cb050'
    }
});