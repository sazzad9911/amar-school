import React from 'react';
import { Text, View,TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';


const SelectClass = ({
title,onPress,image,icon,color,leftIcon
}) =>{
    return (
        <TouchableOpacity onPress={onPress} style={{height:65,
        width:'100%',
        backgroundColor:color,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        marginBottom:10
        }}>
            <View style={{
            height:45,
            width:45,
            borderRadius:10,
            flex:1,
            overflow:'hidden',
            justifyContent:"center",
            alignItems:"center"
            }}>
           {!leftIcon&&(<SvgXml xml={image} height="45" width="45" />)}
           {leftIcon}
                
            </View>
            <Text style={{fontSize:18,flex:5,marginLeft:10}}>
                {title}
            </Text>
            <View style={{flex:1}} >
            {icon}
            </View>
        </TouchableOpacity>
    );
}
    


export default SelectClass;