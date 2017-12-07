import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import _ from 'lodash';


class PinGroup extends React.Component {
  render() {
    const {
      pins,
      visiblePins
    } = this.props;

    const pinViews = _.times(pins, index => <Pin key={index} ink={(index + 1) <= visiblePins}/>);

    return (
      <View style={styles.container}>
        {pinViews}
      </View>
    );
  }
}

const Pin = ({ ink }) => {
  return (
    <View style={[styles.pinContainer,{ backgroundColor: ink ? 'black' : null }]}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinContainer: {
    width: 30, 
    height: 30,
    backgroundColor: 'black',
    margin: 20,
    borderRadius: 20,
    borderWidth: 2,
  },
});

export {
  PinGroup,
};

