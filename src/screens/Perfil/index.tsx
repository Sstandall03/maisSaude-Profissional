import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { styles } from "./style";
import { images } from "../../constants";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

import { firestore, doc, getDoc, collection, where, query, getDocs } from "../../database/firebase";

export function Perfil({ route, navigation }) {
    const { codigo } = route.params;

    const [nome, setNome] = useState('');
    //const [especialidade, setEspecialidade] = useState('');
    const [imagem, setImagem] = useState('');
    const [icons, setIcons] = useState('');
    const [query1, setQuery1] = useState('');
    const [number, setNumber] = useState(0);

    const buscar = async () => {
        const docRef = doc(firestore, "profissional", codigo);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let teste = '';
            let teste2 = '';
            let picture = '';
            teste = docSnap.data().nome;
            teste2 = docSnap.data().especialidade;
            picture = docSnap.data().image;
            setNome(teste);
            setImagem(picture);
            //setEspecialidade(teste2);
            //console.log(teste2)
            if (teste2 == 'Nutricionista') {
                setQuery1('Alimentação');
                setIcons(images.foodIcon);
                const alimentacaoRef = collection(firestore, 'alimentacao');
                const q = query(alimentacaoRef, where("id", "==", codigo));

                const querySnapshot = await getDocs(q);
                let i = 0;
                querySnapshot.forEach((doc) => {
                    i = i + 1;
                });
                setNumber(i);

            } else {
                setQuery1('Exercícios');
                setIcons(images.exerciseIcon);
                const alimentacaoRef = collection(firestore, 'exercicio');
                const q = query(alimentacaoRef, where("id", "==", codigo));

                const querySnapshot = await getDocs(q);
                let i = 0;
                querySnapshot.forEach((doc) => {
                    i = i + 1;
                });
                setNumber(i);

            }
        }
    }
    // buscar()

    useEffect(() => {
        navigation.addListener('focus', async () => {
            buscar()
        })
    }, []);

    return (
        <View>
            <LinearGradient style={styles.container} colors={['#2c8434', '#4cb152', '#64ab67']}>
                <AntDesign style={styles.logout} name='login' size={40} onPress={() => navigation.navigate('Home')} />
                <Image source={imagem} style={styles.profilePic} />
                <View style={styles.profileDesc}>
                    <Text style={styles.textProfile}>{nome}</Text>
                    <Text style={styles.subtitleProfile}>Profissional</Text>
                </View>
            </LinearGradient>
            <View style={styles.column}>
                <View style={styles.card}>
                    <Image source={icons} style={styles.icons} />
                    <Text style={styles.text}>{query1}</Text>
                    <Text style={styles.subtitle}>{number}</Text>
                </View>
            </View>
        </View>
    );
}