import React from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Animated, { FadeIn } from "react-native-reanimated";

export default function DropDownCart({ onPress, title, description, Icon }) {
  const [Open, setOpen] = React.useState(false);

  return (
    <View
      style={{
        paddingHorizontal: 10,
        borderBottomWidth:.5,
        borderColor:"gray",
        paddingVertical:10,
        borderTopWidth:.5,
        marginTop:10,
        marginLeft:10,
        marginRight:20
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {Icon ? Icon : <></>}
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
            }}
          >
            {title}
          </Text>
        </View>
        <AntDesign onPress={()=>{
            setOpen(!Open)
        }} name={Open?"up":"down"} size={24} color="black" />
      </View>
      {Open&&(
        <Animated.View style={{
            marginLeft:35,
            marginTop:10
        }} entering={FadeIn}>
        <Pressable onPress={onPress}>
            <Text  style={{
                fontSize:16
            }}>{description}</Text>
        </Pressable>
      </Animated.View>
      )}
    </View>
  );
}
