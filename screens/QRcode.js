import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import { QRCode as CustomQRCode } from 'react-native-custom-qr-codes-expo';

// Simple usage, defaults for all but the value
function Simple() {
  return <SvgQRCode value="http://awesome.link.qr" />;
}

// 20% (default) sized logo from local file string with white logo backdrop
function LogoFromFile() {
  let logoFromFile = require('./assets/logo.png');

  return <SvgQRCode value="Just some string value" logo={logoFromFile} />;
}

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Simple />
        <LogoFromFile />
      </View>

      <CustomQRCode codeStyle="circle" />
      <CustomQRCode linearGradient={['rgb(255,0,0)', 'rgb(0,255,255)']} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});
