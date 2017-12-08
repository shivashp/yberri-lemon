import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
} from 'react-native';
import _ from 'lodash';


class PinGroup extends React.Component {
  render() {
    const {
      pins,
      visiblePins,
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

PinGroup.propTypes = {
  pins: PropTypes.number.isRequired,
  visiblePins: PropTypes.number.isRequired,
};

Pin.propTypes = {
  ink: PropTypes.bool.isRequired,
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

