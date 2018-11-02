import React, {Component} from 'react';
import {StyleSheet, View,Text} from 'react-native';

import Camara from './ComponenteCamara.js';

export default class CapturarModelo extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'gray'}}>
        <Text>Registrar Salida</Text>
      </View>
    );
  }
}
