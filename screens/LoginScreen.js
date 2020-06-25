import React from 'react';
import * as firebase from "firebase";
import { Container, Text, Item, Form, Input, Button, Label } from "native-base";

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

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
    SignUp = (email, password) => {
      try {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => { 
                   console.log(user);
             });
  } catch (error) {
        console.log(error.toString(error));
      }
    };
Login = (email, password) => {
    try {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(res => {
             console.log(res.user.email);
      });
} catch (error) {
      console.log(error.toString(error));
    }
  };
render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCapitalize="none" autoCorrect={false} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Item>
          

          <Button full rounded success>
            <Text>Login onPress={() => this.LogIn(this.state.email, this.state.password)} </Text>
          </Button>
          <Button full rounded success style={{ marginTop: 20 }}> 
          <Text>Signup onPress={() => this.SignUp(this.state.email, this.state.password)}</Text>
          </Button>
        </Form>
      </Container>
    );
  }}