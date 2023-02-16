import React from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

import SelectClass from "../components/Others/SelectClass";

import Button from "../components/main/Button";

import { FontAwesome } from '@expo/vector-icons';


import { class6, class7, class8, class9, class10, class11, class12, others, science, arts, finance } from '../assets/icon'
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
const ClassSelection = (props) => {
  const HEIGHT = Dimensions.get("window").height;
  const [Index, setIndex] = React.useState(-1);
  const bottomSheetRef = React.useRef(null);
  const [viewRef, setViewRef] = React.useState()
  const VIEW = () => {
    return (
      <View onLayout={e => {
        setViewRef(e.nativeEvent.layout.height)
        //console.warn(e.nativeEvent.layout)
      }} style={styles.contentContainer}>
        <Text style={{ fontSize: 17, color: '#808080', marginBottom: 20 }}>১২শ শ্রেনীর গ্রুপ সিলেক্ট করো</Text>
        <SelectClass title={'বিজ্ঞান'} image={science} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
        <SelectClass title={'মানবিক'} image={arts} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
        <SelectClass title={'ব্যাবসায় শিক্ষা'} image={finance} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />

        <Button
          title={"এগিয়ে যান"}
          style={{
            backgroundColor: "#53B5E0",
            height: 55,
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 40,
            fontSize: 22,
            width: '100%',
            marginTop: 40
          }}
        >
          {" "}
        </Button>
      </View>
    )
  }
  // variables

  const snapPoints = React.useMemo(() => ["25%", "50%", viewRef ? viewRef : "65%"], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index) => {
    setIndex(index);
    // console.log("handleSheetChanges", index);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 20, flex: 1, paddingTop: 10 }}>
        <SelectClass title={'ক্লাস ৬'} image={class6} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
        <SelectClass title={'ক্লাস ৭'} image={class7} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
        <SelectClass title={'ক্লাস ৮'} image={class8} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
        <SelectClass onPress={() => {
          setIndex(2);
        }} title={'ক্লাস ৯'} image={class9} color='#B0E1F6' icon={<AntDesign name="down" size={24} color="black" />} />
        <SelectClass onPress={() => {
          setIndex(2);
        }} title={'ক্লাস ১০'} image={class10} color='#B0E1F6' icon={<AntDesign name="down" size={24} color="black" />} />
        <SelectClass onPress={() => {
          setIndex(2);
        }} title={'ক্লাস ১১'} image={class11} color='#B0E1F6' icon={<AntDesign name="down" size={24} color="black" />} />
        <SelectClass onPress={() => {
          setIndex(2);
        }} title={'ক্লাস ১২'} image={class12} color='#B0E1F6' icon={<AntDesign name="down" size={24} color="black" />} />

        <Text style={{ fontSize: 18, marginVertical: 10 }}>অন্যান্য</Text>
        <SelectClass title={'স্কিল'} image={others} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />

        <Button
          onPress={() => {
            props.navigation.navigate("UserTabRoute");
          }}
          title={"এগিয়ে যান"}
          style={{
            backgroundColor: "#53B5E0",
            height: 55,
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 20,
            marginTop: 40,
            fontSize: 22,
            marginBottom: 20
          }}
        >
          {" "}
        </Button>
      </ScrollView>
      {/* <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={Index}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetScrollView>
          <View style={styles.contentContainer}>
            <Text style={{fontSize:17,color:'#808080',marginBottom:20}}>৯ম শ্রেনীর গ্রুপ সিলেক্ট করো</Text>
            <SelectClass title={'বিজ্ঞান'} image={science} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
            <SelectClass title={'মানবিক'} image={arts} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
            <SelectClass title={'ব্যাবসায় শিক্ষা'} image={finance} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
            
          </View>
        </BottomSheetScrollView>
      </BottomSheet> */}
      {/* <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={Index}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetScrollView>
          <View style={styles.contentContainer}>
            <Text style={{fontSize:17,color:'#808080',marginBottom:20}}>১০ম শ্রেনীর গ্রুপ সিলেক্ট করো</Text>
            <SelectClass title={'বিজ্ঞান'} image={science} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
            <SelectClass title={'মানবিক'} image={arts} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
            <SelectClass title={'ব্যাবসায় শিক্ষা'} image={finance} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
            
          </View>
        </BottomSheetScrollView>
      </BottomSheet> */}
      {/* <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={Index}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetScrollView>
          <View style={styles.contentContainer}>
            <Text style={{fontSize:17,color:'#808080',marginBottom:20}}>১১শ শ্রেনীর গ্রুপ সিলেক্ট করো</Text>
            <SelectClass title={'বিজ্ঞান'} image={science} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
            <SelectClass title={'মানবিক'} image={arts} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
            <SelectClass title={'ব্যাবসায় শিক্ষা'} image={finance} color='#B0E1F6' icon={<FontAwesome name="dot-circle-o" size={24} color="black" />} />
            
          </View>
        </BottomSheetScrollView>
      </BottomSheet> */}

      <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={Index}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        {VIEW}

      </BottomSheet>
    </View>
  );
};

export default ClassSelection;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
});

