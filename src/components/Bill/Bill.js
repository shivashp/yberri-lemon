import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import {
  colors, layout, font,
} from 'global';
import Order from './Order';

import { Orders } from './ordersData';

class Bill extends Component {
  state = {
    orders: Orders,
  }
  handler = index => (operator) => {
    const operations = {
      add: qty => qty + 1,
      reduce: qty => (qty > 0 ? qty - 1 : 0),
    };
    const orders = [...this.state.orders];
    const item = orders[index];
    item.qty = operations[operator](item.qty);
    this.setState({ orders });
  }
  render() {
    return (
      <View style={[layout.container, styles.container]}>
        <View style={[styles.headerBar, layout.borderBottom]}>
          <Text style={[styles.header, styles.bold]}>CART (4) </Text>
        </View>
        <View style={[styles.meta, layout.borderBottom]}>
          <Text style={[styles.order, styles.bold]}>Order List #1</Text>
          <Text style={[styles.time, styles.bold]}>Friday, 8 Dec, 2017 | 1:47 PM </Text>
        </View>
        <View style={styles.orders}>
          {this.state.orders.map((item, index) => <Order key={item.id} index={index} item={item} handler={this.handler} />)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: 10,
  },
  headerBar: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: font.large,
  },
  meta: {
    height: 45,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
});

export {
  Bill,
};
