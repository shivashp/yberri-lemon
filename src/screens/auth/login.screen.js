import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {
  layout,
} from 'global';

import {
  KeyGroup,
  PinGroup,
} from 'components';

import {
  NavigationActions,
} from 'react-navigation';

const KEYS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8 ,9],
  ['DEL', 0, 'OK'],
];

export class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  }

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
 
    if (this.pin.length === 4) {
      const navigate = NavigationActions.navigate({
        routeName: 'MenuScreen',
        params: {},
      });
      this.props.navigation.dispatch(navigate);
    }
  }

  render() {
    const {
      visiblePins,
    } = this.state;

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        
        <PinGroup pins={4} visiblePins={visiblePins} />
        
        <KeyGroup values={KEYS} onPress={this.onPress}/>
        <Text> H </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
