import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

const DropDownMenu = ({ title, DATA, Icon, style, menuStyle, LeftIcon }) => {
  const [Press, setPress] = React.useState(false);
  const [Data, setData] = React.useState([]);
  React.useEffect(() => {
    if (Array.isArray(DATA)) {
      setData(DATA);
    }
  }, [DATA]);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setPress(!Press);
        }}
        style={[
          {
            width: width - 40,
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 5,
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          },
          style,
        ]}
      >
        {LeftIcon && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {LeftIcon && <LeftIcon />}
            <Text
              style={{
                fontSize: style && style.fontSize ? style.fontSize : 16,

                color: style && style.color ? style.color : "black",
              }}
            >
              {title ? title : "Press me!"}
            </Text>
          </View>
        )}
        {!LeftIcon && (
          <Text
            style={{
              fontSize: style && style.fontSize ? style.fontSize : 16,
              
              color: style && style.color ? style.color : "black",
            }}
          >
            {title ? title : "Press me!"}
          </Text>
        )}
        {Icon ? <Icon /> : null }
      </TouchableOpacity>
      {Press && (
        <Animated.View
          style={{
            marginHorizontal: 30,
          }}
          entering={FadeIn}
        >
          {Data &&
            Data.map((doc, i) => (
              <View
                key={i}
                style={[
                  {
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                  },
                  menuStyle,
                ]}
              >
                <Text
                  style={{
                    fontSize:
                      menuStyle && menuStyle.fontSize ? menuStyle.fontSize : 16,
                    
                    color:
                      menuStyle && menuStyle.color ? menuStyle.color : "black",
                  }}
                >
                  {doc}
                </Text>
              </View>
            ))}
        </Animated.View>
      )}
    </View>
  );
};
export default DropDownMenu;
