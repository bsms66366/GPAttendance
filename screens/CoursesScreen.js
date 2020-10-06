import React from 'react';
import * as Font from 'expo-font';
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
     {/*  <View style={styles.Logo}>
        <Image source={require('../assets/images/Logo5.png')} style={{width: 189, height: 90, }} />  
      </View> */}
      <View style={{flex: 1, flexDirection: 'row', flexWrap:'wrap'}}>
      
        <View style={styles.BoxBorder(height, width)}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/content/contentWrapper.jsp?course_id=_112236_1&displayName=BMBS%3A+My+Course+Link&href=https%3A%2F%2Fstudentcentral.brighton.ac.uk%2Fwebapps%2Fblackboard%2Fexecute%2Fmodulepage%2Fview%3Fcourse_id%3D_78820_1%26cmp_tab_id%3D_172171_1%26editMode%3Dtrue%26mode%3Dcpview&cR2XilcGYOo=ac%2BrgtYErOV9oLSydnevJ5VL2elf91GRX1703bwlW5I%3D') }>
            <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style ={styles.IconStyle} /> 
                <Text style={styles.titleText}>   Phase 1</Text>
          </TouchableOpacity>
        </View>

        
        
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/papage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard7.png')} style ={styles.IconStyle} />  
          <Text style={styles.titleText}> PA Course </Text>
           </TouchableOpacity>
          </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/Pharmacy.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard23.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}>  Pharmacy </Text>
        </TouchableOpacity>
        </View>


         <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/neuroscience.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard22.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}> Neuroscience </Text>
        </TouchableOpacity>
        </View>

         <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ksseducation.hee.nhs.uk/') }>
          <Image source={require('../assets/images/nhs.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}>       HEE KSS</Text>
          <Text style={styles.titleText}> Anatomy Revision </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/postGrad.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard22.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}> Post Graduates </Text>      
            </TouchableOpacity>
        </View>

      <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/postGrad.php') }>
          <Image source={require('../assets/images/UoB3.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}> Health Professions </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://www.brighton.ac.uk/courses/study/physiotherapy-bsc-hons.aspx') }>
          <Image source={require('../assets/images/UoB3.png')} style ={styles.IconStyle} />
          <Text style={styles.titleText}> Physiotherapy </Text>
        </TouchableOpacity>
        </View>

       </View>
    </View>
  );
}



const styles = StyleSheet.create({

box: {
  width: 950,
  paddingTop: 60,
  paddingRight: 20,
  justifyContent: 'center',
},

Logo: {
    height: 80,
    alignItems: 'center',
},

IconStyle:{
  paddingRight: 15,
    width: 120, 
    height:120,
    alignItems: 'center',
    justifyContent: 'center',
},

BoxBorder: (height, width) => ({
    marginTop: 20,
    width: (width /4)-10, 
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
    fontFamily: 'Roboto-Regular.ttf',
    fontSize: 20,
    //fontWeight: 'bold',
    color:'#bcba40',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CoursesScreen;