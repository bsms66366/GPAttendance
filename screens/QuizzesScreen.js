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
      <View style={{flex: 1, flexDirection: 'row', flexWrap:'wrap'}}>
        
        <View style={styles.BoxBorder(height, width)}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/102/') }>
            <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style ={styles.IconStyle} /> 
            <Text style={styles.titleText}> Module 102 Quiz </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/Year1/') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard2.png')} style ={styles.IconStyle} /> 
          <Text style={styles.titleText}> Module 103 Quiz </Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/104/') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard3.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}> Module 104 Quiz </Text> 
    </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://www.bsms6636.brighton.domains/anatomyyear2/') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard4.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}> Module 202 Quiz </Text>
    </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/203/') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard5.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}> Module 203 Quiz </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/204/') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard6.png')} style ={styles.IconStyle} /> 
          <Text style={styles.titleText}> Module 204 Quiz </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  }),

v_container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#282828',
  },

  titleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    //fontWeight: 'bold',
    color:'#bcba40',
  },
});