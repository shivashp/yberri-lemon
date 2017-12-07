import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  colors,layout,
} from 'global';

export class LoginScreen extends React.Component {
  render() {
    return (
      <View style={[layout.container, layout.center]}>
        <Text style={{ color: colors.textPrimary }}>
          Login Screen123
        </Text>
      </View>
    );
  }
}
