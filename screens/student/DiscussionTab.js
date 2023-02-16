import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import Button from "../../components/main/Button";
import { Entypo } from '@expo/vector-icons';


const DiscussionTab = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 30,
          }}
          source={{
            uri: "https://amarschool.com.bd/public/uploads/default/instructor-default.png",
          }}
        />
        <View style={{ width: "100%" }}>
          <TextInput
            multiline={true}
            style={{
              width: "100%",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#e5e5e5",
              padding: 10,
              textAlign: "justify",
              marginLeft: 10,
              backgroundColor: "#FFFDD0",
            }}
          />
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <Button
          title={"Post"}
          style={{
            height: 40,
            width: 60,
            backgroundColor: "green",
            color: "#fff",
            marginTop: 20,
          }}
        />
      </View>
      <DiscussionCart />
      <ReplyCart/>
      <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 30,
          }}
          source={{
            uri: "https://amarschool.com.bd/public/uploads/default/instructor-default.png",
          }}
        />
        <View style={{ width: "100%" }}>
          <TextInput
            multiline={true}
            style={{
              width: "100%",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#e5e5e5",
              padding: 10,
              textAlign: "justify",
              marginLeft: 10,
              backgroundColor: "#FFFDD0",
            }}
          />
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <Button
          title={"Reply"}
          style={{
            height: 40,
            width: 60,
            backgroundColor: "green",
            color: "#fff",
            marginTop: 20,
          }}
        />
      </View>
      
    </View>
    </View>
  );
};

export default DiscussionTab;

const styles = StyleSheet.create({});

const DiscussionCart = () => {
  return (
    <View style={{width:'100%'}}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          
          
        }}
      >
        <Image
          style={{
            height:50,
            width:50,
            borderRadius: 30,
          }}
          source={{
            uri: "https://amarschool.com.bd/public/uploads/default/instructor-default.png",
          }}
        />
        <View
          style={{
            width: "100%",

            marginLeft: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#FFFDD0",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>MD Jahidul</Text>
            <Text style={{ fontSize: 12, fontWeight: "300" }}>MD Jahidul</Text>
          </View>
          <View
            style={{
              marginTop:5,
              flexDirection: "row",
              justifyContent: "space-between",
              width:250,
             
              paddingRight:10
           
            }}
          >
            <Text style={{ fontSize: 12 }}>1 second ago</Text>
            <Text style={{ fontSize: 12 }}>1</Text>
            
          </View>
        </View>
      </View>
    </View>
  );
};

const ReplyCart = () => {
  return (
    <View style={{width:'80%'}}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          
          
        }}
      >
        <Image
          style={{
            height:50,
            width:50,
            borderRadius: 30,
          }}
          source={{
            uri: "https://amarschool.com.bd/public/uploads/default/instructor-default.png",
          }}
        />
        <View
          style={{
            width: "100%",

            marginLeft: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#FFFDD0",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>MD Jahidul</Text>
            <Text style={{ fontSize: 12, fontWeight: "300" }}>MD Jahidul</Text>
          </View>
          <View
            style={{
              marginTop:5,
              flexDirection: "row",
              justifyContent: "space-between",
              width:250,
             
              paddingRight:10
           
            }}
          >
            <Text style={{ fontSize: 12 }}>1 second ago</Text>
            
            
          </View>
        </View>
      </View>
    </View>
  );
};
