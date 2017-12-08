import React , { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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
];


class MenuScreen extends Component {

  constructor() {
    super();
    this.state = {
      //categoriesData: {},
    };
    this.categoriesData = {};
  }

  onCategoryChange = name => (data) => {
    this.categoriesData[name] = data;
  }

  _onPress = () => {
    alert(JSON.stringify(this.categoriesData));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPress} style={{marginTop: 100}}>
          <Text>
            Done
          </Text>
        </TouchableOpacity>
        <ItemCategories itemCategories={DATA} onCategoryChange={this.onCategoryChange}/>
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

