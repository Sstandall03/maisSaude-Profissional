import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Button } from "react-native";
import { styles } from "./style";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from 'expo-image-picker';

import { firestore, addDoc, collection } from '../../database/firebase';

export function Postar({ navigation, route }) {
    const { codigo } = route.params;
    const { name } = route.params;

    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('Exercício');
    const [capacidade, setCapacidade] = useState('Resistência');
    const [tempo, setTempo] = useState('');
    const [imagem, setImagem] = useState('');

    let tempoNumber = 0;

    const cadastrar = async () => {
        if (nome.length == 0 || categoria.length == 0 || capacidade.length == 0 || tempo.length == 0) {
            alert('Campos em branco');
        } else {
            tempoNumber = parseInt(tempo);
            try {
                const docRef = await addDoc(collection(firestore, "exercicio"), {
                    nome: nome,
                    categoria: categoria,
                    capacidade_fisica: capacidade,
                    tempo: tempoNumber,
                    instrutor_nome: name,
                    id: codigo,
                    image: { uri: imagem }
                });
                alert(nome + ' publicado com sucesso');
                navigation.navigate('Exercício');
            } catch (e) {
                console.log(e);
            }
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
        <View style={styles.imc}>
            <Text style={styles.text}>Exercício</Text>
            <TextInput style={styles.input} placeholder='Nome' placeholderTextColor='#000' keyboardType='default' onChangeText={text => setNome(text)} ></TextInput>
            <Text>Categoria</Text>
            <Picker
                selectedValue={categoria}
                onValueChange={(itemValue, itemIndex) =>
                    setCategoria(itemValue)
                }>
                <Picker.Item label="Exercício" value="Exercício" />
                <Picker.Item label="Treinamentos" value="Treinamentos" />
                <Picker.Item label="Funcionais" value="Treinamentos" />
            </Picker>
            <Text>Capacidade física</Text>
            <Picker
                selectedValue={capacidade}
                onValueChange={(itemValue, itemIndex) =>
                    setCapacidade(itemValue)
                }>
                <Picker.Item label="Resistência" value="Resistência" />
                <Picker.Item label="Força" value="Força" />
                <Picker.Item label="Agilidade" value="Agilidade" />
                <Picker.Item label="Velocidade" value="Velocidade" />
                <Picker.Item label="Coordenação motora" value="Coordenação motora" />
                <Picker.Item label="Equilíbrio" value="Equilíbrio" />
            </Picker>
            <TextInput style={styles.input} placeholder='Tempo' placeholderTextColor='#000' keyboardType='numeric' onChangeText={text => setTempo(text)} ></TextInput>

            <View style={styles.viewImage}>
                <Image source={{ uri: imagem }} style={{ width: 300, height: 300}} />
            </View>

            <Button 
                title='Escolha uma foto' color='#4cb050' onPress={() => foto()}
            />

            <TouchableOpacity onPress={() => cadastrar()}>
                <Text style={styles.button}>Publicar</Text>
            </TouchableOpacity>
        </View>
    )
}