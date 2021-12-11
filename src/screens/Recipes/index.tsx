import React, {useState, useEffect} from "react";
import {View, FlatList, Text, Image, TouchableOpacity, TextInput} from "react-native";
import { icons } from "../../constants";
import { styles } from "./style";
import FabButton from "../../components/fabButton/FabButton";
import {AntDesign} from '@expo/vector-icons';

import { firestore, query,collection, where, getDocs, doc, deleteDoc, updateDoc } from "../../database/firebase";


const RecipeCreatorCardDetail = ({selectedRecipe, profilePic}) => {
    return(
        <View style={styles.recipeDetailView}>
            <View style={styles.profilePicView}>
                <Image source={profilePic} style={styles.profilePic}/>
            </View>
            <View style={styles.labelView}>
                <Text style={styles.labelBy}>Recipe by: </Text>
                <Text style={styles.labelName}>{selectedRecipe?.nutricionista}</Text>
            </View>
        </View>
    )
}

const RecipeCreatorCardInfo = ({selectedRecipe, profilePic}) =>{
        return(
             <View style={styles.viewAndroid}>
                 <RecipeCreatorCardDetail selectedRecipe={selectedRecipe} profilePic={profilePic} />
             </View>
        ) 
    } 

export const Recipe = ({route, navigation}) => {
    const {recipe} = route.params;
    const {profilePic} = route.params;
    
    const [data, setData] = useState([]);
    const [nome, setNome] = useState('');
    const [recipeNome, setRecipeNome] = useState('');
    const [editable, setEditable] = useState(false);
    const [icon, setIcon] = useState('edit');
    const [icone, setIcone] = useState('edit');
    const [editar, setEditar] = useState(false);

    const buscar = async () => {
        try {
            const q = query(collection(firestore, "ingrediente"), where("id", "==", recipe.id));
            const querySnapshot = await getDocs(q); 
            let dados: any = [];
            querySnapshot.forEach((doc) => {
                const receita = {
                    id: doc.id,
                    nome: doc.data().nome,
                    quantidade: doc.data().quantidade,
                    medida: doc.data().medida,
                }
                dados.push(receita);
            });
            setData(dados);
        } catch (e) {
            console.log(e);
        }
    }

    const deleteIngrediente = async({item}) =>{
        try{
            await deleteDoc(doc(firestore, "ingrediente", item.id));
        }catch(e){
            console.log(e);
        }
    }

    const edit = async({item}) => {
        try{
            if(icon == 'edit'){
                setIcon('check');
                setEditar(true);
            }else{
                setIcon('edit');
                setEditar(false);

                const ingredienteRef = doc(firestore, "ingrediente", item.id);
                await updateDoc(ingredienteRef, {
                    nome: nome
                  });                  
            }
            
        }catch(e){
            console.log(e);
        }
    }

    const editarTitle = async() =>{
        try{
            if(icone == 'edit'){
                setIcone('check');
                setEditable(true);
            }else{
                setIcone('edit');
                setEditable(true);

                const alimentacaoRef = doc(firestore, "alimentacao", recipe.id);
                await updateDoc(alimentacaoRef, {
                    nome: recipeNome
                  });                  
            }
        }catch(e){
            console.log(e);
        }
    }

    const deletarAlimentacao = async() => {
        try{
            await deleteDoc(doc(firestore, "alimentacao", recipe.id));   
            await deleteDoc(doc(firestore, "ingrediente", recipe.id)); 
        }catch(e){
            console.log(e);
        }
              
    }

    useEffect(() => {
        buscar()
    }, []);

    return(
        <View style={styles.container}>
                <FlatList 
                    data={data}
                    keyExtractor={item => `${item.id}`}
                    ListHeaderComponent={
                        <View>
                            <View>
                                {/*RECIPE IMAGE*/}
                                <View style={styles.containerHeader}>
                                    <Image source={recipe?.image} resizeMode='contain' style={styles.image} />
                                </View>
                                {/*CREATOR INFO*/}
                                <View style={styles.viewCreator}>
                                    <RecipeCreatorCardInfo selectedRecipe={recipe} profilePic={profilePic} />
                                </View>
                            </View>
                            {/*INFO*/}
                            <View style={styles.recipeInfoCard}>
                                <View style={styles.recipeInfoView}>
                                    <View style={styles.titleInfo}>
                                        <TextInput style={{fontSize: 25}} editable={editable} placeholder={recipe?.nome} onChangeText={(text) => setRecipeNome(text)} />
                                        <TouchableOpacity onPress={() => editarTitle()}>
                                            <AntDesign style={styles.antDesign} name={icone} size={20} color='#000000' />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => deletarAlimentacao()}>
                                            <AntDesign name='delete' size={20} color='#000000' />
                                        </TouchableOpacity> 
                                    </View>
                                    <Text style={styles.subtitleInfo}>{recipe?.tempo} mins | {recipe?.kcal} kcal</Text>
                                </View>
                            </View>
                        </View>
                    }
                    renderItem={({item}) =>(
                        <View style={styles.containerAll}>
                            <View style={styles.containerIngredients}>
                                <TextInput editable={editar} placeholder={item.nome} onChangeText={(text) => setNome(text)} />
                            </View>
                            <View style={styles.containerIngredients}>
                                <Text>{item.quantidade} {item.medida}</Text>
                            </View>
                            <View style={styles.containerQuantidade}>
                                <TouchableOpacity onPress={() => edit(({item}))}>
                                    <AntDesign name={icon} size={14} color='#000000'/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteIngrediente(({item}))}>
                                    <AntDesign name='delete' size={14} color='#000000'/>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    )}
                    ListFooterComponent={
                        <Text></Text>
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