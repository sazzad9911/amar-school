import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { SvgXml } from "react-native-svg";

const UserBottomBar = (props) => {
  const [Index, setIndex] = React.useState(0);
  const styles = StyleSheet.create({
    view: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    text: {
      marginTop: 5,
    },
    active: {
      backgroundColor: "#FFFDD0",
      borderRadius: 100,
      width: 55,
      height: 55,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  React.useEffect(() => {
    setIndex(props.state.index);
    //console.log("ok");
  }, [props.state.index]);
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      }}
    >
      
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(props.state.routes[0]);
        }}
        style={[styles.view]}
      >
        <View style={Index == 0 ? styles.active : null}>
          <SvgXml xml={homeActive} height="20" width="20" />
        </View>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(props.state.routes[1]);
        }}
        style={styles.view}
      >
        <View style={Index == 1 ? styles.active : null}>
          <SvgXml
            xml={Index == 1 ? activeCourse : course}
            height="22"
            width="22"
          />
        </View>
        <Text style={styles.text}>Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(props.state.routes[2]);
        }}
        style={styles.view}
      >
        <View style={Index == 2 ? styles.active : null}>
          <SvgXml
            xml={Index == 2 ? notificationActive : notification}
            height="20"
            width="20"
          />
        </View>

        <Text style={styles.text}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(props.state.routes[3]);
        }}
        style={styles.view}
      >
        <View style={Index == 3 ? styles.active : null}>
          <SvgXml
            xml={Index == 3 ? profileActive : profile}
            height="20"
            width="20"
          />
        </View>
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserBottomBar;

const home = `<svg xmlns="http://www.w3.org/2000/svg" width="26.39" height="23.383" viewBox="0 0 26.39 23.383">
<g id="home-svgrepo-com_1_" data-name="home-svgrepo-com (1)" transform="translate(0 -1.504)">
  <g id="c14_house">
    <path id="Path_3937" data-name="Path 3937" d="M3.588,24.3a.548.548,0,0,0,.553.59l6.652-.008.01-5.451s-.094-.9.777-.9h2.761a.856.856,0,0,1,.968.9L15.3,24.862h6.512a.682.682,0,0,0,.7-.734V14.076L13.33,5.913,3.588,14.077S3.588,24.3,3.588,24.3Z" fill="#060"/>
    <path id="Path_3938" data-name="Path 3938" d="M0,13.317s.826,1.524,2.631,0L13.412,4.2,23.519,13.26c2.088,1.506,2.871,0,2.871,0L13.412,1.5Z" fill="#060"/>
    <path id="Path_3939" data-name="Path 3939" d="M23.273,4.175h-2.6l.011,3.153,2.588,2.2Z" fill="#060"/>
  </g>
</g>
</svg>

`;
const homeActive = `<svg xmlns="http://www.w3.org/2000/svg" width="26.39" height="23.383" viewBox="0 0 26.39 23.383">
<g id="home-svgrepo-com_1_" data-name="home-svgrepo-com (1)" transform="translate(0 -1.504)">
  <g id="c14_house">
    <path id="Path_3937" data-name="Path 3937" d="M3.588,24.3a.548.548,0,0,0,.553.59l6.652-.008.01-5.451s-.094-.9.777-.9h2.761a.856.856,0,0,1,.968.9L15.3,24.862h6.512a.682.682,0,0,0,.7-.734V14.076L13.33,5.913,3.588,14.077S3.588,24.3,3.588,24.3Z" fill="#060"/>
    <path id="Path_3938" data-name="Path 3938" d="M0,13.317s.826,1.524,2.631,0L13.412,4.2,23.519,13.26c2.088,1.506,2.871,0,2.871,0L13.412,1.5Z" fill="#060"/>
    <path id="Path_3939" data-name="Path 3939" d="M23.273,4.175h-2.6l.011,3.153,2.588,2.2Z" fill="#060"/>
  </g>
</g>
</svg>

`;
const education = `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="21.985" viewBox="0 0 27 21.985">
<g id="Group_500" data-name="Group 500" transform="translate(-130 -542)">
  <g id="Group_499" data-name="Group 499" transform="translate(130 542)">
    <path id="Path_3907" data-name="Path 3907" d="M394.832,311.435c-.144.072-.237.115-.327.164q-5.228,2.851-10.454,5.709a.494.494,0,0,1-.543,0q-6.446-3.527-12.9-7.042c-.092-.05-.182-.1-.32-.179.115-.067.2-.119.285-.166q6.475-3.533,12.947-7.07a.471.471,0,0,1,.519,0q6.5,3.554,13,7.093a.409.409,0,0,1,.248.42q-.011,4.6,0,9.2v.324h-2.454Z" transform="translate(-370.29 -302.773)" fill="#b0e1f6"/>
    <path id="Path_3908" data-name="Path 3908" d="M394.2,361.255c.118.066.217.117.312.174q3.988,2.393,7.973,4.791a.468.468,0,0,0,.565,0q3.993-2.413,8-4.807c.088-.053.179-.1.315-.172v.324c0,1.591,0,3.182.005,4.772a.43.43,0,0,1-.264.443q-4.054,2.187-8.1,4.4a.427.427,0,0,1-.468,0q-4.056-2.214-8.119-4.413c-.141-.076-.248-.139-.247-.336.008-1.668,0-3.335.006-5A1.731,1.731,0,0,1,394.2,361.255Z" transform="translate(-389.279 -349.267)" fill="#b0e1f6"/>
  </g>
</g>
</svg>
`;
const educationActive = `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="21.985" viewBox="0 0 27 21.985">
<g id="Group_500" data-name="Group 500" transform="translate(-130 -542)">
  <g id="Group_499" data-name="Group 499" transform="translate(130 542)">
    <path id="Path_3907" data-name="Path 3907" d="M394.832,311.435c-.144.072-.237.115-.327.164q-5.228,2.851-10.454,5.709a.494.494,0,0,1-.543,0q-6.446-3.527-12.9-7.042c-.092-.05-.182-.1-.32-.179.115-.067.2-.119.285-.166q6.475-3.533,12.947-7.07a.471.471,0,0,1,.519,0q6.5,3.554,13,7.093a.409.409,0,0,1,.248.42q-.011,4.6,0,9.2v.324h-2.454Z" transform="translate(-370.29 -302.773)" fill="#51B7FB"/>
    <path id="Path_3908" data-name="Path 3908" d="M394.2,361.255c.118.066.217.117.312.174q3.988,2.393,7.973,4.791a.468.468,0,0,0,.565,0q3.993-2.413,8-4.807c.088-.053.179-.1.315-.172v.324c0,1.591,0,3.182.005,4.772a.43.43,0,0,1-.264.443q-4.054,2.187-8.1,4.4a.427.427,0,0,1-.468,0q-4.056-2.214-8.119-4.413c-.141-.076-.248-.139-.247-.336.008-1.668,0-3.335.006-5A1.731,1.731,0,0,1,394.2,361.255Z" transform="translate(-389.279 -349.267)" fill="#51B7FB"/>
  </g>
</g>
</svg>
`;
const notification = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48.016" viewBox="0 0 48 48.016">
<g id="notification-svgrepo-com" transform="translate(-2 -1.984)">
  <path id="Path_3941" data-name="Path 3941" d="M46,33h-.5A3.543,3.543,0,0,1,42,29.5V18A16.047,16.047,0,0,0,25.2,2C16.6,2.4,10,9.8,10,18.5V29.6A3.458,3.458,0,0,1,6.5,33H6a4.1,4.1,0,0,0-4,4.1v1.5A1.524,1.524,0,0,0,3.5,40h45A1.538,1.538,0,0,0,50,38.5V37A4.012,4.012,0,0,0,46,33Z" fill="#060"/>
  <path id="Path_3942" data-name="Path 3942" d="M30.9,44H21.1a1.055,1.055,0,0,0-1,1.2A5.922,5.922,0,0,0,26,50a6.019,6.019,0,0,0,5.9-4.8A1.055,1.055,0,0,0,30.9,44Z" fill="#060"/>
</g>
</svg>

`;
const notificationActive = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48.016" viewBox="0 0 48 48.016">
<g id="notification-svgrepo-com" transform="translate(-2 -1.984)">
  <path id="Path_3941" data-name="Path 3941" d="M46,33h-.5A3.543,3.543,0,0,1,42,29.5V18A16.047,16.047,0,0,0,25.2,2C16.6,2.4,10,9.8,10,18.5V29.6A3.458,3.458,0,0,1,6.5,33H6a4.1,4.1,0,0,0-4,4.1v1.5A1.524,1.524,0,0,0,3.5,40h45A1.538,1.538,0,0,0,50,38.5V37A4.012,4.012,0,0,0,46,33Z" fill="#060"/>
  <path id="Path_3942" data-name="Path 3942" d="M30.9,44H21.1a1.055,1.055,0,0,0-1,1.2A5.922,5.922,0,0,0,26,50a6.019,6.019,0,0,0,5.9-4.8A1.055,1.055,0,0,0,30.9,44Z" fill="#060"/>
</g>
</svg>

`;
const profile = `<svg xmlns="http://www.w3.org/2000/svg" width="11.979" height="12" viewBox="0 0 11.979 12">
<g id="user-profile-svgrepo-com" transform="translate(-0.5 -0.135)">
  <path id="Path_3940" data-name="Path 3940" d="M10.084,6.535a5.142,5.142,0,0,1-7.189,0A4.108,4.108,0,0,0,.5,10.5V12H12.479V10.5A4.108,4.108,0,0,0,10.084,6.535Z" transform="translate(0 0.135)" fill="#060"/>
  <ellipse id="Ellipse_358" data-name="Ellipse 358" cx="4" cy="3.5" rx="4" ry="3.5" transform="translate(2.5 0.135)" fill="#060"/>
</g>
</svg>

`;
const profileActive = `<svg xmlns="http://www.w3.org/2000/svg" width="11.979" height="12" viewBox="0 0 11.979 12">
<g id="user-profile-svgrepo-com" transform="translate(-0.5 -0.135)">
  <path id="Path_3940" data-name="Path 3940" d="M10.084,6.535a5.142,5.142,0,0,1-7.189,0A4.108,4.108,0,0,0,.5,10.5V12H12.479V10.5A4.108,4.108,0,0,0,10.084,6.535Z" transform="translate(0 0.135)" fill="#060"/>
  <ellipse id="Ellipse_358" data-name="Ellipse 358" cx="4" cy="3.5" rx="4" ry="3.5" transform="translate(2.5 0.135)" fill="#060"/>
</g>
</svg>

`;
const course=`<svg xmlns="http://www.w3.org/2000/svg" width="484.006" height="358.884" viewBox="0 0 484.006 358.884">
<g id="graduate-cap-svgrepo-com" transform="translate(0 -62.561)">
  <g id="Group_549" data-name="Group 549">
    <path id="Path_3937" data-name="Path 3937" d="M484.006,189.845V179.186L241.9,62.561,0,179.083v10.863L241.9,306.471Z" fill="#060"/>
    <path id="Path_3938" data-name="Path 3938" d="M83.808,251.571v69.7l145.836,70.25H254.15l145.435-70.057c.14-.307.271-.613.4-.922V251.57L241.9,327.722Z" fill="#060"/>
    <path id="Path_3939" data-name="Path 3939" d="M458.506,358.2V222.6l-19.147,9.656V358.2L426.883,396.2l18.859,25.242h6.381L470.981,396.2Z" fill="#060"/>
  </g>
</g>
</svg>

`
const activeCourse=`<svg xmlns="http://www.w3.org/2000/svg" width="484.006" height="358.884" viewBox="0 0 484.006 358.884">
<g id="graduate-cap-svgrepo-com" transform="translate(0 -62.561)">
  <g id="Group_549" data-name="Group 549">
    <path id="Path_3937" data-name="Path 3937" d="M484.006,189.845V179.186L241.9,62.561,0,179.083v10.863L241.9,306.471Z" fill="#060"/>
    <path id="Path_3938" data-name="Path 3938" d="M83.808,251.571v69.7l145.836,70.25H254.15l145.435-70.057c.14-.307.271-.613.4-.922V251.57L241.9,327.722Z" fill="#060"/>
    <path id="Path_3939" data-name="Path 3939" d="M458.506,358.2V222.6l-19.147,9.656V358.2L426.883,396.2l18.859,25.242h6.381L470.981,396.2Z" fill="#060"/>
  </g>
</g>
</svg>
`