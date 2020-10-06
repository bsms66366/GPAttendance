import React from 'react';
import * as Font from 'expo-font';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export default function LinksScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  return (

    <View style={styles.v_container}>
     {/*  <View style={styles.Logo}>
        <Image source={require('../assets/images/Logo5.png')} style={{width: 189, height: 90, }} />  
      </View> */}
      <View style={{flex: 1, flexDirection: 'column', flexWrap:'wrap'}}>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/sessionpage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard8.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}> Session Notes </Text> 
        </TouchableOpacity>
        </View> 
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/pathpage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard9.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}>  Path Pots </Text>  
        </TouchableOpacity>
        </View> 
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://www.clinicalkey.com/#!/browse/book/3-s2.0-C20150000041') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard27.png')} style ={styles.IconStyle} />  
          <Text style={styles.titleText}> Text books </Text> 
        </TouchableOpacity>
        </View> 
       <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://nearpod.com') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard12.png')} style ={styles.IconStyle} /> 
          <Text style={styles.titleText}> Presentations </Text>  
        </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/360Tour/index.html') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard28.png')} style ={styles.IconStyle} /> 
          <Text style={styles.titleText}> 360 Lab Tour </Text> 
        </TouchableOpacity>
        </View> 
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://universityofsussex.eu.qualtrics.com/jfe/form/SV_bfNMhdeog4HVbGR') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard19.png')} style ={styles.IconStyle} /> 
          <Text style={styles.titleText}> Feedback </Text>
        </TouchableOpacity>
        </View> 
       </View>
    </View>
 
  );
}



const styles = StyleSheet.create({

box: {
  width: 900,
  paddingTop: 80,
  paddingRight: 20,
  justifyContent: 'center',
},

Logo: {
    height: 80,
    alignItems: 'center',
},

IconStyle:{
    width: 120, 
    height:120,
    alignItems: 'center',
},

BoxBorder: (height, width) => ({
    marginTop: 30,
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

v_container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#282828',
    justifyContent: 'center',
  },

  titleText: {
    fontFamily: 'Helvetica',
    //fontFamily: 'Arial',
    fontSize: 20,
    //fontWeight: 'bold',
    color:'#bcba40',
  }, 
});
//export default ResourcesScreen;