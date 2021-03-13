import React from 'react';
import { createSwitchNavigator, SafeAreaView } from 'react-navigation';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import * as Font from 'expo-font';
//import ResourcesScreen from '../screens/ResourcesScreen';

export default function LinksScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  
  SafeAreaView.setStatusBarHeight(0);

  return (
    <View style={styles.v_container}>
      <View style={{flex: 1, flexDirection: 'row', flexWrap:'wrap'}}>
        
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/sessionpage.php') }>
            <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/interfaceIcons_Artboard8.png')} style ={styles.IconStyle} /> 
            <Text accessible={true} accessibilityLabel="Session Notes" style={styles.titleText}>Session Notes </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/pathpage.php') }>
          <Image accessible={true} accessibilityLabel="Icon Image" source={require('../assets/images/interfaceIcons_Artboard9.png')} style ={styles.IconStyle} />  
          <Text accessible={true} accessibilityLabel="Pathology Pots" style={styles.titleText}>Pathology Pots</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/360Tour/index.html') }>
          <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/interfaceIcons_Artboard28.png')} style ={styles.IconStyle} />  
          <Text accessible={true} accessibilityLabel="360 Lab Tour" style={styles.titleText}> 360 Lab Tour </Text>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://www.clinicalkey.com/#!/browse/book/3-s2.0-C20150000041') }>
          <Image accessible={true} accessibilityLabel="Icon Image" source={require('../assets/images/interfaceIcons_Artboard27.png')} style ={styles.IconStyle} />
          <Text accessible={true} accessibilityLabel="Text Books"style={styles.titleText}>  Text Books </Text>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://nearpod.com') }>
          <Image accessible={true} accessibilityLabel="Tap me!" source={require('../assets/images/interfaceIcons_Artboard12.png')} style ={styles.IconStyle} />  
          <Text accessible={true} accessibilityLabel="Presentations" style={styles.titleText}> Presentations </Text>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://universityofsussex.eu.qualtrics.com/jfe/form/SV_bfNMhdeog4HVbGR') }>
          <Image accessible={true} accessibilityLabel="Icon Image" source={require('../assets/images/interfaceIcons_Artboard19.png')} style ={styles.IconStyle} />  
          <Text accessible={true} accessibilityLabel="Feedback" style={styles.titleText}>  Feedback </Text>
    </TouchableOpacity>
        </View>
       </View>
    </View>
 
  );
}



const styles = StyleSheet.create({

box: {
  width: 900,
  paddingTop: 10,
  paddingLeft: 20,
  justifyContent: 'center',
  alignItems: 'center',
},

IconStyle:{
    width: wp('13%'), 
    height:hp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
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
   // fontWeight: 'bold',
    color:'#bcba40',
    justifyContent: 'center',
  },
});