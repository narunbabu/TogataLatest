import React from 'react';
import { Text,View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainDrawer from './src/MainDrawer';
// import BottomTabs from './src/components/TogataBottomTabs';
function TogataApp(props) {

  return (

  
    
    <NavigationContainer>
      <MainDrawer 
      navigation={props.navigation}
      profileName={"Arun Nalamara"}
        profileUserName={"@nalamara"}
        following={34}
        followers={45}
        
        />
        {/* <BottomTabs/> */}
    </NavigationContainer>

  );
}

export default TogataApp;
