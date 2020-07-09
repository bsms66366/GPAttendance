import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Container, Item, Form, Input, Button, Label } from "native-base";
import * as firebase from "firebase";
import { MonoText } from '../components/StyledText';
import Question from '../components/Question';
import FAQScreen from '../screens/FAQScreen';

firebaseConfig = {
  apiKey: "AIzaSyDdKrXwNDWZ9Q9F3z35ude-B3a6KRZvVI8",
  authDomain: "bsms-logbook.firebaseapp.com",
  databaseURL: "https://bsms-logbook.firebaseio.com",
  projectId: "bsms-logbook",
  storageBucket: "bsms-logbook.appspot.com",
  messagingSenderId: "202139360189",
  appId: "1:202139360189:web:31b80e0cd7c218f9e9d0d4",
  measurementId: "G-L1VX79JXVC"
};

//firebase.initializeApp(firebaseConfig);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/Logo9.png')
                : require('../assets/images/robot-prod.png')

            }
            style={styles.welcomeImage}
          />
<Text style={styles.getStartedText}>Wecome to the BSMS Anatomy Labs Interface</Text>
<Text style={styles.getStartedText}>the dissection table companion</Text>







<Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
       FAQ
      </Text>
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText></MonoText>
          </View>

          <Text style={styles.getStartedText}>
          </Text>
        </View>
      </ScrollView>
      </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        FAQ
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
    
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  //WebBrowser.openBrowserAsync({FAQScreen});
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 450,
    height: 350,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(188,186,62, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#BABABA',
  },
});
