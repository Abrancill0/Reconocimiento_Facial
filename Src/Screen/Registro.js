/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-elements';
import {createTabNavigator} from 'react-navigation';

class Registro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Box1}>
         <Button title='Capturar Modelo' borderRadius={5}
         onPress={() => this.props.navigation.navigate('CapturaModelo')}/>
         </View>
         <View style={styles.Box1}>
         <Button title='Registrar Entrada' borderRadius={5}/>
         </View>
         <View style={styles.Box1}>
         <Button title='Registrar Salida' borderRadius={5}
         onPress={() => this.props.navigation.navigate('RegistrarSalida')}/>
        </View>
      </View>
    );
  }
}

class Rutas extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      </View>
    );
  }
}

class Registros extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

export default createTabNavigator(
  {
      Registro: { screen: Registro },
      Rutas:{ screen: Rutas },
      Registros:{ screen: Registros },
  },
  {
      tabBarPosition:'top',
      tabBarOptions: {
          activeTintColor: 'black',
          labelStyle: {
            fontSize: 16,
          },
          activeBackgroundColor:'blue',
          showIcon:true,
          style: {
                  backgroundColor: 'white',
                  height:35,
                  marginTop:50
              }
          }
  })

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
