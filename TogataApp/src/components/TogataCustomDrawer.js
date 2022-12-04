import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  rgbaColors,
  colors,
  profileWidth,
  width,
  drawerOptionList
} from "../utils/utils";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Avatar from '../../../TwitterApp/app/components/Avatar';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { green100 } from 'react-native-paper/lib/typescript/styles/colors';

const TogataCustomDrawer = props => {
  useEffect(()=>{
    console.log('in TogataCustomDrawer',props.profileName);
    console.log(JSON.stringify(props))
  },[props.profileName])
 

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        // contentContainerStyle={{backgroundColor: '#8200d6'}}
        >
          {/* <Image
            source={require('../assets/images/user-profile.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          /> */}
          <View
            style={{
              flex: 1,
              width: profileWidth,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
                <View
                style={[
                  styles.profileContainer,
                  { flexDirection: "row", justifyContent: "space-between" }
                ]}
                >
                      <View
                        style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
                      >
                          <Avatar size={50} />
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: "800",
                              color: colors.secondary
                            }}
                          >
                            {props.profileName}
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              color: colors.dark_gray,
                              marginVertical: 5
                            }}
                          >
                            {props.profileUserName}
                          </Text>
                           <View style={{ marginVertical: 10 }}>            
                              <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, fontWeight: "500" }}>{props.following+' '}</Text>
                                <Text
                                  style={{
                                    fontSize: 16,
                                    color: "#657786",
                                    fontWeight: "500",
                                    marginRight: 20
                                  }}
                                >
                                  {"Following"}
                                </Text>
                                <Text style={{ fontSize: 16, fontWeight: "500" }}>{props.followers+' '}</Text>
                                <Text style={{ fontSize: 16, color: "#657786" }}>
                                  {"Followers"}
                                </Text>
                              </View>   

                              <View style={{flexDirection: 'row', marginVertical: 5}}>
                              
                                <Text
                                  style={{

                                    color: color.secondary,
                                    fontFamily: 'Roboto-Regular',
                                    marginRight: 5,
                                  }}>
                                  280 Coins
                                </Text>
                                <FontAwesome5 name="coins" size={14} color={color.secondary} />
                              </View>               
                          </View>     
                      </View>

                      <View
                        style={{
                          alignItems: "flex-end",
                          justifyContent: "flex-start"
                        }}
                      >
                      
                          <TouchableOpacity >
                            <Image
                              style={{ height: 30, width: 30 }}
                              resizeMode={"contain"}
                              source={require("../assets/topMore.png")}
                            />
                          </TouchableOpacity>
                      </View>
                
                  </View>

                  <View
                    style={{
                      width: profileWidth,
                      height: StyleSheet.hairlineWidth,
                      backgroundColor:color.dark_gray
                      //   this.state.borderColor +
                      //   `${this.state.showBorderTop ? "1" : "0"})`
                    }}
                  />
            </View>
      </DrawerContentScrollView>
      </View>
    

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.white
  },
  profileContainer: {
    width: profileWidth-80,
    marginRight:45,
    paddingRight: 5,
    paddingVertical: 10
  },
  borderBottom: {
    borderBottomColor: colors.dark_gray,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
export default TogataCustomDrawer;
