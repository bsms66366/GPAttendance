// screens/Signup.js

import React from 'react'
import { View, Text } from 'react-native'

class Signup extends React.Component {
    render() {
        return (
            <View>
                <Text>Signup Screen</Text>
            </View>
        )
    }
}

export default Signup

// screens/Login.js

import React from 'react'
import { View, Text } from 'react-native'

class Login extends React.Component {
    render() {
        return (
            <View>
                <Text>Login Screen</Text>
            </View>
        )
    }
}

export default Login

// screens/Profile.js

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Profile