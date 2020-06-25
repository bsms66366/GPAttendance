import React from "react";import {  ScrollView,  Text,  View,  Picker,  Button,  Border,  StyleSheet,  TouchableOpacity,} from "react-native";import Constants from "expo-constants";import firebase from "firebase";import "@firebase/firestore";export default function Form({ docRef }) {  const [firstOption, setFirstOption] = React.useState("");  const [secondOption, setsecondOption] = React.useState("");  const [submitted, setSubmitted] = React.useState(false);  const [message, setMessage] = React.useState("");  const submit = () => {    console.log({ firstOption, secondOption });    if (!submitted) setSubmitted(true);    if (firstOption === "" || secondOption === "") return;    const newChoices = { Module:firstOption, Surgery:secondOption, Time: new Date() };    firebase      .firestore()      .runTransaction((transaction) => {        return transaction.get(docRef).then((doc) => {          if (!doc.exists) {            transaction.set(docRef, { choices: [newChoices] });          } else {            const previousChoices = doc.data()?.choices || [];            transaction.update(docRef, {              choices: [newChoices, ...previousChoices],            });          }        });      })      .then(() => setMessage(`Submitted ${firstOption} and ${secondOption} :)`))      .catch((err) => setMessage(`Failed due to ${err} :(`));  };  return (    <View      style={{        flex: 0.9,        backgroundColor: "#FFFFF",        padding: 30,        width: "95%",        // marginBottom:30,        justifyContent: "space-around",      }}    >      {/*<Text style={{ fontSize: 20, fontWeight: "bold"}}>New Choices</Text>*/}      <Text style={{ color: "red" }}>        {submitted && firstOption === "" && "You must select a firstOption."}      </Text>      <Picker        selectedValue={firstOption}        onValueChange={(value) => setFirstOption(value)}      >        <Picker.Item label="Module" value="" />        <Picker.Item label="Module 101" value="Module 101" />        <Picker.Item label="Module 102" value="Module 102" />        <Picker.Item label="Module 103" value="Module 103" />        <Picker.Item label="Module 104" value="Module 104" />        <Picker.Item label="Module 201" value="Module 201" />        <Picker.Item label="Module 202" value="Module 202" />        <Picker.Item label="Module 203" value="Module 203" />        <Picker.Item label="Module 204" value="Module 204" />      </Picker>      <Text style={{ color: "red" }}>        {submitted && secondOption === "" && "You must select a Second Option."}      </Text>      <Picker        selectedValue={secondOption}        onValueChange={(value) => setsecondOption(value)}      >        <Picker.Item label="Surgery" value="" />        <Picker.Item          label="st peters med centre"          value="st peters med centre"        />        <Picker.Item          label="North Laine med centre"          value="North Laine med centre"        />        <Picker.Item label="Choice C" value="c" />      </Picker>      <View>        {/*<Button  title="Learn More"  color="#841584"  accessibilityLabel="Learn more about this purple button"  onPress={submit}/>*/}        {/*onPress={submit,() => alert('Hello, world!')}*/}        <TouchableOpacity          onPress={submit}          style={{ backgroundColor: "#026666", borderRadius: 15 }}        >          <Text            style={{              fontSize: 20,              color: "#fff",              textAlign: "center",              marginTop: 15,            }}          >            Submit info          </Text>          <Text> {message} </Text>        </TouchableOpacity>      </View>    </View>  );}const styles = StyleSheet.create({  container: {    flex: 1,    marginTop: Constants.statusBarHeight,    marginHorizontal: 16,  },  button: {    marginBottom: 10,    position: "absolute",    bottom: 0,  },});