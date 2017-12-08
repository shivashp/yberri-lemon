import React , { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ItemCategory extends Component {
  constructor() {
    super();
    this.state = {
      showItems: false,
      anyItemSelected: false,
      totalItems: 0,
    };
    this.itemQuantity = {};
    
  }

  _onPress = () => {
    const { index, onCategoryPress } = this.props;
    onCategoryPress(index);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  onItemPress = (value, itemName) => {
    this.itemQuantity[itemName] = value;
    const { onCategoryChange, name, index } = this.props;
    onCategoryChange(name, index)(this.itemQuantity);
    this.setState({
      anyItemSelected: Object.values(this.itemQuantity).map(val => val >= 1).includes(true),
      totalItems: Object.values(this.itemQuantity).reduce((acc, val) => val + acc, 0),
    });
  }

  render() {
    const { showItems, totalItems } = this.state;
    const {
      name,
      items,
      index,
      activeIndex,
    } = this.props;



    const itemsView = items.map((item, index) => <Item onItemPress={this.onItemPress} name={item} key={index} quantity={ this.itemQuantity[item] || 0 }/>);

    return (
      <View>
        <TouchableOpacity style={[styles.container, { backgroundColor: this.state.anyItemSelected ? '#B2EBF2' : null }]} onPress={this._onPress}>
          <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
            
            <Text style={{ fontSize: 25 }}> {totalItems ? totalItems : null} </Text>
          </View>

          <View>
            <Text style={{ fontSize: 20 }}>{name}</Text>
          </View>

          <View style={{ marginRight: 10 }}>
            <Icon name='ios-checkmark-circle-outline' size={40} color='#9CCC65'/>
          </View>
        </TouchableOpacity>
        {index === activeIndex ? itemsView : null}
      </View>
    );
  }
}

class Item extends React.Component {

  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }
  
  componentWillMount = () => {
    const { quantity } = this.props;
    this.setState({
      quantity,
    });
  }

  _onPress = (value) => {
    const { onItemPress, name } = this.props;
    //call the props
    

    switch (value) {
      case 'LEFT':
        if (this.state.quantity > 0) {
          this.setState({
            quantity: this.state.quantity - 1,
          });
          onItemPress(this.state.quantity - 1, name);
        }
        
        break;
      case 'RIGHT':
        if (this.state.quantity < 1000) {
          this.setState({
            quantity: this.state.quantity + 1,
          });
          onItemPress(this.state.quantity + 1, name);
        }
        break;
      default:
        break;
    }
  }

  render() {
    const {
      name
    } = this.props;
    const {
      quantity,
    } = this.state;
    return (
      <View style={styles.itemContainer}>
        <Text style={{ fontSize: 19, fontWeight: '400' }}>{name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{padding: 20}} onPress={() => this._onPress('LEFT')}>
            <Icon name='md-arrow-dropleft' size={50} color={this.state.quantity <= 0 ? '#BDBDBD' : '#26C6DA'} />
          </TouchableOpacity>
          <Text style={{ fontSize: 22 }}>
            { quantity }
          </Text>
          <TouchableOpacity style={{padding: 20}} onPress={() => this._onPress('RIGHT')}>
            <Icon name='md-arrow-dropright' size={50} color='#26C6DA'/>
          </TouchableOpacity>
          
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
    borderBottomWidth: 0.2,
    borderColor: '#26C6DA',
  },
  itemContainer: {
    height: 60, 
    justifyContent: 'space-between',
    paddingLeft: 30,
    borderBottomWidth: 0.2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',

  }
});

export {
  ItemCategory,
};
