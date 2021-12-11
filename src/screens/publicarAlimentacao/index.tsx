import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, Image } from "react-native";
import { styles } from "./style";
import { TextInputMask } from "react-native-masked-text";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from 'expo-image-picker';

import { firestore, addDoc, collection } from "../../database/firebase";

export function Publicar({route, navigation}) {
    const {name} = route.params;
    const {codigo} = route.params;

    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('Doce');
    const [tempo, setTempo] = useState('');
    const [calorias, setCalorias] = useState('');
    const [imagem, setImagem] = useState('');

    let id = '';

    const cadastrar = async() => {
        if (nome.length == 0 || categoria.length == 0 || tempo.length == 0 || calorias.length == 0) {
            alert('Campos em branco');
        } else {
            try{
                let categoriaOficial = 0;
                if(categoria == 'Doce'){
                    categoriaOficial = 1
                }else if(categoria == 'Salgado'){
                    categoriaOficial = 2
                }else if(categoria == 'Cafe'){
                    categoriaOficial = 3
                }else if(categoria == 'Almoco'){
                    categoriaOficial = 4
                }else if(categoria == 'Frutos'){
                    categoriaOficial = 5
                }else if(categoria == 'Lactose'){
                    categoriaOficial = 6
                }else{
                    categoriaOficial = 7
                }
                const docRef = await addDoc(collection(firestore, "alimentacao"), {
                    id: codigo,
                    nome: nome,
                    tempo: tempo,
                    kcal: calorias,
                    categoria: categoriaOficial,
                    nutricionista_nome: name,
                    image: {uri: imagem}
                });
                id = docRef.id;
                navigation.navigate('Ingredientes', {id: id});
            }catch(e){
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
            <Text style={styles.text}>Alimentação</Text>
            <TextInput style={styles.input} placeholder='Nome' keyboardType='default' onChangeText={text => setNome(text)}></TextInput>
            <Text>Categoria</Text>
            <Picker
                selectedValue={categoria}
                onValueChange={(itemValue, itemIndex) =>
                    setCategoria(itemValue)
                }>
                <Picker.Item label="Doce" value="Doce" />
                <Picker.Item label="Salgado" value="Salgado" />
                <Picker.Item label="Café da manhã" value="Cafe" />
                <Picker.Item label="Almoço" value="Almoco" />
                <Picker.Item label="Frutos do mar" value="Frutos" />
                <Picker.Item label="Sem lactose" value="Lactose" />
                <Picker.Item label="Amendoim" value="Amendoim" />
            </Picker>
            <TextInputMask style={styles.input} type={'only-numbers'}
                placeholder="Tempo de preparo (minutos)"
                value={tempo}
                onChangeText={text => setTempo(text)}
            />
            <TextInputMask style={styles.input} type={'only-numbers'}
                placeholder="Calorias"
                value={calorias}
                onChangeText={text => setCalorias(text)}
            />
            <View style={styles.viewImage}>
                <Image source={{uri: imagem}} style={{ width: 300, height: 300}}/>
            </View>
            <Button 
                title='Escolher uma foto' color='#4cb050' onPress={() => foto()}
            />
            <TouchableOpacity onPress={() => cadastrar()}>
                <Text style={styles.button}>Adicionar ingredientes</Text>
            </TouchableOpacity>
        </View>
    )
}