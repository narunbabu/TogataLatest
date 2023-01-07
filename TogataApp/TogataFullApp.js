// This is full code for App.js
import React from 'react';
import { Button, View, Text,AsyncStorage,StyleSheet } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import UnderConstruction from '../drawer_app/UnderConstruction/index';
// import Home from "../TwitterApp/app/screens/Home";
import TogataCustomDrawer from './src/components/TogataCustomDrawer';




// function StartScreen(props) {
//   const {navigate} = props.navigation;
// return (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//     <Text>Starting point</Text>
//     <Button 
//     onPress={() => navigate('App')}
//     title="HOME"
//     />
//   </View>
// );
// }
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

const Tab = createBottomTabNavigator();
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

function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}
function TabBScreen(props) {

    async function onSubmit() {
        await AsyncStorage.clear();
        console.log(props.navigation);
        // props.navigation.navigate('Home', {
        //          screen: 'TabA'});
        // props.navigation.navigate('Other');
        props.navigation.navigate('Auth');
        
        // props.navigation.navigate('Auth', {
        //     screen: 'SignIn'});
      }

//    const _signOutAsync = async () => {
//         await AsyncStorage.clear();
//         props.navigation.navigate('Auth');
//       };
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to TabB page!
        <View style={styles.container}>
        
        <Button title="Actually, sign me out :)" onPress={onSubmit} />
      </View>
      </Text>
    </View>
  ); 
  
}
export function HomeScreen() {
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

const Drawer = createDrawerNavigator();
export function HomeStack(props) {
  const myprops={navigation:props.navigation,
  profileName:"Arun Nalamara",
    profileUserName:"@nalamara",
    following:34,
    followers:45}

  // const [myprops, setProps] = React.useState(null);

    React.useEffect(()=>{
        console.log('in HomeStack',JSON.stringify(props));
        
        // setProps(props);
      },[])    
  
    return (
      <Drawer.Navigator 
            drawerContent={props => <TogataCustomDrawer {...myprops} />}
            initialRouteName="Home"
            screenOptions={{
              headerShown: true,
              drawerActiveBackgroundColor: '#aa18ea',
              drawerActiveTintColor: '#fff',
              drawerInactiveTintColor: '#333',
              drawerLabelStyle: {
                marginLeft: -25,
                fontFamily: 'Roboto-Medium',
                fontSize: 15,
              },}}      
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    );
  }

  
// const MStack = createSwitchNavigator();
// const AppStackAlt = () => {
//   // const HomeScreen = ({navigation, route}) => {
//   // const {userdata} = route.params;
//   useEffect(() => {
//     console.log('GameWelcomescreen  in AppStackAlt...');
//     // deleteTable(db, {Score: score});
//     // createSingleTable(db, score, 'Score');
//   }, []);

//   // const operation = {
//   //   ...operations[0],
//   //   operation_id: operations[0].id,
//   //   mistypes: 0,
//   //   time_taken: 0,
//   //   score: 0,
//   //   passed: 0,
//   //   num_problems_done: 0,
//   // };

//   return (
//     <>
//       {/* <NavigationContainer> */}
//       <MStack.Navigator
//         initialRouteName="App"
//         screenOptions={{
//           headerShown: false,
//         }}>

//         <MStack.Screen
//           name="App"
//           component={HomeStack}
//           options={{title: 'Progress of Children'}}
//           // initialParams={{operations: operations, level: 0}}
//         />

//         <MStack.Screen
//           name="Profile"
//           component={UnderConstruction}
//           options={{title: 'Tiles'}}
//           // initialParams={{operation: operation, level: 0}}
//         />
//       </MStack.Navigator>
//     </>
//   );
// };

const AppStack = createSwitchNavigator(
    {
      // Starting: StartScreen,
      App: {
        screen: HomeStack,
        params: {
          icon: 'home',
          tabName: 'Home',
        },
      },
      Profile:UnderConstruction,
    }
    // ,
    // {initialRouteName: 'App'},
  );

const Navigator = createAppContainer(AppStack);


export default function TogataFullApp() {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });