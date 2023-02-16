import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../components/main/Button";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { deleteResources, getResources } from "../../apis/courses";
import { useSelector } from "react-redux";
import ActivityLoader from "../../components/ActivityLoader";
import { useIsFocused } from "@react-navigation/native";

const TeacherResource = (props) => {
  const params=props.route.params;
  const data=params.data
  //console.log(data)
  const [Data,setData]=React.useState()
  const userInfo=useSelector(state=>state.userInfo)
  const [resource,setResource]=React.useState()
  const isFocused=useIsFocused()
  const [LOAD,setLOAD]=React.useState(false)
  React.useEffect(()=>{
   if(data){
    getResources(userInfo,data.uuid).then(res=>{
      setResource(res.data.data.resources.data)
      setData(res.data.data)
    }).catch(err=>{
      console.warn(err.response.data.message)
    })
   }
   //console.log(userInfo.meta.token)
  },[isFocused,data,LOAD])
if(!Data){
  return <ActivityLoader/>
}
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Button
        onPress={() => {
          props.navigation.navigate("AddResource",{data:data});
        }}
        style={{ marginTop: 10, backgroundColor: "green", color: "#fff" }}
        title={"Add Resource"}
      />
      <View>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Resource List</Text>
        {resource&&resource.map((doc,i)=>(
          <ListCart onChange={setLOAD} data={doc} key={i} />
        ))}
        {resource&&resource.length==0&&(
          <Text style={{
            marginVertical:10
          }}>No Resources Found</Text>
        )}
      </View>
    </View>
  );
};

export default TeacherResource;

const styles = StyleSheet.create({});

const ListCart = ({data,onChange}) => {
  const userInfo=useSelector(state=>state.userInfo)
//console.log(data)
  return (
    <View style={{ padding: 10,flexDirection:'row',alignItems:'center',marginTop:10 }}>
      <View style={{ flexDirection: "row", width: "80%" ,alignItems:'center',}}>
        <AntDesign name="link" size={20} color="black" />
        <Text style={{ marginHorizontal: 10 }}>
         {data.original_filename}
        </Text>
      </View>
      <MaterialIcons style={{
        marginLeft:10
      }} onPress={()=>{
        deleteResources(userInfo,data.uuid,data.original_filename).then(res=>{
          if(onChange){
            onChange(res)
          }
        }).catch(err=>{
          console.warn(err.response.data.message)
        })
      }} name="delete" size={24} color="red" />
    </View>
  );
};
