import React, {useState, useContext, useEffect} from 'react';
import {Text, View, Button, ActivityIndicator, Alert} from 'react-native';
import { initialState } from '../../reducer';

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
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            <Text>{`Welcome ${user.surname} ${user.name}`}</Text>

            <Text>{` (${user.email})`}</Text>

            <Button title={"Update Profile"} onPress={() => navigate('UpdateProfile')}/>

            <Button title={"Census Entry"} onPress={() => navigate('EnterHouseDetails')}/>

            <Button title={"Log Out"} onPress={() => {
                handleLogout();
                navigate('Auth');
            }}/>
        </View>
    );
}