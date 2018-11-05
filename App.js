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
import MenuPrincipal from './Src/Screen/MenuPrincipal.js';
import {createStackNavigator,createSwitchNavigator} from 'react-navigation';
import RegistrarPersona from './Src/Screen/RegistrarPersona.js';
import RegistrarSalida from './Src/Screen/RegistrarSalida'

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

export default createSwitchNavigator({
  Main:HomeStack,
  

})
