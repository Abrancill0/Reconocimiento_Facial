
import Camera from 'react-native-camera';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class RegistrarPersona extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.preview}>
          <Camera ref={ref => { this.camera = ref;}}
                style = {styles.preview}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes)}}>
            <Text style={styles.capture} 
            onPress={this.takePicture.bind(this)}> [CAPTURE] </Text>
          </Camera>
        </View>
      </View>
    );
  }
  takePicture() {
     this.camera.capture().then((data) => console.log(data)) .catch(err => console.error(err));
     }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});