import React, {useState, useContext, useEffect} from 'react';
import {Text, View, Button, ActivityIndicator, Alert, Image} from 'react-native';
import { initialState } from '../../reducer';
import NavigationWraper from '../../../../TwitterApp/app/components/NavigationWraper';
import { TouchableOpacity } from 'react-native-gesture-handler';
// to be deleted in final product
import * as api from '../../services/auth';

import { useAuth } from "../../provider";

export default function Home(props) {
    const {navigate} = props.navigation;

    // const {state, handleLogout} = useAuth();
    // const state =initialState;
    const state = {"isLoggedIn": true, "user": {"created_at": "2022-11-29T11:39:16.000000Z", 
    "editing_village_id": 1, "email": "ab2@ameyem.com", "email_verified_at": null, 
    "id": 2, "mobile": "8800197778", "name": "Arun ", "role_id": 1, "status": 1,
     "surname": "Nalamara", "updated_at": "2022-11-29T11:39:16.000000Z"}}
    const user = state.user;

    useEffect(() => {
        let load=async () => {

            let response = await api.login(state);
            // console.log('response in login',response)
            await handleLogin(response);
         
               console.log('State:',state);
               
       }
       load();
     }, []);

    return (
        <NavigationWraper
        navigation={props.navigation}
        selected={0}
        rightIcon={
          <TouchableOpacity style={{ padding: 5 }}>
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../../../../assets/topGear.png")}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        }
        title={
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              fontFamily: "HelveticaNeue-Bold"
            }}
          >
            {"Home"}
          </Text>
        }
      >
        {/* <ScrollView style={styles.container}>
          {homeFeed.map((i, n) => (
            <TouchableOpacity
              key={n.toString()}
              style={{
                borderColor: colors.exlight_gray,
                borderBottomWidth: StyleSheet.hairlineWidth
              }}
              onPress={() =>
                this.props.navigation.navigate("Tweet", { last: "Home" })
              }
            >
              <Tweet data={i} />
            </TouchableOpacity>
          ))}
        </ScrollView> */}
      </NavigationWraper>
    );
}