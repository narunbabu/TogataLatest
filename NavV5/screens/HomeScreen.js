import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,
  ScrollView,TouchableOpacity,SafeAreaView, Alert } from 'react-native';
// import { TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Tweet from '../components/Tweet';
import { homeFeed } from '../model/mock';
import { width, colors} from '../utils/utils'
import TweetBubble from '../components/TweetBubble';
import FAB from '../components/Fab/Fab';
import TypeMessage from '../components/Message/TypeMessage';
// import TweetScreen from './TweetScreen';

// import {createStackNavigator} from 'react-navigation-stack';
const HomeScreen = ({navigation}) => {
  const displayAlert = () => {
    // Alert.alert("Welcome to GeeksforGeeks");
    navigation.navigate('TypeMessage');
    
};

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (

      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
         

      <ScrollView style={styles.scroll_container}>
      
          {homeFeed.map((i, n) => (
            <TouchableOpacity
              key={n.toString()}
              style={{
                borderColor: colors.exlight_gray,
                borderBottomWidth: StyleSheet.hairlineWidth
              }}
              onPress={() =>
                navigation.navigate("Tweet", { last: "Home",data:i })
              }
            >
              <Tweet data={i} />
            </TouchableOpacity>
          ))}
   
        

      
        </ScrollView>  
        <FAB onPress={displayAlert} title="New Tweet" />
        </SafeAreaView>
        



    );
};

export default HomeScreen;

// const HomeStack = createStackNavigator(
//   {
//     Home2: HomeScreen,
//     // UpdateProfile: UpdateProfileScreen,
//     // EnterCensus: EnterCensusScreen,
//     // SelectVillage: SelectVillageScreen,
//     Tweet: TweetScreen,
//     // EnterHouseHold: EnterHouseHoldScreen,
//     // AddHouse: AddHouseScreen,
//   },
//   {
//     initialRouteName: 'Home2',
//     defaultNavigationOptions: () => ({headerStyle, headerTitleStyle}),
//   },
// );
// export default HomeStack;
const styles = StyleSheet.create({
  scroll_container: {
    flex: 1,
    width: width,
    backgroundColor: colors.exexlight_gray,
    padding: 20
  },
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
