import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { TextInputMask } from "react-native-masked-text";
import { Picker } from "@react-native-picker/picker";
import { firestore, addDoc, collection } from "../../database/firebase";

export function Ingredientes({ route, navigation }) {
    const { id } = route.params;

    const [nome, setNome] = useState('');
    const [medida, setMedida] = useState('ML');
    const [quantidade, setQuantidade] = useState('');

    const cadastrar = async () => {
        if (nome.length == 0 || medida.length == 0 || quantidade.length == 0 ) {
            alert('Campos em branco');
        } else {
            try {
                const docRef = await addDoc(collection(firestore, "ingrediente"), {
                    nome: nome,
                    id: id,
                    medida: medida,
                    quantidade: quantidade
                });
                alert(nome + ' adicionado com sucesso');
                navigation.navigate('Ingredientes', {id: id});
                setNome('');
                setQuantidade('');
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <View style={styles.imc}>
            <Text style={styles.subtitle}>Ingredientes</Text>
                <TextInput style={styles.input} placeholder='Nome' placeholderTextColor='#000' keyboardType='default' onChangeText={text => setNome(text)}></TextInput><TextInput style={styles.input} placeholder='Quantidade' placeholderTextColor='#000' keyboardType='numeric' onChangeText={text => setQuantidade(text)}></TextInput>
                <Picker
                selectedValue={medida}
                onValueChange={(itemValue, itemIndex) =>
                    setMedida(itemValue)
                }>
                <Picker.Item label="Militros (ML)" value="ML" />
                <Picker.Item label="Litros (L)" value="L" />
                <Picker.Item label="Miligramas (MG)" value="MG" />
                <Picker.Item label="Gramas (G)" value="G" />
                <Picker.Item label="Quilogramas (KG)" value="KG" />
                <Picker.Item label="Colheres de sopa" value="Colheres de sopa" />
                <Picker.Item label="Colheres de café" value="Colheres de café" />
                <Picker.Item label="Colheres de chá" value="Colheres de chá" />
                <Picker.Item label="Xícaras" value="Xícaras" />
                <Picker.Item label="Unidades" value="Unidades" />
            </Picker>
            <TouchableOpacity onPress={() => cadastrar()}>
                <Text style={styles.button}>Adicionar Ingrediente</Text>
            </TouchableOpacity>
        </View>
    )
}