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
      <View style={{flex: 1, flexDirection: 'row', flexWrap:1}}>
        
        <View style={styles.BoxBorder(height, width)}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/announcement?method=search&context=course&course_id=_114493_1&handle=cp_announcements&mode=cpview') }>
            <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style ={styles.IconStyle} /> 
              <Button title="Module 102" style={styles.titleText} onPress={() => {
            WebBrowser.openBrowserAsync('https://expo.io')}}/>
          </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/announcement?method=search&context=course_entry&course_id=_114487_1&handle=announcements_entry&mode=view') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard2.png')} style ={styles.IconStyle} />  
        <Button title="Module 103" style={styles.titleText} onPress={() => {
          WebBrowser.openBrowserAsync('https://expo.io')}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/announcement?method=search&context=course&course_id=_114488_1&handle=cp_announcements&mode=cpview') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard3.png')} style ={styles.IconStyle} />  
        <Button title="Module 104" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/sessionpage.php')}}/>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/announcement?method=search&context=course&course_id=_114491_1&handle=cp_announcements&mode=cpview') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard4.png')} style ={styles.IconStyle} />
          <Button title="Module 202" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/announcement?method=search&context=course&course_id=_114491_1&handle=cp_announcements&mode=cpview')}}/>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/announcement?method=search&context=course&course_id=_114492_1&handle=cp_announcements&mode=cpview') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard5.png')} style ={styles.IconStyle} />  
        <Button title="Module 203" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/announcement?method=search&context=course&course_id=_114492_1&handle=cp_announcements&mode=cpview')}}/>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/announcement?method=search&context=course&course_id=_114493_1&handle=cp_announcements&mode=cpview') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard6.png')} style ={styles.IconStyle} />  
        <Button title="Module 204" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/announcement?method=search&context=course&course_id=_114493_1&handle=cp_announcements&mode=cpview')}}/>
    </TouchableOpacity>
        </View>
       
      
        
      
       </View>
    </View>
 
  );
}



const styles = StyleSheet.create({

box: {
  width: 900,
  paddingTop: 50,
  paddingLeft: 20,
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
    width: (width /3)-30, 
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
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#bcba40',
  },
});