import React, {useState} from 'react';
import { TextInput, View, Button, Text, Image } from "react-native";
import {styles} from './style';
import logo from '../../assets/logo-verde.png';

import { firestore, query, getDocs, collection, where} from '../../database/firebase';
import { async } from '@firebase/util';

export function Login({navigation}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    let logado = false;

    let especialidade = '';

    let codigo = '';

    const logar = async() => {
        try{
            if(email.length == 0 || senha.length == 0){
                alert('Campos em branco');
            }else{
                const q = query(collection(firestore, "profissional"), where("email", "==", email));

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                  //console.log(doc.id, " => ", doc.data());
                  especialidade = doc.data().especialidade;
                  codigo = doc.id;
                  logado = true;
                });
                if(logado){
                    if(especialidade == 'Nutricionista'){
                        navigation.navigate('TabsNutricionista', {cd: codigo});
                    }
                    else{
                        navigation.navigate('Tabs', {cd: codigo});
                    }
                }else{
                    alert('Email ou senha incorretos');
                }
            }
        }catch(e){
            console.log(e);
        }
    }

    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.image}/>
            <TextInput placeholderTextColor="#000" placeholder='Email' style={styles.input} onChangeText={text => setEmail(text)} />
            <TextInput secureTextEntry={true} maxLength={10} placeholderTextColor="#000" placeholder='Senha' style={styles.input} onChangeText={text => setSenha(text)}/>
            <View style={styles.button}>
                <Button title='Login' color='#4cb050' onPress={() => logar()}/>
            </View>     
            <Text style={styles.subtitle}>OU</Text>
            <View style={styles.button}>
                <Button title='Cadastre-se' color='#4cb050' onPress={() => navigation.navigate('Cadastro')}/>
            </View>    
        </View>
    );
}