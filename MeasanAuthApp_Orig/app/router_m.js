// This is full code for App.js
import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import * as api from './services/auth';
const Tab = createBottomTabNavigator();

//IMPORT ROUTES
import AuthStack from './routes/auth';
// import HomeStack from "./routes/home";
import HomeStack from "./routes/home";

import AuthLoading from './scenes/auth/AuthLoading';
import AuthProvider from './provider';

import { initialState } from './reducer';
import { useAuth } from './provider';

function HomeScreen1() {
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
  const {navigation} = props;
  const {navigate} = navigation;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const {handleLogin} = useAuth();
  // async function onSubmit(state) {
  //   setLoading(true);

  //   try {
  //     let response = await api.login(state);
  //     await handleLogin(response);

  //     setLoading(false);

  //     //check if username is null
  //     let username = response.user.username !== null;
  //     console.log(response.user.username);
  //     if (username) navigate('App');
  //     else navigation.replace('Username');
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // }


    useEffect(async ()=>{
      setLoading(true);
      try {
        let response = await api.login(initialState);
        // await handleLogin(response);
  
        setLoading(false);
  
        //check if username is null
        // let username = response.user.username !== null;
        console.log(response.user.username);
        // if (username) navigate('App');
        
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },[])
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

// function HomeStack() {
//     return (
//     <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen1} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     );
//   }
const AppStack = createSwitchNavigator(
    {
    Starting: StartScreen,
    Auth: AuthStack,
      App: HomeStack
    },
    {initialRouteName: 'Starting'},
  );

const Navigator = createAppContainer(AppStack);


export default function AllApp() {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}