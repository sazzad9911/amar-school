import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Button from "../../components/main/Button";

const Book = ({ props, visible }) => {
  const [Focus, setFocus] = React.useState(false);
  const [Visible, setVisible] = React.useState(false);
  const [Select,setSelect] = React.useState(false);

  React.useEffect(() => {
    if (visible) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  }, [visible]);

  

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = React.useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);
    setDate(convertDate(date));
    hideDatePicker();
  };

  return (
    <View
      style={{ paddingHorizontal: 5, justifyContent: "center", height: "100%" }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            style={{ width: "80%", marginTop: 20 }}
            title={date ? date : "Select Date"}
            onPress={showDatePicker}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginTop: 7 }}>Hours : </Text>
          <View
            style={{
              height: 35,
              backgroundColor: "#FFFDD0",
              justifyContent: "center",
              padding: 10,
              width: "45%",
              borderRadius: 5,
              marginRight: 20,
              alignItems: "center",
            }}
          >
            <Text>$ 65/h</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 20 }}>
          Type :
        </Text>
        <TouchableOpacity
          onPress={() => {
            setFocus(!Focus);
            setVisible(false);
          }}
          style={{
            height: 35,
            width: 95,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#808080",
            alignItems: "center",
            marginLeft: 10,
            justifyContent: "center",
            borderColor: Focus ? "#006600" : "#FFFDD0",
            backgroundColor: "#FFFDD0",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 15 }}>In Person</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setVisible(!Visible);
            setFocus(false);
          }}
          style={{
            height: 35,
            width: 95,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#808080",
            alignItems: "center",
            marginLeft: 20,
            justifyContent: "center",
            borderColor: Visible ? "#006600" : "#FFFDD0",
            backgroundColor: "#FFFDD0",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 15 }}>Online</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center",marginTop: 10, }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginLeft: 20,
            
           
          }}
        >
          Saturday :
        </Text>
        <TouchableOpacity
          onPress={() => {
            setSelect(Select);
            setSelect(true)
            
          }}
          style={{
            height: 35,
            width: '60%',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#808080",
            alignItems: "center",
            marginLeft: 20,
            justifyContent: "center",
            borderColor: Select ? "#006600" : "#FFFDD0",
            backgroundColor: "#FFFDD0",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 15 }}>03:26 PM - 04:26 PM</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 20,marginTop:10 }}>
      Your Meeting Details
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "400", marginLeft: 20,marginTop:5 }}>
        Meeting Date & Time: 31-12-2022 | 03:26 PM - 04:26 PM
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "400", marginLeft: 20,marginTop:5 }}>
        Total Duration: 1 Hour 0 Minute
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "400", marginLeft: 20,marginTop:5 }}>
        Total Cost: $ 66.00
        </Text>
    
      <Button
        style={{
          margin: 20,
          backgroundColor: "green",
          color: "#fff",
        }}
        title={"Make Payment"}
      />
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({});

export const convertDate = (date) => {
  const d = new Date(date);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  return `${day} ${months[month]} ${year} `;
};
