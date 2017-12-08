import React , { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ItemCategories, MenuInfoDialog } from 'components';

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
    headerRight: <Icon name={'shopping-cart'} size={30} style={{ marginRight: 20, padding: 20, }} />,
  }

  static counter = (obj) => {
    return Object.values(obj).reduce((acc, val) => acc + val, 0);
  }

  constructor() {
    super();
    this.state = {
      totalCount: 0,
      dialogVisible: false,
      dataToDialog: {},
    };
    this.categoriesData = {};
  }

  onCategoryChange = name => (data) => {
    this.categoriesData[name] = data;
    this.setState({
      totalCount: Object.values(this.categoriesData).reduce((acc, val) => acc + MenuScreen.counter(val), 0),
    });
  };

  _onPress = () => {
    alert(JSON.stringify(this.categoriesData));
  }

  _onFabLongPress = () => {
    this.setState({
      dialogVisible: true,
      dataToDialog: Object.values(this.categoriesData).reduce((acc, val) => ({ ...acc, ...val }), {}),
    });
  }
  _onDialogClosePress = () => {
    this.setState({
      dialogVisible: false,
    })
  }

  render() {
    const {
      totalCount,
      dialogVisible,
      dataToDialog,
    } = this.state;
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={this._onPress} style={{marginTop: 100}}>
          <Text>
            Done
          </Text>
        </TouchableOpacity> */}
        <ItemCategories itemCategories={DATA} onCategoryChange={this.onCategoryChange} />
        <TouchableOpacity style={styles.fabContainer} onLongPress={this._onFabLongPress}>

        <Text style={{color: 'white', fontSize: 50 }}> { totalCount } </Text>
          
        </TouchableOpacity>
        <MenuInfoDialog visible={dialogVisible} onClosePress={this._onDialogClosePress} data={dataToDialog}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fabContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(77,208,225 ,1)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 20,
    marginRight: 20,
    shadowOffset: { width: 6, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  }
  
});

export {
  MenuScreen,
};

