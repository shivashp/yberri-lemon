import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity,
} from 'react-native';
import {
  colors, layout, font,
} from 'global';
import { Button, Card } from 'yberri';
import { Order } from 'components/Bill';

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
      <ScrollView>
        <View style={[layout.container, styles.container]}>
          <View style={styles.headerBar}>
            <Text style={[styles.header, styles.bold]}>CART (4) </Text>
          </View>
          <Card style={[styles.singleInfo, styles.meta]}>            
            <Text style={[styles.billTitle, styles.order]}>Order List #1</Text>
            <Text style={[styles.billTitle, styles.time]}>Friday, 8 Dec, 2017 | 1:47 PM </Text>
          </Card>         
          <View style={styles.orders}>
            <ScrollView>
              {this.state.orders.map((item, index) => <Order key={item.id} index={index} item={item} handler={this.handler} />)}
            </ScrollView>
          </View>
          <Card style={styles.priceInfo}>
            <View style={styles.singleContainer}>            
              <Text style={[styles.bold, styles.billTitle]}>SubTotal</Text>
              <Text style={[styles.bold, styles.price]}> Rs. 177,274 </Text>
            </View>
            <View style={styles.singleContainer}>            
              <Text style={[styles.bold, styles.billTitle]}>Discount(0%)</Text>
              <Text style={[styles.bold, styles.price]}> Rs. 0 </Text>
            </View> 
            <View style={styles.singleContainer}>            
              <Text style={[styles.bold, styles.billTitle]}>VAT(13%)</Text>
              <Text style={[styles.bold, styles.price]}> Rs. 17,274 </Text>
            </View> 
            <View style={styles.singleContainer}>            
              <Text style={[styles.bold, styles.billTitle]}>Total</Text>
              <Text style={[styles.bold, styles.price]}> Rs. 177,274 </Text>
            </View>          
          </Card>

          <View style={styles.buttonSection}>
            <TouchableOpacity style={styles.button}>
              <Card style={styles.cancel}>
                <Text style={styles.buttonText}>Cancel Bill</Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Card style={styles.update}>
                <Text style={styles.buttonText}>Update Bill</Text>
              </Card>
            </TouchableOpacity>
          </View>

          
          
          {/* <View style={styles.buttonSection}>
            <Button style={styles.opaqueButton}>           
              Save
            </Button>
          </View> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.lightBackground,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 50,    
  },
  headerBar: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: font.larger,
    fontFamily: Platform.OS === 'ios' ? 'ChalkboardSE-Regular' : 'Roboto',
    marginBottom: 20,
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  orders: {
    marginBottom: 10,
  },
  order: {
    color: colors.textLight,
    fontWeight: '600',
  },
  time: {
    color: colors.textLight,
    fontWeight: '600',
  },
  meta: {
    marginBottom: 10,
  },
  bold: {
    // fontWeight: 'bold',
    color: '#5C6E7C',
  },
  billInfo: {
    paddingTop: 15,
  },
  singleInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
    alignItems: 'center',
    backgroundColor: colors.primary,    
    paddingHorizontal: 18,      
    minHeight:50,
  },
  priceInfo: {    
    flexDirection: 'column',    
    alignItems: 'flex-start',
    justifyContent: 'flex-start',  
    paddingVertical: 10,  
  },
  singleContainer: {  
    justifyContent: 'space-between',    
    flexDirection: 'row',    
    width: '100%',    
    paddingHorizontal: 18,
    paddingVertical: 7,
  },
  billTitle: {    
    color: colors.textPrimary,
    fontSize: font.regular,
  },
  price: {
    color: colors.textPrimary,
    fontSize: font.large,
  },
  total: {
    fontSize: font.large,
    fontWeight: 'bold',
    color: '#1A2F40',
  },
  opaqueButton: {
    padding: 10,
    maxHeight: 50,
  },
  buttonSection: {
    flexDirection: 'row',    
    justifyContent: 'space-between',        
    flex:1,
    marginTop:20,
  },
  button: {   
    flex:1,       
  },
  update: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',    
    minHeight: 50
  },
  cancel: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',   
    minHeight: 50
  },
  buttonText: {
    color: 'white',
    fontSize: font.large,
  },  
});

export {
  BillScreen,
};
