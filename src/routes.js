import {
  LoginScreen,
  MenuScreen,
  TableScreen,
} from 'screens';
import {
  toStackNavigator,
  componentToScreen,
} from 'utils';


export const Yberri = toStackNavigator([MenuScreen, LoginScreen, TableScreen])(componentToScreen);
