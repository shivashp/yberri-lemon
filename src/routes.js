import {
  StackNavigator,
} from 'react-navigation';

import {
  LoginScreen,
} from 'auth';
import {
  Table,
} from 'components';

export const Yberri = StackNavigator({
  Table: {
    screen: Table,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});
