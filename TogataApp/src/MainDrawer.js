import * as React from 'react';

import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TogataCustomDrawer from './components/TogataCustomDrawer';
// import TogataCustomDrawer from './components/TogataCustomDrawer_Alt';
import FancyBottomTab from './components/TogataBottomTabs';
import HomeScreen from './screens/TogataHomeScreen';
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <FancyBottomTab navigation={navigation}/>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MainDrawer(props) {
    const [myprops, setProps] = React.useState(null);

    React.useEffect(()=>{
        console.log('in main drwaer',JSON.stringify(props));
        
        setProps(props);
      },[])    
  

      return ( myprops && <Drawer.Navigator 
      drawerContent={props => <TogataCustomDrawer {...myprops} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
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
      </Drawer.Navigator>);
    
    
    
  
}