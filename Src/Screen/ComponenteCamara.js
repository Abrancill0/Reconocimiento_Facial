import React,{Component} from 'react';
import { Dimensions, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';

import CaptureButton from './CaptureButton.js'

export default class ComponenteCamara extends Component {
    constructor(props){
        super(props);
        this.state = { 
            identifedAs: '',
            loading: false
        }
    }

    takePicture = async function(){

        if (this.camera) {

            this.setState((previousState, props) => ({
                loading: true
            }));

            const options = { quality: 0.5, base64:true };
            
            const data = await this.camera.takePictureAsync(options)

            fetch('https://api.kairos.com/enroll', {
                method:'POST',
                headers:{
                Accept:'application/json',
                app_id:'c8abad02',
                app_key:'dc7743a8fbc533268c0c29dbf037b64b',
                },
                body: JSON.stringify({
                image:data.base64,
                subject_id:'Prueba2',
                gallery_name:'MyGallery'
                }),
            }).then((response) => response.json())
            .then((responseJson) => {

            if (responseJson.face_id != null)
            {
                Alert.alert("Registro creado correctamente");
            }
            else
            {
                Alert.alert("Error al registrar el rostro");
            }
           
            })
            .catch((error) => {
            console.warn(error);  
        });
            
        }
    }

    displayAnswer(identifiedImage){

        // Dismiss the acitivty indicator
        this.setState((prevState, props) => ({
            identifedAs:identifiedImage,
            loading:false
        }));

    // Show an alert with the answer on
    Alert.alert(
            this.state.identifedAs,
            '',
            { cancelable: false }
        )

        // Resume the preview
        this.camera.resumePreview();
    }

    render() {
        return (
            <RNCamera ref={ref => {this.camera = ref;}} style={styles.preview}
            type='front'>
            <ActivityIndicator size="large" style={styles.loadingIndicator} color="#fff" animating={this.state.loading}/>
            <CaptureButton buttonDisabled={this.state.loading} onClick={this.takePicture.bind(this)}/>
            </RNCamera>
        );
    }
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    loadingIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
