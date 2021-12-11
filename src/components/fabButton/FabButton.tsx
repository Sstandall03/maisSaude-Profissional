import React, {Component} from 'react';
import { View, TouchableWithoutFeedback, Animated } from 'react-native';
import { styles } from './fabStyle';
import {AntDesign} from '@expo/vector-icons';
import { firestore, doc, deleteDoc, updateDoc } from '../../database/firebase';
import { async } from '@firebase/util';

export default class FabButton extends Component  {

    //alimentacao = this.props;
    
    animation = new Animated.Value(0);

    toggleMenu = () =>{
        const toValue = this.open ? 0 : 1;
        Animated.spring(this.animation, {
            toValue, 
            friction: 5,
            useNativeDriver: true
        }).start();

        this.open = !this.open;
        
    }

    delete = async() =>{
        if(this.props.especialidade = 'alimentacao'){
            await deleteDoc(doc(firestore, "alimentacao", this.props.dado));   
            await deleteDoc(doc(firestore, "ingrediente", this.props.dado));   
        }else{
            await deleteDoc(doc(firestore, "exercicio", this.props.dado));
        }
        
    }

    /*edit = async() => {
        if(this.props.edit){
            console.log(this.props.edit)
        }else{
            console.log(this.props.edit)
        }
        return(
            setEditar(this.props.edit)
        );
    }*/
    edit = async() =>{
    
    }

    render(){

        const plusStyle = {
            transform: [
                {scale: this.animation},
                {
                   translateY: this.animation.interpolate({
                       inputRange: [0,1],
                       outputRange: [0,-60]
                   }) 
                }
            ]
        }
        const deleteStyle = {
            transform: [
                {scale: this.animation},
                {
                   translateY: this.animation.interpolate({
                       inputRange: [0,1],
                       outputRange: [0,-120]
                   }) 
                }
            ]
        }


        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this.delete()}>
                    <Animated.View style={[styles.button, styles.submenu, deleteStyle]}>
                        <AntDesign name='delete' size={20} color='#FFFFFF' />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.edit()}>
                    <Animated.View style={[styles.button, styles.submenu, plusStyle]}>
                        <AntDesign name='edit' size={20} color='#FFFFFF' />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.toggleMenu()}>
                    <Animated.View style={[styles.button, styles.menu]}>
                        <AntDesign name='bars' size={24} color='#FFFFFF' />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}