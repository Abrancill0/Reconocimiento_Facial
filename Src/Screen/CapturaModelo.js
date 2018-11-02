import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Camara from './ComponenteCamara.js';

export default class CapturarModelo extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Camara/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
