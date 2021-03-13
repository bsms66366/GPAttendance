import React from 'react';
import { createSwitchNavigator, SafeAreaView } from 'react-navigation';
import { ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity, Props} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import ModulesScreen from '../screens/ModulesScreen';


 function CoursesScreen({navigation, props}) {
  var {height, width} = Dimensions.get('window');
  //var {height, width} = Math.max (Dimensions.get('window'));
  console.log (height, width)

 SafeAreaView.setStatusBarHeight(0);

  //const AppContainer = createAppContainer(AppNavigator);
  return (
    <View style={styles.v_container}>
     {
    <StatusBar style="#282828" />
    }
      <View style={{flex: 1, flexDirection: 'row', flexWrap: "wrap"}}>
      
       {/* <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">*/}
       <View style={{ backgroundColor: "#203C89", alignItems: 'center'}}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_112236_1&cmp_tab_id=_298705_1&editMode=true&mode=cpview') }>
            <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style ={styles.IconStyle} /> 
                <Text accessible={true} accessibilityLabel="Phase 1" style={styles.titleText}>     Phase 1</Text>
          </TouchableOpacity>
        </View>

        
        
        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/papage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard7.png')} style ={styles.IconStyle} />  
         <Text accessible={true} accessibilityLabel="Physicans" style={styles.titleText}>   Physicans</Text>
         <Text accessible={true} accessibilityLabel="Associates"style={styles.titleText}>   Associates </Text>
           </TouchableOpacity>
          </View>

        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/pharmacy.php') }>
          <Image accessible={true} accessibilityLabel="Image Icon"source={require('../assets/images/interfaceIcons_Artboard23.png')} style ={styles.IconStyle} />
          <Text accessible={true} accessibilityLabel="Pharmacy" style={styles.titleText}> Pharmacy </Text>
        </TouchableOpacity>
        </View>


         <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/neuroscience.php') }>
          <Image accessible={true} accessibilityLabel="Icon Image" source={require('../assets/images/interfaceIcons_Artboard22.png')} style ={styles.IconStyle} />
            <Text accessible={true} accessibilityLabel="Neuroscience" style={styles.titleText}> Neuroscience </Text>
        </TouchableOpacity>
        </View>

         <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ksseducation.hee.nhs.uk/') }>
          <Image accessible={true} accessibilityLabel="icon image" source={require('../assets/images/nhs.png')} style ={styles.IconStyle} />
            <Text accessible={true} accessibilityLabel="HEE KSS!" style={styles.titleText}>     HEE KSS</Text>
        {/*  <Text accessible={true} accessibilityLabel="Revision!" style={styles.titleText}>     Revision </Text>*/}
        </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/postGrad.php') }>
          <Image accessible={true} source={require('../assets/images/interfaceIcons_Artboard22.png')} style ={styles.IconStyle} />
           <Text accessible={true} style={styles.titleText}>Post Graduates </Text>  
        </TouchableOpacity>
        </View>

      <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/healthProf.php') }>
          <Image accessible={true} source={require('../assets/images/UoB3.png')} style ={styles.IconStyle} />
            <Text accessible={true} accessibilityLabel="Health" style={styles.titleText}>       Health</Text>
            <Text accessible={true} accessibilityLabel="Professions" style={styles.titleText}>   Professions </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)} accessible={true} accessibilityLabel="Tap me!">
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/postGrad.php') }>
          <Image accessible={true} accessibilityLabel="Image Icon" source={require('../assets/images/UoB3.png')} style ={styles.IconStyle} />
            <Text accessible={true} accessibilityLabel="Physiotherapy" style={styles.titleText}>Physiotherapy</Text>
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

/*Logo: {
    height: 80,
    alignItems: 'center',
},*/

IconStyle:{
    //paddingRight: 15,
    width: wp('13%'), 
    height:hp('20%'),
    //alignItems: 'center',
    justifyContent: 'center',
},

BoxBorder: (height, width) => ({
    marginTop: 25,
    width: (width /4)-10, 
    height: '40%',
    borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }),

//v_container:(height, width) => ({
  v_container: {
    //width: 900,
    height: 600,
    flex: 4,
    //paddingTop: 2,
    backgroundColor: '#282828',
    justifyContent: 'center',
  },

  titleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFPercentage(2),
    //fontWeight: 'bold',
    color:'#bcba40',
    justifyContent: 'center',
    alignItems: 'center',
    //width: wp('23%'), 
  },
});
export default CoursesScreen;