import React , { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ItemCategories } from 'components';

const DATA = [
  {
    name: 'Veg',
    items: ['Momo', 'Chowmein', 'Helink'],
  },
  {
    name: 'BreakFast',
    items: ['Sanswhi', 'Butter', 'Curry'],
  },
  {
    name: 'Holla',
    items: ['Makai', 'Pizza', 'Pizzerai'],
  },
  {
    name: 'Veg',
    items: ['Momo', 'Chowmein', 'Helink'],
  },
  {
    name: 'BreakFast',
    items: ['Sanswhi', 'Butter', 'Curry'],
  },
  {
    name: 'Holla',
    items: ['Makai', 'Pizza', 'Pizzerai'],
  },
  {
    name: 'Veg',
    items: ['Momo', 'Chowmein', 'Helink'],
  },
  {
    name: 'BreakFast',
    items: ['Sanswhi', 'Butter', 'Curry'],
  },
  {
    name: 'Holla',
    items: ['Makai', 'Pizza', 'Pizzerai'],
  },
  {
    name: 'Veg',
    items: ['Momo', 'Chowmein', 'Helink'],
  },
  {
    name: 'BreakFast',
    items: ['Sanswhi', 'Butter', 'Curry'],
  },
  {
    name: 'Holla',
    items: ['Makai', 'Pizza', 'Pizzerai'],
  },
];


class MenuScreen extends Component {

  static navigationOptions = {
    title: 'Food Category',
    headerRight: <Icon name={'ios-cart-outline'} size={30} style={{marginRight: 20, padding: 20, }} />,
  }

  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
    this.categoriesData = {};
  }

  onCategoryChange = (name, index) => (data) => {
   // alert(index);
    this.categoriesData[name] = data;
    
  };

  onCategoryPress = (index) => {
    
    this.setState({
      activeIndex: index,
    });
  }

  _onPress = () => {
    alert(JSON.stringify(this.categoriesData));
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={this._onPress} style={{marginTop: 100}}>
          <Text>
            Done
          </Text>
        </TouchableOpacity> */}
        <ItemCategories itemCategories={DATA} onCategoryChange={this.onCategoryChange} onCategoryPress={this.onCategoryPress} activeIndex={this.state.activeIndex}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export {
  MenuScreen,
};

