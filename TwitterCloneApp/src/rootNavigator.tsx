import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import { StackNavigator } from './stack';
import { DrawerContent } from './drawerContent';
import { View,Text } from 'react-native';

const Drawer = createDrawerNavigator();
export const  TabBScreen=()=> {
  return     (<Text>Welcome to TabB page!</Text>);
  
};

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (

    <NavigationContainer theme={navigationTheme}>
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}> */}
      <Drawer.Navigator>
        <Drawer.Screen name="Home1" component={StackNavigator} />
        <Drawer.Screen name="Home" component={TabBScreen} />
        <Drawer.Screen name="Out" component={TabBScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
