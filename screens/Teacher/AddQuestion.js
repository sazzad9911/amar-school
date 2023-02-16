import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/main/Button";

const AddQuestion = ({ navigation, route }) => {
  const params = route.params;
  const Choice = params.Choice;
  

  if (Choice&&Choice === 2) {
    return (
      <View style={{ paddingHorizontal: 20 }}>
        <Text>Question 1</Text>
        <TextInput placeholder="Enter Your Question" style={art.inputQus} />
        <View
          style={{
            flexDirection: "row",
            width: "50%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <CheckBox />
            <Text> True</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <CheckBox />
            <Text> False</Text>
          </View>
        </View>
        <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Button
          style={{ width: 180, backgroundColor: "green", color: "#fff" }}
          title="Save And Another"
        />
        <Button
          style={{ width: 80, backgroundColor: "green", color: "#fff" }}
          title="Create"
        />
      </View>
      </View>
    );
  }
  // const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text>Question 1</Text>
      <TextInput placeholder="Enter Your Question" style={art.inputQus} />
      <TextInput placeholder="Enter Your Option" style={art.inputQus} />
      <View style={{ flexDirection: "row" }}>
        <CheckBox />
        <Text> Correct Answer</Text>
      </View>
      
      {/* <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  /> */}
      <TextInput placeholder="Enter Your Option" style={art.inputQus} />
      <View style={{ flexDirection: "row" }}>
        <CheckBox />
        <Text> Correct Answer</Text>
      </View>
      <TextInput placeholder="Enter Your Option" style={art.inputQus} />
      <View style={{ flexDirection: "row" }}>
        <CheckBox />
        <Text> Correct Answer</Text>
      </View>
      <TextInput placeholder="Enter Your Option" style={art.inputQus} />
      <View style={{ flexDirection: "row" }}>
        <CheckBox />
        <Text> Correct Answer</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Button
          style={{ width: 180, backgroundColor: "green", color: "#fff" }}
          title="Save And Another"
        />
        <Button
          style={{ width: 80, backgroundColor: "green", color: "#fff" }}
          title="Create"
        />
      </View>
    </View>
  );
};

export default AddQuestion;

const art = StyleSheet.create({
  inputQus: {
    borderColor: "#707070",
    borderWidth: 1,
    height: 45,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
