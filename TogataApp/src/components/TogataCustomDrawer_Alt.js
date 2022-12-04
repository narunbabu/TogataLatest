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
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  rgbaColors,
  colors,
  profileWidth,
  width,
  drawerOptionList
} from "../utils/utils";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Avatar from '../../../TwitterApp/app/components/Avatar';



// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const TogataCustomDrawer = props => {
  useEffect(()=>{
    console.log('in TogataCustomDrawer',props.profileName);
    console.log(props)
  },[props.profileName])
 
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}
        >
          
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
                                  {false ? (
                                    props.profileExtra
                                  ) : (
                                    <Text style={{ fontSize: 16, color: colors.dark_gray }}>
                                      {props.profileExtra}
                                    </Text>
                                  )}
                                </View>
                        </View>
                      <View
                        style={{
                          alignItems: "flex-end",
                          justifyContent: "flex-start"
                        }}
                      >
                        <TouchableOpacity>
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
            // backgroundColor:
            //   this.state.borderColor +
            //   `${this.state.showBorderTop ? "1" : "0"})`
          }}
        />

            {/* <ScrollView
              style={{
                flex: 1
              }}
              // onScroll={this._showBorders}
              scrollEventThrottle={16}
            >
              {this.state.list.map((item, index) => (
                <DrawerItem
                  key={index.toString()}
                  data={item}
                  changeScreen={props.changeScreen}
                />
              ))}
            </ScrollView> */}

            <View
              style={{
                width: profileWidth,
                height: StyleSheet.hairlineWidth,
                // backgroundColor:
                //   this.state.borderColor +
                //   `${this.state.showBoderBottom ? "1" : "0"})`
              }}
            />

              <View
                style={[
                  styles.profileContainer,
                  { flexDirection: "row", justifyContent: "space-between" }
                ]}
              >
                 <TouchableOpacity>
                  <Feather name={"moon"} color={colors.primary} size={22} />
                </TouchableOpacity> 

                 <TouchableOpacity>
                  <FontAwesome5 name={"qrcode"} color={colors.primary} size={22} />
                </TouchableOpacity> 
              </View> 
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
    width: profileWidth,
    paddingRight: 15,
    paddingLeft: 25,
    paddingVertical: 10
  },
  borderBottom: {
    borderBottomColor: colors.dark_gray,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default TogataCustomDrawer;
