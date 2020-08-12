import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, Dimensions } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
//import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import HeadNeckScreen from '../screens/HeadNeckScreen';
import ThoraxScreen from '../screens/ThoraxScreen';
import AbdoPelvisScreen from '../screens/AbdoPelvisScreen';
import BackLimbsScreen from '../screens/BackLimbsScreen';
import EmbryologyScreen from '../screens/EmbryologyScreen'
//import VideoScreen from '../screens/VideoViews'

var {height, width} = Dimensions.get('window');
  console.log (height, width)


// import all basic components
console.disableYellowBox = true;

import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from 'rn-viewpager';
//import PagerTabIndicator , IndicatorViewPager , PagerTitleIndicator , PagerDotIndicator


 export default class App extends Component {

  scanFingerPrint = async () => {
    try {
      let results = await LocalAuthentication.authenticateAsync();
      if (results.success) {
       let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('Permission to access location was denied'
      );
    }

    let location = await Location.getCurrentPositionAsync({});
    alert (JSON.stringify(location));
        WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx'),alert('Now login to your Eportfolio!');
      } else {
        this.setState({
          failedCount: this.state.failedCount + 1,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
 
  render() {
    return (

      <View style={{ flex: 1, marginTop: 0 }}>
        {/*Example of Dot Indicator*/}
        <IndicatorViewPager
          style={{ height: 655 }}
          indicator={this._renderDotIndicator()}>
          {/*_renderDotIndicator() will return the PagerDotIndicator*/}
          <View
            style={{
              backgroundColor: '#282828',
              flex: 1,
              //justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 10}}>HEAD AND NECK</Text>
            <View style={styles.BoxBorder(height, width)}>
            <Image source={require('../assets/images/interfaceIcons_Artboard4.png')} style={{width: 100, height: 130, }} />
          </View>
          <HeadNeckScreen/>
          </View>
          
          <View
            style={{
              backgroundColor: '#282828',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 10 }}>THORAX</Text>
            <View style={styles.BoxBorder(height, width)}>
            <Image source={require('../assets/images/interfaceIcons_Artboard2.png')} style={{width: 100, height: 130, }} />
          </View>
          <ThoraxScreen/>
          </View>

          <View
            style={{
              backgroundColor: '#282828',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 10}}>ABDOMEN AND PELVIS</Text>
            <View style={styles.BoxBorder(height, width)}>
            <Image source={require('../assets/images/interfaceIcons_Artboard24.png')} style={{width: 100, height: 130, }} />
          </View>
          <AbdoPelvisScreen/>
          </View>

          <View
            style={{
              backgroundColor: '#282828',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 10, marginLeft: 30 }}>BACK AND LIMBS</Text>
            <View style={styles.BoxBorder(height, width)}>
            <Image source={require('../assets/images/interfaceIcons_Artboard6.png')} style={{width: 100, height: 130, }} />
          </View> 
          <BackLimbsScreen/>
          </View>
          <View
            style={{
              backgroundColor: '#282828',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 10}}>EMBRYOLOGY</Text>
            <View style={styles.BoxBorder(height, width)}>
            <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style={{width: 100, height: 130, }} />
          </View>
          <EmbryologyScreen/>
          </View>
            
          
        </IndicatorViewPager>
        </View>
);
  }
 
    


  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={5} />;
  }
  _renderTabIndicator() {
    let tabs = [
      {
        text: 'One',
      },
      {
        text: 'Two',
      },
      {
        text: 'Three',
      },
      {
        text: 'Four',
      },
      {
        text: 'Five',
      },
    ];
    return <PagerTabIndicator tabs={tabs} />;
  }
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