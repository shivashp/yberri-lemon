import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet,
} from 'react-native';
import {
  layout, button, colors, font,
} from 'global';
import {
  Button,
} from 'yberri';

const Order = ({ item, index, handler }) => {
  return (
    <View style={[styles.container, layout.borderBottom]}>
      <View style={styles.itemDesc}>
        <Text style={[styles.name, styles.bold]}>{item.name}</Text>
        <Text style={styles.price}>Rs. {item.price}</Text>
      </View>
      <View style={styles.itemHandle}>
        <Button style={styles.filled} onPress={() => handler(index)('reduce')}>-</Button>
        <Text style={styles.qty}>{item.qty}</Text>
        <Button style={styles.filled} onPress={() => handler(index)('add')}>+</Button>
      </View>
    </View>
  );
};

Order.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};

// Order.defaultProps = {
//   qty: 0,
// };

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: 'bold',
    color: '#5C6E7C',
  },
  name: {
    fontSize: font.larger,
    marginBottom: 7,
    letterSpacing: 2,
  },
  price: {
    color: '#838F99',
    fontWeight: '300',
  },
  itemHandle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qty: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderColor: colors.darker,
    marginHorizontal: 15,
    maxHeight: 40,
    color: '#5C6E7C',
  },
  filled: {
    ...button.filled,
  },
});

export default Order;
