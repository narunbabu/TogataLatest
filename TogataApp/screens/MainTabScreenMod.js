import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text,  Image } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import TweetScreen from './TweetScreen';
import { Button } from 'react-native-paper';
import TypeMessage from '../components/Message/TypeMessage';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
            // <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
            // <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Ionicons name="aperture" color={color} size={26} />
            // <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50  }}
      source={require('../assets/logo_ch.png')}
    />
  );
}

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerShown: true,
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home1" component={HomeScreen} 
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerTitleAlign: 'center',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
          headerLeft: () => (
            <FontAwesome5 name="arrow-left" size={25} color="black" onPress={() => navigation.goBack()}/>
            
           )
        }}
        />
        <HomeStack.Screen name="Tweet" component={TweetScreen} options={{

            // headerTitle: (props) => <LogoTitle {...props} />,
            title:'Tweet',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
            headerLeft: () => (
              <FontAwesome5 name="arrow-left" size={25} color="black" onPress={() => navigation.goBack()}/>
              // <Ionicons.Button name="arrow-left" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}> </Ionicons.Button>
             )
        }} />

        <HomeStack.Screen name="TypeMessage" component={TypeMessage} options={{

        // headerTitle: (props) => <LogoTitle {...props} />,
        title:'Type Message',
         }} />


</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (          
          <Ionicons.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}> </Ionicons.Button>
        )
        }} />
</DetailsStack.Navigator>
);
  