import React, {Component} from 'react';
import {StyleSheet, View,Text,SafeAreaView} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {
    render() {
      return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,height:100}}>
                <MapView
                        style={{...StyleSheet.absoluteFillObject}}
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                    />
            </View>
        </SafeAreaView>
      );
    }
  }