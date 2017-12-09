import {
  LoginScreen,
  MenuScreen,
  TableScreen,
  BillScreen,
} from 'screens';
import {
  toStackNavigator,
  componentToScreen,
} from 'utils';


export const Yberri = toStackNavigator([MenuScreen, LoginScreen, TableScreen, BillScreen])(componentToScreen);
