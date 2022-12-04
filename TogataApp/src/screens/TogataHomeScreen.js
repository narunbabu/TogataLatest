import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import Feather from 'react-native-vector-icons/Feather';
import { Feather } from '@expo/vector-icons';

import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';

import {freeGames, paidGames, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import Avatar from '../../../TwitterApp/app/components/Avatar';
// import FancyBottomTab from '../components/TogataBottomTab';
import FancyBottomTab from '../components/TogataBottomTabs';
export default function HomeScreen({ navigation }) {

  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            {/* <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />             */}
            <Avatar size={35} />
          </TouchableOpacity>

          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Arun Nalamara
          </Text>
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View> */}





        {/* <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View> */}

        <FancyBottomTab navigation={navigation}/>

      </ScrollView>
      
    </SafeAreaView>
  );
}
