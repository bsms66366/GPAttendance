import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
//import { FontAwesome5 } from '@expo/vector-icons';
//import * as Font from 'expo-font';
import TabBarIcon from '../components/TabBarIcon';
//import HomeScreen from '../screens/HomeScreen';
import ModulesScreen from '../screens/ModulesScreen';
import coursePage from '../screens/coursePage';
//import RegionsScreen from '../screens/RegionsScreen';
import informationScreen from '../screens/informationScreen';
import InfoScreen from '../screens/InfoScreen';
//import ExaminationsScreen from '../screens/ExaminationsScreen';
//import ExamLog from '../screens/ExamLog';
import SkillsScreen from '../screens/SkillsScreen';
//import Video360Screen from '../screens/Video360Screen';
import VideoCSScreen from '../screens/VideoCSScreen';
//import svgFileScreen from '../screens/svgFileScreen'
//import svgFile2 from '../screens/svgFile2'
//import VideoViews from '../screens/VideoViews'
//import clinicalSK from '../screens/clinicalSK';



const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    InfoScreen: InfoScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Information',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios','android'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-link'
      }
    />
  ),
};

HomeStack.path = '';
/*****************************************************Courses****/
const LinksStack = createStackNavigator(
  {
    ModulesScreen: ModulesScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Modules',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios','android'? 'md-list-box' : 'md-link'} />
    //<TabBarIcon focused={focused} name={Platform.OS === 'android' ? 'md-school' : 'md-link'} />
  ),
};

LinksStack.path = '';

/*****************************************************modules****/
const ModuleStack = createStackNavigator(
  {
    coursePage: coursePage,
  },
  config
);

ModuleStack.navigationOptions = {
  tabBarLabel: 'Examinations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios','android' ? 'md-bed' : 'md-link'} />
  ),
};
/*****************************************************Resources ****/

const SessionsStack = createStackNavigator(
  {
    VideoCSScreen: VideoCSScreen,
  },
  config
);
SessionsStack.navigationOptions = {
  tabBarLabel: 'Video',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios','android' ? 'md-videocam' : 'md-link'} />
  ),
};

SessionsStack.path = '';

/*****************************************************path pots****/
/*const SettingsStack = createStackNavigator(
  {
    QuizzesScreen: QuizzesScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Quizzes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios','android' ? 'md-trophy' : 'md-link'} />
  ),
};

SettingsStack.path = '';*/
/*****************************************************feedback****/
const GameStack = createStackNavigator(
  {
   SkillsScreen: SkillsScreen,
  },
  config
);

GameStack.navigationOptions = {
  tabBarLabel: 'Admin',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios','android' ? 'md-people' : 'md-link'} />
  ),
};



GameStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  ModuleStack,
  SessionsStack,
  //SettingsStack,
  GameStack,
  
});

tabNavigator.path = '';

export default tabNavigator;
