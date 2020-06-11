import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity, Props } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import ModulesScreen from '../screens/ModulesScreen';


 function CoursesScreen({navigation, props}) {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)

  //const AppContainer = createAppContainer(AppNavigator);
  return (

    <View style={styles.v_container}>
      <View style={styles.Logo}>
        <Image source={require('../assets/images/Logo5.png')} style={{width: 189, height: 90, }} />  
      </View>
      <View style={{flex: 1, flexDirection: 'row', flexWrap:1}}>
      
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity>
          {/*<TouchableOpacity onPress = {() => _this.props.navigation({navigate})('ModulesScreen') }>*/}
            <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style ={styles.IconStyle} /> 
                <Button title="Phase 1" style={styles.titleText}/>
          </TouchableOpacity>
        </View>

        
        
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/papage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard7.png')} style ={styles.IconStyle} />  
          <Button title="PA Course" style={styles.titleText}/>
           </TouchableOpacity>
          </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/papage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard23.png')} style ={styles.IconStyle} />
            <Button title="Pharmacy" style={styles.titleText}/>
        </TouchableOpacity>
        </View>


         <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/postGrad.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard22.png')} style ={styles.IconStyle} />
            <Button title="neuroscience" style={styles.titleText}/>
        </TouchableOpacity>
        </View>

         <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ksseducation.hee.nhs.uk/') }>
          <Image source={require('../assets/images/nhs.png')} style ={styles.IconStyle} />
            <Button title="HEE KSS - Anatomy Revision" style={styles.titleText}/>
        </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/postGrad.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard22.png')} style ={styles.IconStyle} />
            <Button title="MSC Radiology" style={styles.titleText}/>
        </TouchableOpacity>
        </View>

      <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/postGrad.php') }>
          <Image source={require('../assets/images/UoB3.png')} style ={styles.IconStyle} />
            <Button title="All Health Professions" style={styles.titleText}/>
        </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/postGrad.php') }>
          <Image source={require('../assets/images/UoB3.png')} style ={styles.IconStyle} />
            <Button title="Physiotherapy" style={styles.titleText}/>
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
    justifyContent: 'center',
},

BoxBorder: (height, width) => ({
    marginTop: 40,
    width: (width /4)-14, 
    height: '40%',
    borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 9,
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
export default CoursesScreen;