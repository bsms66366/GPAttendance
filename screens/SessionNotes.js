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
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/sessionpage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard8.png')} style ={styles.IconStyle} />  
        <Button title="Session Notes" style={styles.titleText}/>
        </TouchableOpacity>
        </View> 
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/pathpage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard9.png')} style ={styles.IconStyle} />  
        <Button title="Session Notes" style={styles.titleText}/>
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
    width: 300, 
    height:300,
    alignItems: 'center',
},

BoxBorder: (height, width) => ({
    marginTop: 10,
    width: (width /2)-40, 
    height: '60%',
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
  },

  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#bcba40',
  },
});