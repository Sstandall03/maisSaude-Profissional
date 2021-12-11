import React, { useState } from "react";
import { TextInput, View, Button, Image, Text, ScrollView } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from "react-native-paper";
import { styles } from './style';
import logo from '../../assets/logo-verde.png';
import * as ImagePicker from 'expo-image-picker';

import { firestore, collection, addDoc } from "../../database/firebase";

export function Cadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [selectUF, setSelectUF] = useState('AC');
    const [cdValidacao, setCdValidacao] = useState('');
    const [imagem, setImagem] = useState('');
    const [checked, setChecked] = useState('first');
    let especialidade = '';

    const cadastrar = async () => {
        try {
            if (nome.length == 0 || date.length == 0 || email.length == 0 || senha.length == 0 || cdValidacao.length == 0) {
                alert('Dados em branco');
            } else {
                if (checked == 'first') {
                    especialidade = 'Nutricionista';
                } else {
                    especialidade = 'Instrutor físico';
                }
                const docRef = await addDoc(collection(firestore, "profissional"), {
                    nome: nome,
                    data_nascimento: date,
                    email: email,
                    senha: senha,
                    especialidade: especialidade,
                    uf: selectUF,
                    cd_validacao: cdValidacao,
                    image: {uri: imagem}
                });
                navigation.navigate('Login');
            }
        } catch (e) {
            console.log(e)
        }
    }

    const foto = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            })
            console.log(result)
            if (!result.cancelled) {
                setImagem(result.uri);
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <ScrollView style={styles.scroll}>
                <TextInput textContentType='name' maxLength={80} placeholder='Nome' style={styles.input} onChangeText={text => setNome(text)} />
                <TextInputMask style={styles.input} type={'datetime'}
                    options={{ format: 'DD/MM/YYYY' }}
                    placeholder="Data de Nascimento"
                    value={date}
                    onChangeText={text => setDate(text)}
                />
                <TextInput textContentType='emailAddress' maxLength={80} placeholder='Email' style={styles.input} onChangeText={text => setEmail(text)} />
                <TextInput secureTextEntry={true} textContentType='newPassword' maxLength={10} placeholder='Senha' style={styles.input} onChangeText={text => setSenha(text)} />
                <TextInputMask style={styles.input} type={'custom'}
                    options={{ mask: 'AAA999' }}
                    placeholder="Código de validação"
                    value={cdValidacao}
                    onChangeText={setCdValidacao}
                />
                <Picker
                    selectedValue={selectUF}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectUF(itemValue)
                    }>
                    <Picker.Item label="AC" value="AC" />
                    <Picker.Item label="AL" value="AL" />
                    <Picker.Item label="AP" value="AP" />
                    <Picker.Item label="AM" value="AM" />
                    <Picker.Item label="BA" value="BA" />
                    <Picker.Item label="CE" value="CE" />
                    <Picker.Item label="ES" value="ES" />
                    <Picker.Item label="GO" value="GO" />
                    <Picker.Item label="MA" value="MA" />
                    <Picker.Item label="MT" value="MT" />
                    <Picker.Item label="MS" value="MS" />
                    <Picker.Item label="MG" value="MG" />
                    <Picker.Item label="PA" value="PA" />
                    <Picker.Item label="PB" value="PB" />
                    <Picker.Item label="PR" value="PR" />
                    <Picker.Item label="PE" value="PE" />
                    <Picker.Item label="PI" value="PI" />
                    <Picker.Item label="RJ" value="RJ" />
                    <Picker.Item label="RN" value="RN" />
                    <Picker.Item label="RS" value="RS" />
                    <Picker.Item label="RO" value="RO" />
                    <Picker.Item label="RR" value="RR" />
                    <Picker.Item label="SC" value="SC" />
                    <Picker.Item label="SP" value="SP" />
                    <Picker.Item label="SE" value="SE" />
                    <Picker.Item label="TO" value="TO" />
                    <Picker.Item label="DF" value="DF" />
                </Picker>
                <View style={styles.radioButton}>
                    <RadioButton value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text>Nutricionista</Text>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Text>Instrutor físico</Text>
                </View>
                <View style={styles.viewImage}>
                    <Image source={{uri: imagem}} style={{ height: 100, width: 100, borderRadius: 50 }} />
                </View>
                <View style={styles.button}>
                    <Button title='Escolha uma foto' color='#4cb050' onPress={() => foto()} />
                </View>
                <View style={styles.button}>
                    <Button title='Cadastre-se' color='#4cb050' onPress={() => cadastrar()} />
                </View>
            </ScrollView>
        </View>
    );
}