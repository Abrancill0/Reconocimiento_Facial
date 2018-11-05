import React,{Component}  from 'react';
import { StyleSheet, View } from 'react-native';
import Camera from './ComponenteCamara'

export default class RegistrarPersona extends Component {
    constructor(props){
        super(props);
        process.nextTick = setImmediate;
    }
    render() {
        return (
            <View style={styles.container}>
                <Camera />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',   
    }
});