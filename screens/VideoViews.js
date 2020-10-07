import { StyleSheet, View, Text , Dimensions, Image} from "react-native";
import React, { Component } from "react";
import HeadNeckScreen from '../screens/HeadNeckScreen';
import ThoraxScreen from '../screens/ThoraxScreen';
import AbdoPelvisScreen from '../screens/AbdoPelvisScreen';
import BackLimbsScreen from '../screens/BackLimbsScreen';
import EmbryologyScreen from '../screens/EmbryologyScreen';
import IntroductionsScreen from '../screens/IntroductionsScreen';

var {height, width} = Dimensions.get('window');
  console.log (height, width)


// import all basic components
console.disableYellowBox = true;

import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "rn-viewpager-handy";
 



export default class ViewPagerPage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          //style={{ height: 1 }}
          indicator={this._renderDotIndicator()}>
        </IndicatorViewPager>

       
 
        <IndicatorViewPager
          style={{ flex: 1, paddingTop: 1, backgroundColor: "white" }}
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
            <Image source={require('../assets/images/interfaceIcons_Artboard29.png')} style={{width: 100, height: 130, marginTop:10}} />
            <ENTScreen/>
          </View>
          
          <View style={{ backgroundColor: "#282828", alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>THORAX</Text>
            <Image source={require('../assets/images/interfaceIcons_Artboard2.png')} style={{width: 100, height: 130, marginTop:10}} />
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
          

        </IndicatorViewPager>
      </View>
    );
  }
 
  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={["introductions","head and neck", "thorax", "abdomen and pelvis","back and limbs","embryology"]} />;
  }
 
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={6} />;
  }
 
  /* _renderTabIndicator() {
    let tabs = [
      {
        text: "head and neck",
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
    marginTop: 20,
    width: (width /3)-10, 
    height: '40%',
    borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});