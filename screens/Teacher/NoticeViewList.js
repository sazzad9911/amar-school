import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import NoticeViewListCart from "../../components/TeacherParts/NoticeViewListCart";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { deleteInstructorNotices, getInstructorNotices } from "../../apis/courses";

const NoticeViewList = (props) => {
  const userInfo = useSelector((state) => state.userInfo);
  const data = props.route.params.data;
  const [notice, setNotice] = useState();
  const isFocused = useIsFocused();
  const [loader,setLoader]=useState(false)

  useEffect(() => {
    if (userInfo) {
      getInstructorNotices(userInfo, data.uuid)
        .then((res) => {
          setNotice(res.data.data.notices.data);
        })
        .catch((err) => {
          Alert.alert(err.response.data.message);
        });
    }
  }, [userInfo, isFocused,loader]);

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 20 }}>
        <Text>NoticeViewList</Text>
      </View>
      {notice && notice.map((doc, i) => <NoticeViewListCart onDelete={()=>{
        deleteInstructorNotices(userInfo,doc.uuid).then(res=>{
          setLoader(val=>(!val)) 
        }).catch(err=>{
          Alert.alert(err.response.data.message)
        })
        //console.log(doc.uuid)
      }} course_uuid={data.uuid} data={doc} key={i} {...props} />)}
      {notice&&notice.length==0&&(
        <Text style={{
          textAlign:"center",
          marginVertical:10
        }}>No Notice Found</Text>
      )}
    </ScrollView>
  );
};

export default NoticeViewList;

const styles = StyleSheet.create({});
