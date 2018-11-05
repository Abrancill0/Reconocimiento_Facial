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
import CapturarModelo from './Src/Screen/CapturarModelo.js';
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
  CapturarModelo:{screen:CapturarModelo},
  RegistrarSalida:{screen:RegistrarSalida}


});

export default createSwitchNavigator({
  Main:HomeStack,
  

})
