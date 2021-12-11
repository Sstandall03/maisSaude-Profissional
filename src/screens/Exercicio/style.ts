import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    containerButton:{
        alignItems: 'center',
        position: 'absolute', 
        bottom: 5,
        right: 40,
        backgroundColor: '#4cb050'
    },
    buttonPlus:{
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
    ViewHeader1:{
        flexDirection: 'row',
        marginHorizontal: SIZES.padding, 
        alignItems: 'center', 
        height: 80
    },
    ViewHeader2: {
        flex: 1
    },
    titleHeader: {
        color: COLORS.darkGreen, 
        fontSize: 30
    },
    subtitleHeader: {
        marginTop: 3, 
        color: COLORS.gray, 
        fontSize: 15
    },
    imageHeader:{
        width: 50, 
        height: 50, 
        borderRadius: 30  
    },
    viewSearchBar:{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray
    },
    iconSearchBar: {
        width: 20, 
        height: 20, 
        tintColor: COLORS.gray
    },
    inputSearchBar: {
        marginLeft: SIZES.radius
    },
    footer:{
        marginBottom: 100
    },
    button:{
        backgroundColor: '#4cb050',
        borderRadius: 10,
        width: 'fit-content',
        height: 'fit-content',
        marginLeft: 20,
        marginBottom: 20
    },
    buttonTitle:{
        color: 'white',
        fontSize: 50,
        textAlign: 'center'
    }
})