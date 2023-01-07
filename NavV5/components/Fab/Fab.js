import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { View, Image } from "react-native";


import { width, height, colors} from "../../utils/utils";
const FAB = (props) => {
    return (
        <Pressable style={styles.container}
            onPress={props.onPress}>
            {/* <Text style={styles.title}>{props.title}</Text> */}
            <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {props.title==='New Tweet' ? (
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../../assets/tweet.png")}
            />
          ) : (
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../../assets/message.png")}
            />
          )}
        </View>
        </Pressable>
    );
};
  
export default FAB;
  
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: 10,
        position: "absolute",
        bottom: 40,
        right: 40,
        // backgroundColor: "#26653A",
        // paddingHorizontal: 20,
        // paddingVertical: 10,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});