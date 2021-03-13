import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity} from 'react-native';

import * as WebBrowser from 'expo-web-browser';


export default function LinksScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  return (

    <View style={styles.v_container}>
      <View style={styles.Logo}>
        <Image source={require('../assets/images/Logo5.png')} style={{width: 189, height: 90, }} />  
      </View>
      <View style={{flex: 1, flexDirection: 'column', flexWrap:1}}>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('../components/Dropdown') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard4.png')} style ={styles.IconStyle} />  
        <Button title="Head and Neck" style={styles.titleText}/>
        </TouchableOpacity>
        </View> 
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/pathpage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard2.png')} style ={styles.IconStyle} />  
        <Button title="Thorax" style={styles.titleText}/>
        </TouchableOpacity>
        </View> 
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://www.clinicalkey.com/#!/browse/book/3-s2.0-C20150000041') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard24.png')} style ={styles.IconStyle} />  
        <Button title="Abdomen and Pelvis" style={styles.titleText}/>
        </TouchableOpacity>
        </View> 
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://mediastream.brighton.ac.uk/Play/32410') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard6.png')} style ={styles.IconStyle} />  
        <Button title="Back and Limbs" style={styles.titleText}/>
        </TouchableOpacity>
        </View> 
       </View>
    </View>
 
  );
}



const styles = StyleSheet.create({

box: {
  width: 1024,
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
    marginTop: 40,
    width: (width /2)-10, 
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
    paddingTop: 30,
    backgroundColor: '#282828',
    justifyContent: 'center',
  },

  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#bcba40',
  },
});