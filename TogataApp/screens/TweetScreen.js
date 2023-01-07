import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView,ScrollView } from 'react-native';
import Tweet from '../components/Tweet';
import { homeFeed } from '../model/mock';
import { width, colors} from '../utils/utils';
import { useEffect } from 'react';
const TweetScreen = (props) => {
    // useEffect(()=>{
    //     console.log(props.route.params);

    // },[])
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

      <ScrollView style={styles.scroll_container}>
      <Tweet data={props.route.params.data} />
        <Button
          title="Click Here"
        //   onPress={() => alert('Button Clicked!')}
        onPress={() =>props.navigation.goBack()}
        />

      </ScrollView>
      </SafeAreaView>

    //   <View style={styles.container}>
        
    //   </View>
    );
};

export default TweetScreen;

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
  