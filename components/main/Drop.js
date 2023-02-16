import React from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Animated, { FadeIn } from "react-native-reanimated";

export default function Drop({ onPress, title, description, Icon, DATA }) {
  const [Open, setOpen] = React.useState(false);

  return (
    <View
      style={{
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderColor: "gray",
        paddingVertical: 10,
        borderTopWidth: 0.5,

        marginLeft: 10,
        marginRight: 20,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        width: "90%",
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <View
          style={{
            flexDirection: "row",
          }}>
          {Icon ? Icon : <></>}
          <Text
            style={{
              fontSize: 16,
              marginLeft: 10,
            }}>
            {title}
          </Text>
        </View>
        <AntDesign
          onPress={() => {
            setOpen(!Open);
          }}
          name={Open ? "up" : "down"}
          size={16}
          color="black"
        />
      </View>
      {Open && (
        <Animated.View
          style={{
            marginLeft: 35,
            marginTop: 10,
          }}
          entering={FadeIn}>
          {DATA &&
            DATA.map((doc, i) => (
              <Pressable key={i} onPress={()=>{
                if(onPress){
                  onPress(doc)
                }
              }}>
                <View style={{
                  width:"100%",
                  marginVertical:10,
                  flexDirection:"row",
                  flexWrap:"wrap"
                }}>
                  <View style={{
                    width:20,
                    height:20,
                    borderRadius:10,
                    backgroundColor:"green"
                  }}/>
                  <Text
                    style={{
                      fontSize: 14,
                      flex:1,
                      marginLeft:10
                    }}>
                    {doc.title}
                  </Text>
                  
                </View>
              </Pressable>
            ))}
        </Animated.View>
      )}
    </View>
  );
}
