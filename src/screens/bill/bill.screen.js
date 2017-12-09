import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import {
  colors, layout, font,
} from 'global';
import { Button } from 'yberri';
import Icon from 'react-native-vector-icons/Ionicons';
import Order from './Order';

import { Orders } from './ordersData';

class BillScreen extends Component {
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
            <Text style={[styles.bold, styles.order]}>Order List #1</Text>
            <Text style={[styles.bold, styles.time]}>Friday, 8 Dec, 2017 | 1:47 PM </Text>
          </View>
          <View style={styles.orders}>
            <ScrollView>
              {this.state.orders.map((item, index) => <Order key={item.id} index={index} item={item} handler={this.handler} />)}
            </ScrollView>
          </View>
          <View style={styles.billInfo}>
            <View style={styles.singleInfo}>
              <Text style={[styles.bold, styles.billTitle]}>SubTotal</Text>
              <Text style={styles.bold}> Rs. 177,274 </Text>
            </View>
            <View style={styles.singleInfo}>
              <Text style={[styles.bold, styles.billTitle]}>Discount (0%)</Text>
              <Text style={styles.bold}> Rs. 0 </Text>
            </View>
            <View style={styles.singleInfo}>
              <Text style={[styles.bold, styles.billTitle]}>Service Charge</Text>
              <Text style={styles.bold}>Rs. 17,727</Text>
            </View>
            <View style={styles.singleInfo}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>Rs. 195,001</Text>
            </View>
          </View>
          <View style={styles.buttonSection}>
            <Button style={styles.opaqueButton}>           
              Save
            </Button>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
  order: {
    color: '#838F99',
  },
  time: {
    color: '#838F99',
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
    color: '#5C6E7C',
  },
  billInfo: {
    paddingTop: 15,
  },
  singleInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  billTitle: {
    fontSize: font.large,
    color: '#5C6E7C',
  },
  total: {
    fontSize: font.larger,
    fontWeight: 'bold',
    color: '#1A2F40',
  },
  opaqueButton: {
    padding: 10,
    maxHeight: 50,
  },
});

export {
  BillScreen,
};
