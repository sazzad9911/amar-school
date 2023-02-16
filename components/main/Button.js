import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
const { width, height } = Dimensions.get("window");

const Button = ({
  LeftIcon,
  RightIcon,
  style,
  onPress,
  title,
  disabled,
  cart,
}) => {
  const styles = StyleSheet.create({
    view: {
      
      minHeight: 45,
      borderRadius: 5,
      backgroundColor: "white",
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 5,
      shadowOpacity: 0.1,
      shadowColor: "black",
      elevation: 1,
      justifyContent: cart ? "space-between" : "center",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
  });
  if (cart) {
    return (
      <TouchableOpacity
        style={[styles.view, style]}
        disabled={disabled}
        onPress={() => {
          if (onPress) {
            onPress();
          }
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {LeftIcon && <LeftIcon />}
          {LeftIcon && <View style={{ width: 10 }} />}
          <Text
            style={{
              fontSize: style && style.fontSize ? style.fontSize : 16,
              color: style && style.color ? style.color : "black",
              

            }}
          >
            {title ? title : "Click Me!"}
          </Text>
        </View>
        {title && RightIcon && <View style={{ width: 10 }} />}
        {RightIcon && <RightIcon />}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[
        {
         marginBottom:20,
          height: 45,
          borderRadius: 5,
          backgroundColor: "white",
          shadowOffset: { width: 1, height: 1 },
          shadowRadius: 5,
          shadowOpacity: 0.1,
          shadowColor: "black",
          elevation: 2,
          justifyContent: cart ? "space-between" : "center",
          alignItems: "center",
          flexDirection: "row",
        },
        style,
      ]}
      disabled={disabled}
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
    >
      {LeftIcon && <LeftIcon />}
      {LeftIcon && <View style={{ width: 10 }} />}
      <Text
        style={{
          fontSize: style && style.fontSize ? style.fontSize : 16,
          color: style && style.color ? style.color : "black",

        }}
      >
        {title ? title : "Click Me!"}
      </Text>
      {title && RightIcon && <View style={{ width: 10 }} />}
      {RightIcon && <RightIcon />}
    </TouchableOpacity>
  );
};
export default Button;
