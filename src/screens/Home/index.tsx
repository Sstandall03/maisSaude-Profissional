import React from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';
import {styles} from './styles';
import profissional  from '../../assets/profissional.jpeg';

export function Home({navigation}){
    return(
        <View style={styles.container}>
            <Image source={profissional} style={styles.img}/>
            <View style={styles.content}>
                <Text style={styles.title}>Ajude as pessoas {'\n'} sem sair de sua casa</Text>
                <Text style={styles.subtitle}>Poste exercícios ou alimentações {'\n'} para os usuários do aplicativo</Text>
                <Button title='Login' color='#159182' onPress={() => navigation.navigate('Login')}/>
            </View>       
        </View>
    );
}
