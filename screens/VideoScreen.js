import React from "react";
import * as WebBrowser from 'expo-web-browser';
import {
  Dimensions,
  Image,
  Slider,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
 
  //VirtualizedList
} from "react-native";
import { Asset } from "expo-asset";
import Constants from 'expo-constants';
import { Audio, Video } from "expo-av";
import * as Font from "expo-font";
//import List from "../components/List2";
import { MaterialIcons } from "@expo/vector-icons";

const DATA = require("../data/videos.json");

//console.log(DATA)
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA.video.video}
        renderItem={({ item }) => (
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync(item.urlPath)}>
      
         <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        </TouchableOpacity> 
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});






