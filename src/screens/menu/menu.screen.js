import React , { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ItemCategory />
      </View>
    );
  }
}


class ItemCategory extends React.Component {
  render() {
    return (
      <View style={styles.itemCategoryContainer}>
        <View>
          <Text>
            Item ItemCategory
          </Text>
        </View>

        <View>
          <Text> Cupcake </Text>
        </View>

        <View>
          <Icon name='ios-beer' size={30} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemCategoryContainer: {
    height: 100,
    backgroundColor: '#FFDCFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {
  MenuScreen,
};

