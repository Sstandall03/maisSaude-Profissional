import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    img:{
        height: 360,
        width: '100%'
    },
    content:{
        marginTop: -40,
        paddingHorizontal: 30
    },
    title:{
        fontSize: 30,
        color: '#2a4048',
        textAlign: 'center',
        marginBottom: 15
    },
    subtitle:{
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 30
    }
})