import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  Key,
} from 'components';

class KeyGroup extends React.Component {
  render() {
    const {
      values,
      onPress,
    } = this.props;

    const keyView = values.map((keys, index) => <KeyRow keys={keys} key={index} onPress={onPress}/>);
    return (
      <View style={styles.container}>
        {keyView}
      </View>
    );
  }
}

const KeyRow = ({ keys, onPress }) => {
  const keyRow = keys.map((key, index) => <Key value={key} key={index} onPress={() => onPress(key)}/>);
  return (
    <View style={styles.row}>
      {keyRow}
    </View>
  );
};

KeyGroup.propTypes = {
  values: PropTypes.array.isRequired,
  onPress: PropTypes.func,
};

KeyRow.propTypes = {
  keys: PropTypes.array.isRequired,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});

export {
  KeyGroup,
};

