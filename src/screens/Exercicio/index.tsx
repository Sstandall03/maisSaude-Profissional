import React, { useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { styles } from "./style";
import {AntDesign} from '@expo/vector-icons';
import { SIZES, COLORS } from "../../constants";

import { firestore, collection, query, getDocs, doc, getDoc, where } from '../../database/firebase';

export function Exercicio({ navigation, route }) {
    const { codigo } = route.params;
    const [data, setData] = useState([]);
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');

    const buscar = async () => {
        const docRef = doc(firestore, "profissional", codigo);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let teste = '';
            let picture = '';
            teste = docSnap.data().nome;
            picture = docSnap.data().image;
            setNome(teste);
            setImagem(picture);
        }
        else {
            // doc.data() will be undefined in this case
            alert("Erro!");
        }
    }

    const list = async () => {
        try {
            const q = query(collection(firestore, "exercicio"), where("id", "==", codigo));

            const querySnapshot = await getDocs(q);
            let dados: any = [];
            querySnapshot.forEach((doc) => {
                const exercise = {
                    id: doc.id,
                    nome: doc.data().nome,
                    tempo: doc.data().tempo,
                    categoria: doc.data().categoria,
                    capacidade: doc.data().capacidade_fisica,
                    profissional: doc.data().instrutor_nome,
                    image: doc.data().image,
                    picture: imagem
                }
                dados.push(exercise);    
            });
            setData(dados);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        navigation.addListener('focus', async() => {
            buscar(), list()
        })
    }, []);
    
    const renderItem = ({ item }) => {
        return (<TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            marginTop: 10,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.gray2,
            marginHorizontal: 24
        }}
            onPress={() => navigation.navigate("Exercise", { exercise: item, profilePic: imagem })}
        >

            <Image source={item.image} resizeMode='cover' style={{ width: 100, height: 100, borderRadius: SIZES.radius }} />

            <View style={{ width: '65%', paddingHorizontal: 20 }}>
                <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 20 }}>{item.nome}</Text>
                <Text style={{ color: COLORS.gray }}>{item.tempo} mins | {item.categoria} </Text>
            </View>
        </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={false} />
            <FlatList
                data={data}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/*HEADER*/}
                        <View style={styles.ViewHeader1}>
                            <View style={styles.ViewHeader2}>
                                <Text style={styles.titleHeader}>Olá, {nome}</Text>
                                <Text style={styles.subtitleHeader}>Como você irá ajudar alguém hoje?</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                                <Image source={imagem} style={styles.imageHeader} />
                            </TouchableOpacity>
                        </View>
                        {/*SEARCHBAR*/}
                        {/*<View style={styles.viewSearchBar}>*/}
                        {/*    <Image source={icons.search} style={styles.iconSearchBar} />*/}
                        {/*    <TextInput style={styles.inputSearchBar} placeholder="Procure algum exercício" />*/}
                        {/*</View>*/}
                    </View>
                }
                renderItem={renderItem}
                ListFooterComponent={
                    <View style={styles.containerButton}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Postar', {name: nome, codigo: codigo})}>
                            <View style={styles.buttonPlus}>
                                <AntDesign name='plus' size={30} color='#4cb050' />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                }
            />
        </SafeAreaView>
    );
}