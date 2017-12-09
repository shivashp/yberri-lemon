import React , { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'global';


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
    const { index, onCategoryPress, activeIndex } = this.props;
    onCategoryPress(index);
    
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    if (activeIndex === index) {
      // this.setState({
      //   showItems: !this.state.showItems,
      // });
    }
    
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
    const { totalItems } = this.state;
    const {
      name,
      items,
      index,
      activeIndex,
      iconName,
    } = this.props;



    const itemsView = items.map((item, index) => <Item onItemPress={this.onItemPress} name={item} key={index} quantity={ this.itemQuantity[item] || 0 }/>);

    return (
      <View>
        <TouchableOpacity style={[styles.container, { backgroundColor: this.state.anyItemSelected ? '#d6dae7' : '#ffffff' }]} onPress={this._onPress}>
          <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={iconName} size={30} color={colors.textPrimary} />
            
          </View>

          <View>
            <Text style={{ fontSize: 23, fontFamily: 'ChalkboardSE-Regular', color: colors.textPrimary }}>{name}</Text>
          </View>

          <View style={{ marginRight: 10 }}>
            <Text style={{ fontSize: 25, fontFamily: 'ChalkboardSE-Regular' }}> {totalItems ? totalItems : null} </Text>
          </View>
        </TouchableOpacity>
        {activeIndex.isopen && activeIndex.index === index ? itemsView : null}
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
    const { onItemPress, name, iconName } = this.props;
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
        <Text style={{ fontSize: 19, fontWeight: '400', fontFamily: 'ChalkboardSE-Regular' }}>{name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ padding: 20 }} onPress={() => this._onPress('LEFT')}>
            <Icon name='arrow-down' size={30} color={this.state.quantity <= 0 ? '#BDBDBD' : colors.primary} />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontFamily: 'ChalkboardSE-Regular' }}>
            { quantity }
          </Text>
          <TouchableOpacity style={{padding: 20}} onPress={() => this._onPress('RIGHT')}>
            <Icon name='arrow-up' size={30} color={colors.primary}/>
          </TouchableOpacity>
          
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
    borderBottomWidth: 0.2,
    borderColor: '#26C6DA',
    borderRadius: 20,
    margin: 4,
    marginRight: 10,
    marginLeft: 10,
  },
  itemContainer: {
    height: 60, 
    justifyContent: 'space-between',
    paddingLeft: 30,
    
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 3,
    marginBottom :3,
    borderRadius: 20,
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.1,

  }
});

export {
  ItemCategory,
};
