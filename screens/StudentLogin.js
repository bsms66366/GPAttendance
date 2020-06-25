import React, { useEffect } from "react";
//import Base64 from "Base64";
import { SafeAreaView, View, FlatList, StyleSheet, Button, Text} from "react-native";
import Login from "../components/Login";
import Form from "../components/Form";
//import ChoiceList from "../components/ChoiceList";
//import List from "../components/List";



import * as firebase from "firebase";
import "firebase/firestore";
//import Constants from 'expo-constants';


console.disableYellowBox = true;

export default function App() {
  const [user, setUser] = React.useState(null);
  const [userDoc, setUserDoc] = React.useState(null);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AAIzaSyDZPz6h9ycBIB-qMhdBceaoAEGbc71ZpiI",
      authDomain: "anatomyinterface.firebaseapp.com",
      databaseURL:"https://anatomyinterface.firebaseio.com/",
      projectId: "anatomyinterface",
      storageBucket: "gs://anatomyinterface.appspot.com",
      messagingSenderId: "11332524759",
      appId: "1:11332524759:web:35806ac25543f6aea1ee92",
      measurementId: "232373138",
    };

    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      const userDoc = firebase
        .firestore()
        .collection("users")
        .doc(user.email)
        .collection("Attendance")
        .doc(user.uid);
      setUserDoc(userDoc);
    });
  }, []);

  if (!userDoc)
    return (
      <View style={s.root}>
        <Login />
      </View>
    );

  return (
    <View style={s.root}>
      <View style={{ flexDirection: "row", padding: 20 }}>
        <Text style={{ marginRight: 5 }}>{`Logged in as: ${user.email}`}</Text>
        <Button
          title="Sign Out"
          style={{ backgroundColor: "#026666", borderRadius: 15 }}
          onPress={() => firebase.auth().signOut()}
        />
      </View>
      <Form docRef={userDoc} />
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-around",
    //alignItems: "center",
  },
});
