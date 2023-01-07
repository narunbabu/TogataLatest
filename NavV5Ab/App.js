/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import MainTabScreen from './screens/MainTabScreen';

const Drawer = createDrawerNavigator();


const N5App = () => {
  
  useEffect(() => {
    // setTimeout(async() => {
    //   // setIsLoading(false);
    //   let userToken;
    //   userToken = null;
    //   try {
    //     userToken = await AsyncStorage.getItem('userToken');
    //   } catch(e) {
        console.log("hi");
    //   }
    //   // console.log('user token: ', userToken);
    //   dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    // }, 1000);
  }, []);

  return (

    <NavigationContainer>
        <Drawer.Navigator>
        {/* <Drawer.Navigator  screenOptions={{ headerShown: false,}}> */}
          {/* <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Details" component={DetailsScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> */}


          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          {/* <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> */}
        </Drawer.Navigator>

    </NavigationContainer>

  );
}

export default N5App;
