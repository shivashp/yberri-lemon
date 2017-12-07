import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  colors
} from 'global/styles';

export class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>
          Hi from the login screen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
