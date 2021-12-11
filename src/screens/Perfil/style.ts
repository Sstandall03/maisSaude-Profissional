import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingBottom: 15
    },
    profilePic:{
        height: 150,
        width: 150,
        borderRadius: 100,
    },
    profileDesc:{
        backgroundColor: '#eeeee4',
        borderRadius: 10,
        marginTop: 5,
        width: '60%',
        textAlign: 'center'
    },
    textProfile:{
        fontSize: 20,
        textAlign: 'center'
    },
    subtitleProfile:{
        fontSize: 15,
        textAlign: 'center'
    },
    container2:{
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icons:{
        height: 100,
        width: 100
    },
    column:{
        marginLeft: 10
    },
    column2:{
        marginRight: 10
    },
    card:{
        marginVertical: 40,
        alignItems: 'center',
        padding: 5
    },
    text:{
        textAlign: 'center',
        fontSize: 30,
        color: 'black'
    },
    subtitle:{
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },
    logout:{
        position: 'absolute',
        right: 0,
        top: 0,
        marginRight: 5
    }
})