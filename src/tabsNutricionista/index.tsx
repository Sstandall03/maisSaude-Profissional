import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Home } from "../screens/Home";
import { Alimentacao } from "../screens/Alimentacao";
import { Perfil } from "../screens/Perfil";

const Tab = createBottomTabNavigator();

export function TabsNutricionista({route}){
  const {cd} = route.params;
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Alimentação') {
              iconName = focused ? 'apple' : 'apple';
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
            <Tab.Screen name='Alimentação' component={Alimentacao} initialParams={{ codigo: cd}} options={{headerShown: false, title: ''}}></Tab.Screen>                
            <Tab.Screen name='Perfil' component={Perfil} initialParams={{ codigo: cd}} options={{headerShown: false, title: ''}}></Tab.Screen>                
        </Tab.Navigator>
    );
}