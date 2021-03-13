import React from 'react';
import { createSwitchNavigator, SafeAreaView } from 'react-navigation';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
export default function LinksScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)

  SafeAreaView.setStatusBarHeight(0);

  return (
    <View style={styles.v_container}>
      <View style={{flex: 1, flexDirection: 'row', flexWrap:'wrap'}}>
        
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/102/') }>
            <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/interfaceIcons_Artboard1.png')} style ={styles.IconStyle} /> 
            <Text accessible={true} accessibilityLabel="Module 102 Quiz"style={styles.titleText}>Module 102 Quiz </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/Year1/') }>
          <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/interfaceIcons_Artboard2.png')} style ={styles.IconStyle} /> 
          <Text accessible={true} accessibilityLabel="Module 103 Quiz" style={styles.titleText}>Module 103 Quiz </Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/104/') }>
          <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/interfaceIcons_Artboard3.png')} style ={styles.IconStyle} />
          <Text accessible={true} accessibilityLabel="Module 104 Quiz" style={styles.titleText}>Module 104 Quiz </Text> 
    </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}accessible={true} accessibilityLabel="Tap me!">
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://www.bsms6636.brighton.domains/anatomyyear2/') }>
          <Image accessible={true} accessibilityLabel="Icon Image" source={require('../assets/images/interfaceIcons_Artboard4.png')} style ={styles.IconStyle} />
          <Text accessible={true} accessibilityLabel="Module 202 Quiz" style={styles.titleText}>Module 202 Quiz </Text>
    </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/203/') }>
          <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/interfaceIcons_Artboard5.png')} style ={styles.IconStyle} />
          <Text accessible={true} accessibilityLabel="Module 203 Quiz"style={styles.titleText}>Module 203 Quiz </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/204/') }>
          <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/interfaceIcons_Artboard6.png')} style ={styles.IconStyle} /> 
          <Text accessible={true} accessibilityLabel="Module 204 Quiz" style={styles.titleText}>Module 204 Quiz </Text>
        </TouchableOpacity>
        </View>
       </View>
    </View>
 
  );
}



const styles = StyleSheet.create({

box: {
  width: 900,
  paddingTop: 20,
  paddingLeft: 20,
  justifyContent: 'center',
},

IconStyle:{
    width: wp('13%'), 
    height:hp('20%'),
    //paddingLeft: 5,
    //alignItems: 'center',
    //justifyContent: 'center',
},

BoxBorder: (height, width) => ({
    marginTop: 25,
    width: (width /3)-10, 
    height: '40%',
    borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 5,
    paddingLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }),

v_container: {
    flex: 1,
    //paddingTop: 30,
    backgroundColor: '#282828',
  },

  titleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFPercentage(2),
    //fontWeight: 'bold',
    color:'#bcba40',
    justifyContent: 'center',
  },
});