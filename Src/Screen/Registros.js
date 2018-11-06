import React, {Component} from 'react';
import {StyleSheet, View,Text,SafeAreaView} from 'react-native';
import RegistroBox from '../Components/RegistroBox'
import Camara from './ComponenteCamara.js';

export default class Registros extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'white'}}>
          <RegistroBox hora='08:23:27' type='mobile' fecha='30-10-2018'/>
          <RegistroBox hora='19:23:27' type='mobile' fecha='31-10-2018'/>
        </View>
      </SafeAreaView>
    );
  }
}
