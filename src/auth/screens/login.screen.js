import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import _ from 'lodash';

import {
  colors,
  layout,
} from 'global';

import {
  KeyGroup,
  PinGroup,
} from 'components';

const Keys = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8 ,9],
  ['DEL', 0, 'OK'],
];

export class LoginScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      visiblePins: 0,
    };
    this.pin = '';
  }

  onPress = (key) => {
    if (key === 'DEL') {
      this.pin = this.pin.slice(0, this.pin.length - 1);
    } else if (key === 'OK') {
      alert('okay');
    } else if (this.pin.length < 4) {
      this.pin += key.toString();
    }

    this.setState({
      visiblePins: this.pin.length,
    });
  }

  render() {
    const {
      visiblePins,
    } = this.state;

    return (
      <View style={[layout.container, layout.noPadding, styles.container]}>
        <View style={{flex: 1}}>
          <PinGroup pins={4} visiblePins={visiblePins} />
        </View>
        <KeyGroup values={Keys} onPress={this.onPress}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
