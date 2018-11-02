/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import { Button } from 'react-native-elements'
import {Hoshi} from 'react-native-textinput-effects';
  
  export default class Inicio extends Component {
    render() {
      return (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}>
          <View style={[styles.card1, { backgroundColor: 'white' }]}>
            <Text style={styles.title}>Biocheck</Text>            
              <View style={[styles.card1, { backgroundColor: 'white' }]}>
          <Hoshi label={'Subdominio'}
                 borderColor={'#7ac1ba'}/>
          <Hoshi style={styles.input}
           label={'Id Empleado'}
           borderColor={'#7ac1ba'}/>
           <Hoshi style={styles.input}
           label={'Nip'}
           borderColor={'#7ac1ba'}/>
        </View>
          </View>
         
          <Button title='Entrar' borderRadius={5} 
          onPress={() => this.props.navigation.navigate('Registro')}/>
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 24,
      backgroundColor: 'white',
    },
    content: {
      // not cool but good enough to make all inputs visible when keyboard is active
      paddingBottom: 300,
    },
    card1: {
      paddingVertical: 15,
      margin:5
    },
    
    input: {
      marginTop: 4,
    },
    title: {
      paddingBottom: 16,
      textAlign: 'center',
      color: '#404d5b',
      fontSize: 20,
      fontWeight: 'bold',
      opacity: 0.8,
    },
  });