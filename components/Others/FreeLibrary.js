import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const FreeLibrary =({
onPress,color,Name
  }) =>{
  return (
    <TouchableOpacity onPress={onPress}
      style={{
        width: 154,
        height: 112,
        borderRadius: 20,
        backgroundColor:color,
        marginRight: 10,
        padding: 15,
        marginTop: 5,
      }}
    >

      <Text style={{ color: "#fff", fontSize: 16 }}>{Name}</Text>
    </TouchableOpacity>
  );
}

export default FreeLibrary;
