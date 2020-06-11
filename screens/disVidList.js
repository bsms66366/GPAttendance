import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, FlatList, Image } from 'react-native'

import MyListItem from '../components/MyListItem'

const data = require("../data/MockData.json")

class HomeScreen extends React.Component {

    render() {
        return (
            <View>
                <StatusBar hidden={true} />
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <MyListItem
                            item={item}
                            onPress={() => {
                                this.props.navigation.navigate('Details', {
                                    item: item
                                })
                            }}
                        />
                    }
                />
            </View>
        );
    }
}



export default HomeScreen;