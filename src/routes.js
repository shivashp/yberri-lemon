import {
  LoginScreen,
  MenuScreen,
  TableScreen,
} from 'screens';
import {
  Bill,
} from 'components';
import {
  toStackNavigator,
  componentToScreen,
} from 'utils';


export const Yberri = toStackNavigator([MenuScreen, LoginScreen, TableScreen, Bill])(componentToScreen);
