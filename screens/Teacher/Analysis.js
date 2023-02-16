import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import AnalysisCart from "../../components/TeacherParts/AnalysisCart";
import {
  pen,
  pendingMoney,
  b,
  dollar,
  withdraw,
  u,
  salary,
} from "../../assets/icon";

import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { getInstructorAnalysis } from "../../apis/instructor";
import ActivityLoader from "../../components/ActivityLoader";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  borderradios: 10,
};

const Analysis = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const isFocused = useIsFocused();
  const [analysis, setAnalysis] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if (userInfo) {
      getInstructorAnalysis(userInfo)
        .then((res) => {
          setAnalysis(res.data.data);
          setData({
            labels: ["Jun","July"],
            datasets: [
              {
                data: [30,40],
              },
            ],
          });
        })
        .catch((err) => {
          Alert.alert(err.response.data.message);
        });
    }
  }, [isFocused, userInfo]);

  if (!data) {
    return <ActivityLoader />;
  }

  return (
    <ScrollView style={{ padding: 20, marginBottom: 20 }}>
      <AnalysisCart image={b} text="Number Of Courses" number={analysis.total_courses} />
      <AnalysisCart image={u} text="Total Enroll" number={analysis.total_enroll} />

      <AnalysisCart image={dollar} text="Total Earning" number={`$ ${analysis.total_earning}`} />

      <AnalysisCart image={salary} text="Available Balance" number={`$ ${analysis.total_earning-analysis.total_withdraw_amount}`} />
      <AnalysisCart
        image={withdraw}
        text="Total Withdraw Amount"
        number={`$ ${analysis.total_withdraw_amount}`}
      />
      <AnalysisCart
        image={pendingMoney}
        text="Pending Withdraw Amount"
        number={`$ ${analysis.total_pending_withdraw_amount}`}
      />

      <View style={{ marginBottom: 20 }}>
        <LineChart style={{
          borderRadius:10
        }}
          data={data}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </ScrollView>
  );
};

export default Analysis;

const styles = StyleSheet.create({});
