import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Overview = ({navigation,route}) => {
  const course=route.params.course;

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "500" }}>
       Course Sub Title
      </Text>
      <Text>{course.course.subtitle}</Text>
      {/* <View>
        <View style={{ flexDirection: "row",marginBottom:10 }}>
          <Feather name="check-circle" size={18} color="green" />
          <Text style={{ marginLeft: 5 }}>
            Single URL for convenient SEO activities
          </Text>
        </View>
        <View style={{ flexDirection: "row",marginBottom:10 }}>
          <Feather name="check-circle" size={18} color="green" />
          <Text style={{ marginLeft: 5 }}>
          Less engineering time
          </Text>
        </View>
        <View style={{ flexDirection: "row",marginBottom:10 }}>
          <Feather name="check-circle" size={18} color="green" />
          <Text style={{ marginLeft: 5 }}>
          No redirection for device optimized view
          </Text>
        </View>
        <View style={{ flexDirection: "row",marginBottom:10 }}>
          <Feather name="check-circle" size={18} color="green" />
          <Text style={{ marginLeft: 5 }}>
          Just a Googlebot user agent crawls
          </Text>
        </View>
        <View style={{ flexDirection: "row",marginBottom:10 }}>
          <Feather name="check-circle" size={18} color="green" />
          <Text style={{ marginLeft: 5 }}>
          Resizable website as per any device
          </Text>
        </View>
        <View style={{ flexDirection: "row",marginBottom:10 }}>
          <Feather name="check-circle" size={18} color="green" />
          <Text style={{ marginLeft: 5 }}>
          Google juice will rank up the site
          </Text>
        </View>
        <View style={{ flexDirection: "row",marginBottom:10 }}>
          <Feather name="check-circle" size={18} color="green" />
          <Text style={{ marginLeft: 5 }}>
          No possibility of common mistakes
          </Text>
        </View>
        
      </View> */}
      <View>
        <Text style={{textAlign:'justify',marginTop:30}}>
        {course.course.description}
        </Text>
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({});
