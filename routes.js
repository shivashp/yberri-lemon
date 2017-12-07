import {
  StackNavigator,
} from 'react-navigation';

import {
  LoginScreen,
} from 'auth';

export const Yberri = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});
