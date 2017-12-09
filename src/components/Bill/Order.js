import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, Platform,
} from 'react-native';
import {
  button, colors, font,
} from 'global';
import {
  Button, Card,
} from 'yberri';

import Icon from 'react-native-vector-icons/FontAwesome';


const Order = ({ item, index, handler }) => {
  return (
    <Card style={styles.container}>
      <View style={styles.itemDesc}>
        <Text style={[styles.name, styles.bold]}>{item.name}</Text>
        <Text style={styles.price}>Rs. {item.price}</Text>
      </View>
      <View style={styles.itemHandle}>
        <Button onPress={() => handler(index)('reduce')}>
          <Icon name='arrow-down' size={font.large} color={item.quantity <= 0 ? '#BDBDBD' : colors.primary} />
        </Button>
        <Text style={{ fontSize: font.larger - 3, fontFamily: Platform.OS === 'ios' ? 'ChalkboardSE-Regular' : 'Roboto' }}>
          {item.qty}
        </Text>
        <Button onPress={() => handler(index)('add')}>
          <Icon name='arrow-up' size={font.large} color={colors.primary}/>
        </Button>
      </View>
    </Card>
  );
};

Order.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },
  bold: {
    fontWeight: 'bold',
    color: '#5C6E7C',
  },
  name: {
    fontSize: font.large,
    marginBottom: 3,
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
    marginHorizontal: 5,
    maxHeight: 40,
    color: '#5C6E7C',
  },
  filled: {
    ...button.filled,
    backgroundColor: colors.primary,
  },
});

export { 
  Order,
}

