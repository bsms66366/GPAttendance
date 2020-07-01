import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ModulesScreen from '../screens/ModulesScreen';
import CoursesScreen from '../screens/CoursesScreen';
//import CoursesNavigator from '../navigation/CoursesNavigator';
import RegionsScreen from '../screens/RegionsScreen';
import informationScreen from '../screens/informationScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import QuizzesScreen from '../screens/QuizzesScreen';
import VideoScreen from '../screens/VideoScreen';
import pagesNav from '../screens/pagesNav';
//import DropdownsScreen from '../screens/DropdownsScreen';
//import StudentLogin from '../screens/StudentLogin';
//import NotesScreen from '../screens/NotesScreen';
//import LoginScreen from "../screens/LoginScreen";
//import PhoneLogin from "../screens/PhoneLogin";
//import List from '.components/List';
//import VideoPlaylist from '../screens/VideoPlaylist';
//import FeedbackScreen from '../screens/FeedbackScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Information',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
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
    CourseScreen: CoursesScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Courses',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'md-school' : 'md-link'} />
  ),
};

LinksStack.path = '';

/*****************************************************modules****/
const ModuleStack = createStackNavigator(
  {
    ModulesScreen: ModulesScreen,
  },
  config
);

ModuleStack.navigationOptions = {
  tabBarLabel: 'Phase 1',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'md-school' : 'md-link'} />
  ),
};
/*****************************************************Resources ****/

const SessionsStack = createStackNavigator(
  {
    ResourcesScreen: ResourcesScreen,
  },
  config
);
SessionsStack.navigationOptions = {
  tabBarLabel: 'Resources',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-browsers' : 'md-link'} />
  ),
};

SessionsStack.path = '';

/*****************************************************path pots****/
const SettingsStack = createStackNavigator(
  {
    pagesNav: pagesNav,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Videos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'md-videocam' : 'md-link'} />
  ),
};

SettingsStack.path = '';
/*****************************************************feedback****/
const GameStack = createStackNavigator(
  {
    QuizzesScreen: QuizzesScreen,
  },
  config
);

GameStack.navigationOptions = {
  tabBarLabel: 'Quizzes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'md-trophy' : 'md-link'} />
  ),
};



GameStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  ModuleStack,
  SessionsStack,
  SettingsStack,
  GameStack,
  
});

tabNavigator.path = '';

export default tabNavigator;
