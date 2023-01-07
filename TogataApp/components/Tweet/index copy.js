import React,{useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Avatar from "../Avatar";

import { generateTwitterText, colors, width } from "../../utils/utils";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";


export default class Tweet extends React.Component {
  renderTopText(type, text) {
    text += type === "retweet" ? " retweet" : " response";

    return (
      <View
        style={{
          paddingLeft: 35,
          paddingBottom: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        {type === "retweet" ? (
          <MaterialCommunityIcons
            name={"checkbox-marked-circle-outline"}
            size={18}
            color={colors.dark_gray}
          />
        ) : (
          <MaterialCommunityIcons
            name={"message-reply"}
            size={14}
            color={colors.dark_gray}
          />
        )}
        <Text style={{ marginLeft: 10, color: colors.dark_gray }}>{text}</Text>
      </View>
    );
  }

  renderBottomIcons(name, text,setSomething) {
    let finalText = text === 0 ? null : text.toString();
    function onPress(){
      console.log('pressed ', name);
      // if (name==='comment-outline')
      // setSomething(true);
    }

    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
          
        }}
        onPress={onPress}
      >
        

      {name === "retweet" ? (
        
          <AntDesign name="retweet" size={18} color={colors.dark_gray} />
          // <Entypo name="retweet" size={24} color={colors.dark_gray}  />
        ) : (
          <MaterialCommunityIcons
          name={name}
          size={18}
          color={colors.dark_gray}
        />
        )}

        <Text style={{ marginLeft: 5, color: colors.dark_gray }}>
          {finalText}
        </Text>
      </TouchableOpacity>
    );
  }
  const [commentactive,setCommentactive]=useState(false);
  const [retweetactive,setRetweetactive]=useState(false);
  const [likeactive,setLikeactive]=useState(false);
  const [shareactive,setShareactive]=useState(false);
  render() {
    let {
      type,
      user,
      userName,
      avatar,
      time,
      message,
      comments,
      retweets,
      likes
    } = this.props.data;
    
    return (
      <View
        style={[
          { backgroundColor: "#FFF" },
          type
            ? {
                paddingVertical: 10,
                paddingHorizontal: 15
              }
            : { paddingBottom: 15 }
        ]}
      >

        {type === "retweet" && this.renderTopText(type, this.props.data.from)}
        {type === "responseTo" && this.renderTopText(type, user)}
        {type === "responseTo" && <Tweet data={this.props.data.original} />}
        <View style={{ flexDirection: "row" }}>
          <Avatar size={50} photo={avatar} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "500" }}>{user}</Text>
                <Text style={{ paddingLeft: 5, color: colors.dark_gray }}>
                  {userName}
                </Text>
                <View
                  style={{
                    backgroundColor: colors.dark_gray,
                    marginHorizontal: 4,
                    width: 1.5,
                    height: 1.5,
                    borderRadius: 3
                  }}
                />
                <Text style={{ color: colors.dark_gray }}>{time}</Text>
              </View>
              <SimpleLineIcons
                name={"arrow-down"}
                size={10}
                color={colors.dark_gray}
              />
            </View>
            <View style={{ flex: 1 }}>
              {generateTwitterText(
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    fontFamily: "HelveticaNeue"
                  }}
                >
                  {message}
                </Text>
              )}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80%",
                marginTop: 15
              }}
            >
              {this.renderBottomIcons("comment-outline", comments,setCommentactive)}
              {this.renderBottomIcons("retweet", retweets, setRetweetactive)}
              {this.renderBottomIcons("heart-outline", likes,setLikeactive)}
              {this.renderBottomIcons("share-outline", 0,setShareactive)}
            </View>
            {commentactive && <TextInput
            numberOfLines={4}
            editable
            maxLength={400}
            placeholder="Type your comment here"
          />}
          </View>
        </View>
      </View>
    );
  }
}
