import {
  StackNavigator,
} from 'react-navigation';

import {
  LoginScreen,
} from 'auth';
import {
  TableScreen,
} from 'components';

export const Yberri = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Table: {
    screen: TableScreen,
    navigationOptions: {
      header: null,
    },
  },
}, {
  initialRouteName: 'Table',
});
