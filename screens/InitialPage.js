import React, { useState } from "react";
import Swiper from "react-native-swiper";
import {
  AppRegistry,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import { initial1, initial2, student, student2 } from "./../assets/icon";
import { SvgXml } from "react-native-svg";
import Button from "../components/main/Button";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const InitialPage = ({ navigation }) => {
  // const [imgActive, setimgActive] = useState(0);

  // const onChange = (nativeEvent) => {
  //   if (nativeEvent) {
  //     const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
  //     if (slide != imgActive) {
  //       setimgActive(slide);
  //     }
  //   }
  // }
  return (
    <View>
      <View style={{ height: "58%" }}>
        <Swiper autoplay={true} showsButtons={false} loop={true}>
          <View style={styles.slide1}>
            <SvgXml xml={student} height="500" width="300" />
          </View>
          <View style={styles.slide2}>
            <SvgXml xml={initial1} height="500" width="300" />
          </View>
          <View style={styles.slide3}>
            <SvgXml xml={initial2} height="500" width="300" />
          </View>
        </Swiper>
      </View>
      <View style={art.belowBox}>
        <Text style={art.bigText}>Change the experience</Text>
        <Text style={art.bigText}>of learning something new</Text>
        <Text style={[art.smallText, { marginTop: 30 }]}>
          Our aim is to ensure quality education
        </Text>
        <Text style={art.smallText}>for all at low cost</Text>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Button
            onPress={() => {
              navigation.navigate("LogIn");
            }}
            title={"Start learning"}
            style={{
              backgroundColor: "#006600",
              height: 55,
              color: "#fff",
              fontWeight: "900",
              fontSize: 18,
              borderRadius: 20,
              width: 320,
              marginTop: "10%",
            }}
          />
        </View>
      </View>
    </View>
  );
};
AppRegistry.registerComponent("myproject", () => SwiperComponent);

export default InitialPage;

const art = StyleSheet.create({
  container: {},
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.6,
    backgroundColor: "#F2F2F2",
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "white",
  },
  belowBox: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 30,
    bottom: 0,
    height: "42%",
  },
  bigText: {
    color: "#006600",
    fontSize: 18,
    fontWeight: "600",
  },
  smallText: {
    color: "#6F7071",
  },
});

{
  /* <View style={art.belowBox}>
          <Text style={art.bigText}>
            বদলে যাক
          </Text>
          <Text style={art.bigText}>
            নতুন কিছু শেখার অভিজ্ঞতা
          </Text>
          <Text style={[art.smallText, { marginTop: 30 }]}>
            কম খরচে সবার জন্য মান সম্মত
          </Text>
          <Text style={art.smallText}>
            শিক্ষা নিশ্চিতের লক্ষ্যে আমাদের পথচলা
          </Text>
          <View style={{
            alignItems: 'center'
          }}>
            <Button onPress={() => { props.navigation.navigate('PhoneNumber') }} title={"শিখতে শুরু করুন"}
              style={{
                backgroundColor: '#53B5E0',
                height: 55,
                color: '#fff',
                fontWeight: '900',
                fontSize: 18,
                borderRadius: 20,
                width: 320,
              }} />
          </View>
        </View> */
}

{
  /* <ScrollView scrollEventThrottle={16}
            onScroll={({ nativeEvent }) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={art.wrap}
          >
            {
              images.map((e, index) => {
                <SvgXml key={index} xml={e}
                  height="600"
                  width="300"

                />
              }
              )
            }
            <SvgXml xml={student}
              height="500"
              width="300"

            />
          </ScrollView>
          <View style={art.wrapDot}>
            {
              images.map((e, index) =>
                <Text 
                  key={index}
                  style={imgActive == index ? art.dotActive : art.dot}
                >
                  •
                </Text>
              )
            }

          </View> */
}

{
  /* <View style={art.continer}>
        <View style={art.wrap}>
          
        </View>
      </View> */
}
