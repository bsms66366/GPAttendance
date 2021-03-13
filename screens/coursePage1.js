import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
//import { SQLite } from 'expo-sqlite';
import * as SQLite from 'expo-sqlite';
import * as Print from 'expo-print';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

// You can import from local files
import AssetExample from './components/AssetExample';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const db = SQLite.openDatabase('coursedb.db');

export default function App() {

state = {
    image: null
  }

  const [credit, setCredit] = useState('');
  const [title, setTitle] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists course (id integer primary key not null, credits int, title text);');
    });
    updateList();    
  }, []);

  // Save course
  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into course (credits, title) values (?, ?);', [parseInt(credit), title]);    
      }, null, updateList
    )
  }

  // Update courselist
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from course;', [], (_, { rows }) =>
        setCourses(rows._array)
      ); 
    });
  }

  // Delete course
  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from course where id = ?;`, [id]);
      }, null, updateList
    )    
  }
// view course data

const viewList = (id) => {
    db.transaction(tx => {
      tx.executeSql('select * from course;', [id], (_, { rows }) =>
        setCourses(rows._array)
      ); 
    });
  }
// view data list
  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "0.5%",
          backgroundColor: "#FAD607",
          marginLeft: "2%"
        }}
      />
    );
  };


   createPDF = async (html) => {
    let filePath = await Print.printToFileAsync({
      html: "<h1>PDF TEST</h1>",
      width : 612,
      height : 792,
      base64 : false
    });

    alert('PDF Generated', filePath.uri);
  }




  return (
    <View style={styles.container}>
<View style={styles.Logo}>
<Text style={{ fontWeight: 'bold', color: '#FAD607', fontSize: 20, marginTop: 20, textAlign:"center"}}>CLINICAL EXAMINATIONS</Text>
        {/*<Image source={require('../assets/images/bsmsLogo[blu].png')} style={{ marginTop: 10, marginBottom: 10, marginLeft: 5, width: 170, height: 35 }} />  */}
      </View>

      <TextInput placeholder='Title' style={{marginTop: 30, fontSize: 18, width: 200, borderColor: '#FAD607', borderWidth: 1}}
        onChangeText={(title) => setTitle(title)}
        value={title}/>  
      <TextInput placeholder='date' keyboardType="numeric" style={{ marginTop: 5, marginBottom: 5,  fontSize:18, width: 200, borderColor: '#FAD607', borderWidth: 1}}
        onChangeText={(credit) => setCredit(credit)}
        value={credit}/> 

         <Button onPress={saveItem} title="Save"/> 
         


        {/* <TouchableOpacity onPress = {saveItem}>
            <Text accessible={true} accessibilityLabel="Module 102" style={styles.titleText}>   press this button </Text>
          </TouchableOpacity>*/}

      






      <Text style={{marginTop: 10, fontSize: 20, color: '#FAD607', fontWeight: 'bold'}}>EXAMINATIONS</Text>
      <FlatList 
        style={{marginLeft : "1%"}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.title}, {item.credits}, {item.view}</Text>
        <Text style={{fontSize: 16, color: '#005E7E'}} onPress={() => viewItem(item.id)}></Text></View>} 
        data={courses} 
        ItemSeparatorComponent={listSeparator} 
      /> 
       <Button onPress={createPDF} title="Print" /> 
    </View>
  

  );
}



const styles = StyleSheet.create({

 container: {
  flex: 1,
  backgroundColor: '#005E7E',
  alignItems: 'center',
  justifyContent: 'center',
 },
 listcontainer: {
  flexDirection: 'row',
  backgroundColor: '#FAD607',
  alignItems: 'center'
 },
 Logo: {
    height: 50,
    alignItems: 'center',
},
Button: {
fontSize: 16,
color: '#ffe66b',
 },

});