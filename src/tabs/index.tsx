import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Home } from "../screens/Home";
import { Exercicio } from "../screens/Exercicio";
import { Perfil } from "../screens/Perfil";

const Tab = createBottomTabNavigator();

export function Tabs({route}){
  const {cd} = route.params;
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Exercício') {
              iconName = focused ? 'dumbbell' : 'dumbbell';
            } else if (route.name === 'IMC' || route.name === 'IAC') {
                iconName = focused ? 'calculator' : 'calculator';
              } else if (route.name === 'Perfil') {
                iconName = focused ? 'user' : 'user';
              } 

            // You can return any component that you like here!
            return <Icons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4cb050',
          tabBarInactiveTintColor: 'gray',
        })}>        
            <Tab.Screen name='Exercício' component={Exercicio} initialParams={{codigo: cd}} options={{headerShown: false, title: ''}}></Tab.Screen>  
            <Tab.Screen name='Perfil' component={Perfil} initialParams={{ codigo: cd}} options={{headerShown: false, title: ''}}></Tab.Screen>                
        </Tab.Navigator>
    );
}