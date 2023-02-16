import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from "react-native-svg";
import { tick } from '../assets/icon';
import { AntDesign } from '@expo/vector-icons';

const CheckBox = ({ onChange, value, title, style, disabled }) => {
    const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    setChecked(value);
  }, [value]);
  return (
    <TouchableOpacity disabled={disabled}
      onPress={() => {
        if (onChange) {
          onChange(title); 
        }
        
        setChecked(!checked);
      }}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          opacity:disabled?.5:1,
          flexWrap:"wrap"
        },
        style,
      ]}
    >
      <View
        style={{
          borderColor: "#666666",
          height: 20,
          width: 20,
          borderWidth: 1.5,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        
        
      </View>
      <Text
        style={[
          styles.text,
          {
            flex: 1,
            color: style && style.color ? style.color : "black",
            fontSize: style && style.fontSize ? style.fontSize : 16,
            margin:0
          },
        ]}
      >
        {title}
      </Text>
      {checked && (
          <AntDesign style={{
            position:"absolute",
            left:-1,
            bottom:-1
          }} name="check" size={30} color="black" />
        )}
    </TouchableOpacity>
  )
}

export default CheckBox

const styles = StyleSheet.create({})