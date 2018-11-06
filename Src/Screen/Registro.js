/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View,Alert,SafeAreaView} from 'react-native';
import { Button } from 'react-native-elements';
import RegistrarSalida from './RegistrarSalida'

import {createTabNavigator} from 'react-navigation';

export default class Registro extends Component {
  
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.Box1}>
          <Button title='Capturar Modelo' borderRadius={5}
          onPress={() => this.props.navigation.navigate('RegistrarPersona')}/>
          </View>
          <View style={styles.Box1}>
          <Button title='Registrar Entrada' borderRadius={5}
          onPress={() => this.props.navigation.navigate('RegistrarEntrada')}/>
          </View>
          <View style={styles.Box1}>
          <Button title='Registrar Salida' borderRadius={5}
          onPress={() => this.props.navigation.navigate('RegistrarSalida')}/>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  CM1 = async () =>{
   fetch('https://api.kairos.com/enroll', {
    method:'POST',
    headers:{
    Accept:'application/json',
    app_id:'c8abad02',
    app_key:'dc7743a8fbc533268c0c29dbf037b64b',
    },
    body: JSON.stringify({
      image:'http://media.kairos.com/kairos-elizabeth.jpg',
      subject_id:'Elizabeth3',
      gallery_name:'MyGallery'
    }),
  }).then((response) => response.json())
    .then((responseJson) => {
      console.warn(responseJson.images);
      Alert.alert("Registro creado correctamente");
    
    })
    .catch((error) => {
      console.error(error);  
  });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  Box1:{
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});