//This is an example code for ListViewDataSource//
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  ActivityIndicator,
  ListView,
  Text,
  View,
  Platform,
} from 'react-native';
//import all the components we are going to use.

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //to disable which data is loading
      isLoading: true,
    };
  }
  componentDidMount() {
    //calling Web Service just after screen is loaded
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  ListViewItemSeparator = () => {
    //Divider for the list item
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#080808' }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //returning the loader view while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    } else {
      //returning the main view after data loaded successfully
      return (
        <View style={styles.MainContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderSeparator={this.ListViewItemSeparator}
            renderRow={rowData => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  paddingTop: 16,
                  paddingBottom: 16,
                }}>
                <Text style={styles.textViewContainerHeading}>
                  {rowData.id + '. ' + rowData.title}
                </Text>
                <Text style={styles.textViewContainer}>{rowData.body}</Text>
              </View>
            )}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 30,
    backgroundColor: '#ffffff',
    padding: 5,
  },

  textViewContainerHeading: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  textViewContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});













/*getInitialState: function() {
  var ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});
  return {ds};
},
_onDataArrived(newData) {
  this._data = this._data.concat(newData);
  this.setState({
    ds: this.state.ds.cloneWithRows(this._data)
  });
}*/