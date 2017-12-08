import {
  LoginScreen,
  MenuScreen,
  TableScreen,
} from 'screens';
import {
  toStackNavigator,
  componentToScreen,
} from 'utils';


export const Yberri = toStackNavigator([LoginScreen, MenuScreen, TableScreen])(componentToScreen);
