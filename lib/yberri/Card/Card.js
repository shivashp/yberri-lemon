import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import { colors } from 'global';
import * as Animatable from 'react-native-animatable';

const Card = props => {
  const {
    style,
    children,
    ...attributes
  } = props;
  return (<Animatable.View animation="bounceIn" style={[styles.container, style]} {...attributes}>{children}</Animatable.View>);
};

Card.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    minHeight: Platform.OS === 'ios' ? 80 : 60,
    backgroundColor: Platform.OS === 'ios' ? 'rgba(255, 255, 255, 1)' : colors.lightBackground,
    //justifyContent: 'space-between',        
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: '#26C6DA',
    borderRadius: 20,
    margin: 4,
    marginRight: 10,
    marginLeft: 10,
    shadowOffset: { width: 6, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
});

export {
  Card,
};

