import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { cup, coin,game,communication } from "../../assets/icon";

export default function QuizSub(props) {
  return (
    <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <View style={art.inBox}>
        <SvgXml xml={cup} height="30" width="30" />
        <View style={{ marginLeft: 10, width: "35%" }}>
          <Text style={{ fontSize: 12 }}>র‍্যাংকিং</Text>
          <Text style={art.blueText}>৩৪৮</Text>
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: "black",
            width: 1,
            marginRight: 10,
          }}
        ></View>
        <SvgXml xml={coin} height="30" width="30" />
        <View style={{ marginLeft: 10, width: "35%" }}>
          <Text style={{ fontSize: 12 }}>পয়েন্টস</Text>
          <Text style={art.blueText}>১২০৯</Text>
        </View>
      </View>
      <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}>
        শুরু করি
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:10 }}>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={game} height="60" width="60" />
          <View>
          <Text>
          Game Development
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={communication} height="60" width="60" />
          <View>
          <Text>
          Communication
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:10 }}>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={game} height="60" width="60" />
          <View>
          <Text>
          Game Development
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={communication} height="60" width="60" />
          <View>
          <Text>
          Communication
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:10 }}>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={game} height="60" width="60" />
          <View>
          <Text>
          Game Development
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={communication} height="60" width="60" />
          <View>
          <Text>
          Communication
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:10 }}>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={game} height="60" width="60" />
          <View>
          <Text>
          Game Development
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={communication} height="60" width="60" />
          <View>
          <Text>
          Communication
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:10 }}>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={game} height="60" width="60" />
          <View>
          <Text>
          Game Development
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={communication} height="60" width="60" />
          <View>
          <Text>
          Communication
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:10 }}>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={game} height="60" width="60" />
          <View>
          <Text>
          Game Development
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={communication} height="60" width="60" />
          <View>
          <Text>
          Communication
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:10 }}>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={game} height="60" width="60" />
          <View>
          <Text>
          Game Development
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Quiz");
          }} style={art.miniBox}>
        <SvgXml xml={communication} height="60" width="60" />
          <View>
          <Text>
          Communication
          </Text>
          <Text> 50 Questions</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}

const art = StyleSheet.create({
  TopBox: {},
  inBox: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    height: 60,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  blueText: {
    fontSize: 18,
    color: "#53B5E0",
  },
  miniBox: {
    height: 120,
    width: "48%",
    backgroundColor: "#fff",
    borderRadius:10,
    alignItems:'center',
    padding:10
  },
  miniText:{

  }
});
