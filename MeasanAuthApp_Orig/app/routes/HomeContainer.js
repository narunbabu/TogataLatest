import React, {useState, useContext} from 'react';
import {Text, View, Button, ActivityIndicator, Alert} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//IMPORT SCENES
import HomeScreen from '../scenes/home/Home';
import UpdateProfileScreen from '../scenes/home/UpdateProfile';
// import EnterCensusScreen from '../scenes/home/EnterCensus';
// import SelectVillageScreen from '../scenes/home/SelectVillage';
// import AddHouseScreen from '../scenes/home/AddHouse';

import {headerStyle, headerTitleStyle} from '../theme';
import EnterHouseDetailsScreen from '../scenes/home/EnterHouseDetails';
// import EnterHouseHoldScreen from '../scenes/home/EnterHouseHold';


// import { useAuth } from "../../provider";
const Drawer = createDrawerNavigator();

export default function Home() {
    // const {navigate} = props.navigation;

    // const {state, handleLogout} = useAuth();
    // const user = state.user;


    return (

        // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={UpdateProfileScreen} />
      </Drawer.Navigator>
    // </NavigationContainer>


        
    );
}