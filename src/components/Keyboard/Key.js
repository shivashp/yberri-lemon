import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

class Key extends React.Component {
  render() {
    const {
      value,
      onPress,
    } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Text style={styles.text}>
          {value}
        </Text>
      </TouchableOpacity>
    );
  }
}


Key.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export {
  Key,
};
