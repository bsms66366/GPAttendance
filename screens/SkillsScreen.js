import React from 'react';
import { createSwitchNavigator, SafeAreaView } from 'react-navigation';
import { ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity, Props} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
//import SkillsScreen from '../screens/SkillsScreen';


export default function SkillsScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  SafeAreaView.setStatusBarHeight(0);

  return (

    <View style={styles.v_container}>
      {/*<View style={styles.Logo}>
        <Image source={require('../assets/images/Logo5.png')} style={{width: 189, height: 90, }} />  
      </View>*/}
      <View style={{flex: 1, flexDirection: 'column', flexWrap:0}}>

       {/* <View style={styles.BoxBorder(height, width)}>*/}
       <View style={{ alignItems: 'center'}}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://apps.powerapps.com/play/f6074d32-5a23-4ddc-aeb8-300c1481777b?tenantId=a900bb90-94fe-4658-8b34-dd72084c5064') }>
<Image source={require('../assets/images/fingerprint.png')} style={{width: 100, height: 130, marginTop: 80, }} />
<Text accessible={true} accessibilityLabel="Skills attendance" style={{ color: 'white', fontSize: 20, marginTop: 20, textAlign:"center"}}>Skills Sessions</Text>
</TouchableOpacity>
        </View> 
       </View>
    </View>
 
  );
}



const styles = StyleSheet.create({

box: { 
  //alignItems: 'center',
  width: 900,
  paddingTop: 80,
  paddingLeft: 50,
  //justifyContent: 'center',
},

/*Logo: {
    height: 80,
    alignItems: 'center',
},*/

/*IconStyle:{
    width: 200, 
    height:200,
    alignItems: 'center',
},*/

/*BoxBorder: (height, width) => ({
    marginTop: 10,
    width: (width /4)-40, 
    height: '50%',
    borderColor: '#bcba40',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  }),*/

v_container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#005E7E",
    //backgroundColor: '#282828',#203C89
  },

  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#bcba40',
  },
});
