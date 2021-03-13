import { StyleSheet, View, Text, Image } from "react-native";
import { Dimensions } from "react-native";
import React, { Component } from "react";
import * as Font from 'expo-font';
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HeadNeckScreen from '../screens/HeadNeckScreen';
import ENTScreen from '../screens/ENTScreen';
import ThoraxScreen from '../screens/ThoraxScreen';
import AbdoPelvisScreen from '../screens/AbdoPelvisScreen';
import BackLimbsScreen from '../screens/BackLimbsScreen';
import EmbryologyScreen from '../screens/EmbryologyScreen';
import IntroductionsScreen from '../screens/IntroductionsScreen';
import Video360Screen from '../screens/Video360Screen';


var {height, width} = Dimensions.get('window');
  console.log (height, width)


// import all basic components
//console.disableYellowBox = true;

import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "react-native-best-viewpager";
 



export default class ViewPagerPage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{ height: 1 }}
          indicator={this._renderDotIndicator()}>
        </IndicatorViewPager>

       
 
        <IndicatorViewPager
          style={{ flex: 1, paddingTop: 1, backgroundColor: "#282828" }}
          indicator={this._renderDotIndicator()}
        >
        <View style={{ backgroundColor: "#282828", alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>INTRODUCTION TO...</Text>
            <Image source={require('../assets/images/interfaceIcons_Artboard25.png')} style={{width: 100, height: 130, marginTop:10}} />
            <IntroductionsScreen/>
          </View>
          <View style={{ backgroundColor: "#282828", alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>HEAD AND NECK</Text>
            <Image source={require('../assets/images/interfaceIcons_Artboard4.png')} style={{width: 100, height: 130, marginTop:10}} />
            <HeadNeckScreen/>
          </View>
          <View style={{ backgroundColor: "#282828", alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>EAR NOSE AND THROAT</Text>
            <Image source={require('../assets/images/interfaceIcons_Artboard29.png')} style={{width: 140, height: 140, marginTop:10}} />
            <ENTScreen/>
          </View>
          
          <View style={{ backgroundColor: "#282828", alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>THORAX</Text>
            <Image source={require('../assets/images/interfaceIcons_Artboard2.png')} style={{width: 160, height: 130, marginTop:10}} />
            <ThoraxScreen/>
          </View>
          <View style={{ backgroundColor: "#282828", alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>ABDOMEN AND PELVIS</Text>
            <Image source={require('../assets/images/interfaceIcons_Artboard24.png')} style={{width: 100, height: 130, marginTop:10}} />
            <AbdoPelvisScreen/>
          </View>
          <View style={{ backgroundColor: "#282828", alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>BACK AND LIMBS</Text>
            <Image source={require('../assets/images/interfaceIcons_Artboard6.png')} style={{width: 100, height: 130, marginTop:10}} />
            <BackLimbsScreen/>
          </View>
          <View style={{ backgroundColor: "#282828", alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>EMBRYOLOGY</Text>
            <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style={{width: 100, height: 130, marginTop:10}} />
            <EmbryologyScreen/>
          </View>
          <View style={{ backgroundColor: "#282828", alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>360 VIDEO</Text>
            <Image source={require('../assets/images/interfaceIcons_Artboard28.png')} style={{width: 100, height: 130, marginTop:10}} />
            <Video360Screen/>
          </View>

        </IndicatorViewPager>
      </View>
    );
  }
 
  /*_renderTitleIndicator() {
    return <PagerTitleIndicator titles={["introductions","head and neck", "ear, nose and throat", "thorax", "abdomen and pelvis","back and limbs","embryology"]} />;
  }*/
 
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={8} />;
  }
 
  /* _renderTabIndicator() {
    let tabs = [
      {
        text: "head and neck",
      },
      {
        text: "ear, nose and throat",
      },
      {
        text: "thorax",
      },
      {
        text: "abdomen and pelvis",
      },
      {
        text: "back and limbs",
      },
      {
        text: "embryology",
      }
    ];
    return <PagerTabIndicator tabs={tabs} />;
  } */
}
const styles = StyleSheet.create({
  BoxBorder: (height, width) => ({
    marginTop: 20 * vw,
    width: (width /3)-10 * vw, 
    height: '40%' * vh,
    borderColor: '#bcba40' * vw,
    borderStyle:'dotted' * vw,
    borderRadius: 8 * vw,
    borderWidth: 1 * vw,
    marginHorizontal: 5 * vw,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});