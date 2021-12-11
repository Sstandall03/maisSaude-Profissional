import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    scroll:{
        width: '100%',
        height: '100%',
    },
    viewImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    date:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
       width: '100%',
       height: 150,
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
    title:{
        marginBottom: 5
    },
    radioButton:{
        alignItems: 'center',
    },
    button: {
        width: '100%',
        marginBottom: 10,
        marginTop: 10
    }
})