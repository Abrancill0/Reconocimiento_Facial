/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Inicio from './Src/Screen/Inicio.js'
import Registro from './Src/Screen/Registro.js'
import Rutas from './Src/Screen/Rutas.js';
import Registros from './Src/Screen/Registros.js';
import {createStackNavigator,createSwitchNavigator,createTabNavigator} from 'react-navigation';
import RegistrarPersona from './Src/Screen/RegistrarPersona.js';
import RegistrarSalida from './Src/Screen/RegistrarSalida'
import RegistrarEntrada from './Src/Screen/RegistrarEntrada'

const HomeStack = createStackNavigator({
  Inicio:{screen:Inicio,
    navigationOptions:{
      header:null}
  },
  Registro:{screen:Registro,
    navigationOptions:{
      header:null}
  },
  RegistrarPersona:{screen:RegistrarPersona},
  RegistrarSalida:{screen:RegistrarSalida}

});

const TabBar = createTabNavigator(
{
  Registro:{screen:Registro},
  Rutas:{screen:Rutas},
  Registros:{screen:Registros}
})

const stackNavigatorPrincipal = createStackNavigator(
{
  Menu:{screen:TabBar,navigationOptions:{header:null}},
  RegistrarPersona:{screen:RegistrarPersona,
    navigationOptions:{headerVisible:true}},
  RegistrarEntrada:{screen:RegistrarEntrada,
    navigationOptions:{headerVisible:true}},
  RegistrarSalida:{screen:RegistrarSalida,
    navigationOptions:{headerVisible:true}},
})

export default createSwitchNavigator({
  Main:HomeStack,
  App: stackNavigatorPrincipal
  

})
