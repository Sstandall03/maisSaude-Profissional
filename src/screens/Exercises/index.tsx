import React, { useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { icons, images } from "../../constants";
import { styles } from "./style";
import { AntDesign } from '@expo/vector-icons';
import FabButton from "../../components/fabButton/FabButton";

import { firestore, updateDoc, deleteDoc, doc } from "../../database/firebase";

const RecipeCreatorCardDetail = ({ selectedRecipe, profilePic }) => {
    return (
        <View style={styles.recipeDetailView}>
            <View style={styles.profilePicView}>
                <Image source={profilePic} style={styles.profilePic} />
            </View>
            <View style={styles.labelView}>
                <Text style={styles.labelBy}>Exercise by: </Text>
                <Text style={styles.labelName}>{selectedRecipe?.profissional}</Text>
            </View>
            {/*<TouchableOpacity style={styles.button}>
                <Image source={icons.rightArrow} style={styles.icon}/>
    </TouchableOpacity>*/}
        </View>
    )
}

const RecipeCreatorCardInfo = ({ selectedRecipe, profilePic }) => {
    return (
        <View style={styles.viewAndroid}>
            <RecipeCreatorCardDetail selectedRecipe={selectedRecipe} profilePic={profilePic} />
        </View>
    )
}

export const Exercise = ({ route, navigation }) => {
    const { exercise } = route.params;
    const { profilePic } = route.params;

    const [exerciseNome, setExerciseNome] = useState('');
    const [editable, setEditable] = useState(false);
    const [icone, setIcone] = useState('edit');

    const editarTitle = async () => {
        try {
            if (icone == 'edit') {
                setIcone('check');
                setEditable(true);
            } else {
                setIcone('edit');
                setEditable(false);

                const exercicioRef = doc(firestore, "exercicio", exercise.id);
                await updateDoc(exercicioRef, {
                    nome: exerciseNome
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
    const deletarExercicio = async () => {
        try {
            await deleteDoc(doc(firestore, "exercicio", exercise.id));
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={exercise?.test}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                    <Text></Text>
                )}
                ListHeaderComponent={
                    <View>
                        <View>
                            {/*exercise IMAGE*/}
                            <View style={styles.containerHeader}>
                                <Image source={exercise?.image} resizeMode='contain' style={styles.image} />
                            </View>
                            {/*CREATOR INFO*/}
                            <View style={styles.viewCreator}>
                                <RecipeCreatorCardInfo selectedRecipe={exercise} profilePic={profilePic} />
                            </View>
                        </View>
                        <View style={styles.recipeInfoCard}>
                            <View style={styles.recipeInfoView}>
                                <TextInput style={{ fontSize: 40 }} editable={editable} placeholder={exercise?.nome} onChangeText={(text) => setExerciseNome(text)} />
                                <View style={styles.titleInfo}>
                                    <TouchableOpacity onPress={() => editarTitle()}>
                                        <AntDesign style={styles.antDesign} name={icone} size={20} color='#000000' />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => deletarExercicio()}>
                                        <AntDesign name='delete' size={20} color='#000000' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.column}>
                            <View>
                                <Image source={icons.relogio} style={styles.icons} />
                                <Text style={styles.subtitleInfo}>{exercise?.tempo} mins</Text>
                            </View>
                            <View>
                                <Image source={icons.categoria} style={styles.icons} />
                                <Text style={styles.subtitleInfo}>{exercise?.categoria}</Text>
                            </View>
                            <View>
                                <Image source={images.exerciseIcon} style={styles.icons} />
                                <Text style={styles.subtitleInfo}>{exercise?.capacidade}</Text>
                            </View>
                        </View>
                    </View>
                }

            />
            <View style={styles.headerBarView}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={styles.iconBack} />
                </TouchableOpacity>
            </View>
        </View>
    )
}