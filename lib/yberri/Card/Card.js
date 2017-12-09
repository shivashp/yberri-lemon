import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
} from 'react-native';

const Card = props => {
  const {
    style,
    children,
    ...attributes
  } = props;
  return (<View style={[styles.container, style]} {...attributes}>{children}</View>);
};

Card.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: '#26C6DA',
    borderRadius: 20,
    margin: 4,
    marginRight: 10,
    marginLeft: 10,
  },
});

export {
  Card,
};

