import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TouchableOpacity, StyleSheet, Image,
} from 'react-native';
import {
  layout,font,colors,
} from 'global';
import _ from 'lodash';
import * as Animatable from 'react-native-animatable';

const tableObj = ['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5', 'Table 6', 'Table 7', 'Table 8', 'Table 9'];

class Table extends Component {
  renderTable = obj => obj.map((row, index) => {
    return <View key={index} style={styles.grid}>
            {
              row.map((table, i) => <Box key={i} tableName={table} />)
            }
          </View>;
  });
  render() {
    return (
      <View style={[layout.container, styles.row]}>
        { this.renderTable(_.chunk(tableObj, 3)) }
      </View>
    );
  }
}

const Box = props => (
  <TouchableOpacity style={[layout.container, styles.boxContainer]}>
    <Animatable.View animation="bounceIn" style={styles.box}>
      <Image style={styles.image} source={{ uri: 'https://www.budweisergardens.com/assets/img/menus-thumbnail-71158d7b0a.jpg' }} />
      <View style={styles.overlay} />
      <Text style={styles.boxTitle}>{props.tableName.toUpperCase()}</Text>
    </Animatable.View>
  </TouchableOpacity>
);

Box.propTypes = {
  tableName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  grid: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  boxContainer: {
    height: 150,
  },
  boxTitle: {
    fontWeight: '900',
    fontSize: font.large,
    color: colors.primary,
    backgroundColor: 'transparent',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
  },
});

export { Table };
