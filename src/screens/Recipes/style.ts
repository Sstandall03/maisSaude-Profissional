import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    }, 
    title:{
        fontSize: 30,
        color: COLORS.black
    },
    containerHeader:{
        alignItems: 'center'
    },
    image:{
        height: 350,
        width: '200%'
    },
    viewCreator:{
        position: "absolute",
        bottom: 10,
        left: 30,
        right: 30,
        height: 80
    },
    blurView:{
        flex: 1,
        borderRadius: SIZES.radius
    },
    viewAndroid:{
        flex: 1,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.transparentBlack9
    },
    recipeDetailView:{
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePicView:{
        width: 40,
        height: 40,
        marginLeft: 20
    },
    profilePic:{
        width: 40,
        height: 40,
        borderRadius: 20
    },
    labelView:{
        flex: 1,
        marginHorizontal: 20
    },
    labelBy:{
        color: COLORS.lightGray2
    },
    labelName:{
        color: COLORS.white2
    },
    button:{
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.lightGreen1
    },
    icon:{
        width: 15,
        height: 15,
        tintColor: COLORS.lightGreen1
    },
    headerBarView:{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 90,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding,
        paddingBottom: 10
    },
    backButton:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 35,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        backgroundColor: COLORS.transparentBlack5
    },
    iconBack:{
        width: 20,
        height: 15,
        tintColor: COLORS.lightGray
    },
    recipeInfoCard:{
        flexDirection: 'row',
        height: 130,
        width: SIZES.width,
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center'
    },
    titleInfo:{
        flexDirection: 'row'
    },
    antDesign:{
        marginRight: 5
    },
    recipeInfoView:{
        flex: 1.5,
        justifyContent: 'center'
    },
    subtitleInfo:{
        marginTop: 5,
        color: COLORS.lightGray2,
        fontSize: 15
    },
    containerAll:{
        marginRight: 10,
        borderTopWidth: 1,
        flexDirection: 'row',
        borderColor: '#969c8e'
    },
    containerIngredients:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    containerQuantidade:{
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
})