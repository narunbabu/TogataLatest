// This is full code for App.js
import React from 'react';
import { Button, View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import UnderConstruction from './UnderConstruction';
import Home from "../TwitterApp/app/screens/Home"
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'TabA') {
        iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
      } else if (route.name === 'TabB') {
        iconName = focused
        ? 'ios-list'
        : 'ios-list';
      }
        return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="TabA" component={TabAScreen} />
        <Tab.Screen name="TabB" component={TabBScreen} />
    </Tab.Navigator>
  );
}


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>No New Notifications!</Text>
      <Button 
      onPress={() => navigation.navigate('Home')}
      title="Go back home"
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();
function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}
function TabADetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Welcome to TabA page!
      </Text>
      <Button 
      onPress={() => navigation.navigate('TabA Details')}
      title="Go to TabA Details"
      />
    </View>
  );
}
function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        TabA Details here!
      </Text>
    </View>
  );
}
function TabBScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to TabB page!
      </Text>
    </View>
  ); 
  
}

const Drawer = createDrawerNavigator();

function StartScreen(props) {
    const {navigate} = props.navigation;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Starting point</Text>
      <Button 
      onPress={() => navigate('App')}
      title="HOME"
      />
    </View>
  );
}

function HomeStack() {
    return (
    <Drawer.Navigator showBorderTop="true" initialRouteName="HoMe">
        <Drawer.Screen name="HoMe" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        
    </Drawer.Navigator>
    );
  }
const AppStack = createSwitchNavigator(
    {
      Starting: StartScreen,
      App: HomeStack,
      Profile:UnderConstruction,
    },
    {initialRouteName: 'App'},
  );

const Navigator = createAppContainer(AppStack);


export default function TwitNav() {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}