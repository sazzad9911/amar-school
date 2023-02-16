import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { dollar, enroll, diamond,taka } from "../../assets/icon";
import MyRank from "../../components/TeacherParts/MyRank";
import RecentlyAdded from "../../components/TeacherParts/RecentlyAdded";
import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import { getInstructorAnalysis, getInstructorDashboard } from "../../apis/instructor";
import { calculateDay } from "../../functions/converters";
import { url } from "../../apis/api";
import { useIsFocused } from "@react-navigation/native";

const data = {
  labels: ["May", "June"],
  datasets: [
    {
      data: [30, 45],
    },
  ],
};

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  borderradios: 10,
};

const TeacherHome = (props) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [Data, setData] = useState();
  const [analysis,setAnalysis]=useState()
  const isFocused=useIsFocused()
  //console.log(userInfo)
  useEffect(() => {
    if (userInfo) {
      //console.log(userInfo)
      getInstructorDashboard(userInfo)
        .then((res) => {
          setData(res.data.data);
          //console.log(res.data.data)
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
        getInstructorAnalysis(userInfo)
        .then((res) => {
          setAnalysis(res.data.data);
          //console.log(res.data.data)
        })
        .catch((err) => {
          Alert.alert(err.response.data.message);
        });
    }
  }, [userInfo,isFocused]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#F6FBFE",
        height: "100%",
        flex:1
      }}
    >
      <View style={{ flexDirection: "row", marginVertical: 20,justifyContent:"center" }}>
        <TouchableOpacity style={art.miniBox}>
          <SvgXml xml={dollar} height="30" width="30" />
          <Text style={{ fontSize: 10 }}>EARNING</Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={art.bT}>৳ {analysis?.total_earning}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={art.miniBox}>
          <SvgXml xml={enroll} height="30" width="30" />
          <Text style={{ fontSize: 10 }}>TOTAL ENROLL</Text>
          <Text style={art.bT}>{analysis?.total_enroll}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={art.miniBox}>
          <SvgXml xml={diamond} height="30" width="30" />
          <Text style={{ fontSize: 10, textAlign: "center" }}>
            ENROLL COURSE
          </Text>
          <Text style={art.bT}>{analysis?.total_courses}</Text>
        </TouchableOpacity>
      </View>
      <Text style={art.title}>Recently Added Courses</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Data&&Data.recentCourses.map((doc,i)=>(
          <RecentlyAdded key={i}
          title={doc.title}
          enroll={`Rating ${doc.average_rating}`}
          date={calculateDay(doc.created_at)}
          image={doc.image?`${url}${doc.image}`:null
          }
        />
        ))}
        {Data&&Data.recentCourses.length==0&&(
          <Text style={{
            marginVertical:10,
            marginHorizontal:20,
            textAlign:"center"
          }}>No Course Found</Text>
        )}
             
      </ScrollView>
      <Text style={art.title}>My Rank</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
      >
        {Data &&
          Data.levels.map((doc, i) => (
            <MyRank
              key={i}
              image={dollar}
              earning={doc.earning}
              student={doc.student}
              name={doc.name}
            />
          ))}
      </ScrollView>
      <Text style={art.title}>Sale Statistics</Text>
      <LineChart
          data={data}
          width={screenWidth-40}
          height={220}
          chartConfig={chartConfig}
          style={{
            borderRadius:10
          }}
        />
        <View style={{height:40}}/>
    </ScrollView>
  );
};

export default TeacherHome;
const art = StyleSheet.create({
  miniBox: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bT: {
    fontSize: 15,
    fontWeight: "700",
    color: "#303030",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#303030",
  },
});
