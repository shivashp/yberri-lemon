import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { Yberri } from './routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Yberri />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
