import * as React from 'react';
import { View, Button,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
function mHomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is Home screen</Text>
        <Button
          onPress={() => navigation.navigate('Pan')}
          title="Go to Pan"
        />
        <Button
          onPress={() => navigation.navigate('Drawer')}
          title="Go to Drawer"
        />
      </View>
    );
  }
function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function ProfileScreen() {
  return <View>
  <Text>Profile1 screen</Text>
  </View>;
}
function UserScreen() {
    return <View>
        <Text>User screen</Text>
        </View>;
  }

function SettingsScreen() {
  return <View />;
}

const FeedStack = createNativeStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="FeedEnd" component={FeedScreen} />
      {/* other screens */}
    </FeedStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      
      <ProfileStack.Screen name="User" component={UserScreen} />
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      {/* other screens */}
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="My Home" component={HomeScreen} />
        <Tab.Screen name="FeedStack" component={FeedStackScreen} />
        <Tab.Screen name="ProfileStack" screenOptions={{ headerShown: false }} component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

function PanTabs() {
    return (
      <Tab.Navigator>
          <Tab.Screen name="My Home" component={HomeScreen} />
          <Tab.Screen name="FeedStack" component={FeedStackScreen} />

      </Tab.Navigator>
    );
  }

  const Drawer = createDrawerNavigator();

function DrawerTabs() {
  return (
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
      
    
  );
}

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeTabs}
          screenOptions={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Pan"
          component={PanTabs}
          screenOptions={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Drawer"
          component={DrawerTabs}
          screenOptions={{ headerShown: false }}
        />
        <RootStack.Screen name="Settings" component={SettingsScreen} />
        <RootStack.Screen name="MProfile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
