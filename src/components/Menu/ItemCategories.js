import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import { ItemCategory } from './ItemCategory';


class ItemCategories extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
 
  render() {
    const { itemCategories, onCategoryChange, activeIndex, onCategoryPress } = this.props;
    const itemCategoriesView = itemCategories.map((itemCategory, index) => <ItemCategory name={itemCategory.name} items={itemCategory.items} key={index} onCategoryChange={onCategoryChange} onCategoryPress={onCategoryPress} activeIndex={activeIndex} index={index}/>);
    return (
      <ScrollView>
        {itemCategoriesView}
      </ScrollView>
    );
  }
}

export {
  ItemCategories,
};
