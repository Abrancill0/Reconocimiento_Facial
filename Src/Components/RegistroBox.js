import React, {Component} from 'react';
import {Text, View,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

export default class RegistroBox extends Component{
    render(){
        const {hora,type,fecha}=this.props;
      return(
        <View>
            <View style={{height:50,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:120,flexDirection:'row',padding:3, paddingHorizontal:15,justifyContent:'space-between'}}>
                    <View>
                        <Icon name='mobile-phone' size={45} color='#315ED3'/>
                    </View>
                    <View>
                        <Text style={{fontSize:16}}>{hora}</Text>
                        <Text>{type}</Text>
                    </View>
                </View>
                <View style={{width:190,flexDirection:'row'}}>
                    <View style={{flex:.5,alignContent:'center',padding:5}}>
                        <Text style={{fontSize:15}}>{fecha}</Text>
                    </View>
                    <View style={{flexDirection:'row',padding:5,justifyContent:'space-between',flex:.5,alignItems:'center',alignContent:'center'}}>
                        <Icon2 name='map-marked-alt' size={35}/>
                        <Icon color='#2D9F5A' name='arrow-down' size={28}/>
                    </View>
                </View>
            </View>
        </View>
      )
    }
  }