import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import { ItemCategory } from './ItemCategory';

const icons = ["hourglass-o","hourglass-1","hourglass-start","hourglass-2","hourglass-half","hourglass-3","hourglass-end","hourglass","hand-grab-o","hand-rock-o","hand-stop-o","hand-paper-o","hand-scissors-o","hand-lizard-o","hand-spock-o","hand-pointer-o","hand-peace-o","trademark","registered","creative-commons","gg","gg-circle","tripadvisor","odnoklassniki","odnoklassniki-square","get-pocket","wikipedia-w","safari","chrome","firefox","opera","internet-explorer","tv","television","contao","500px","amazon","calendar-plus-o","calendar-minus-o"]

class ItemCategories extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: { index: 1, isopen: true },
    };
  }

  onCategoryPress = (index) => {
    //alert(index);
    this.setState({ activeIndex: { index, isopen: !this.state.activeIndex.isopen } });
  }

  render() {
    const { activeIndex } = this.state; 
    const { itemCategories, onCategoryChange } = this.props;
    const itemCategoriesView = itemCategories.map((itemCategory, index) => <ItemCategory iconName={icons[Math.floor(Math.random() * icons.length)]} name={itemCategory.name} items={itemCategory.items} key={index} onCategoryChange={onCategoryChange} onCategoryPress={this.onCategoryPress} activeIndex={activeIndex} index={index}/>);
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
