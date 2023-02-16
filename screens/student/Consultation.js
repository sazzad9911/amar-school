import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ConsultationCart from "../../components/Others/ConsultationCart";
import { useSelector } from "react-redux";
import { getMyConsultation } from "../../apis/profile";
import ActivityLoader from "../../components/ActivityLoader";
import { useIsFocused } from "@react-navigation/native";

const Consultation = (props) => {
  const [Data, setData] = React.useState();
  const [Loader, setLoader] = React.useState(false);
  const userInfo = useSelector((state) => state.userInfo);
  const isFocused=useIsFocused()

  React.useEffect(() => {
    if (userInfo) {
      setLoader(true);
      getMyConsultation(userInfo.meta.token)
        .then((res) => {
          setData(res.data.data.orderItems.data);
          //console.warn(res.data.data.orderItems.data[0])
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
          console.warn(err.response.data.message);
        });
    }
  }, [isFocused]);
  if(Loader){
    return <ActivityLoader/>
  }
  return (
    <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <View style={{ flexDirection: "row",flexWrap:"wrap" }}>
        {Data &&
          Data.map((doc, i) => (
            <ConsultationCart onPress={()=>{
              console.log(doc)
            }} key={i}
            {...props}
            image={
              "https://lmszai.zainikthemes.com/uploads/course/1669814930-hI5q3yMOZ6.jpg"
            }
            name={"Tasnem Srity"}
            headline={
              "Laravel For Beginners - Become A Laravel Master - CMS Project"
            }
            ratings={"5.0"}
          />
          ))}
        {Data && Data.length == 0 && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>No Consultation Found</Text>
          </View>
        )}
      </View>
      
    </ScrollView>
  );
};

export default Consultation;

const art = StyleSheet.create({});
