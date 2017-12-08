import {
  LoginScreen,
} from 'auth';

import {
  MenuScreen,
} from 'menu';

import {
  Table,
} from 'components';
import {
  toStackNavigator,
  componentToScreen,
} from 'utils';


export const Yberri = toStackNavigator([MenuScreen, LoginScreen, Table])(componentToScreen);

