import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from 'components/Test';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is app.js</Text>
        <Test />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
