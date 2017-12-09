import React from 'react';
import {
  TouchableOpacity, StyleSheet,Text,
} from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 1,
    maxHeight: 40,
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
});

const Button = (props) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  style: PropTypes.any,
  children: PropTypes.node.isRequired,
};

export {
  Button,
};
