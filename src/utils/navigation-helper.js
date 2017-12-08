/* eslint-disable */
import { StackNavigator } from 'react-navigation';

//componentToScreen :: =>  (a -> b)
const componentToScreen = component => ({
  screen: component,
  navigationOptions: {
    header: null,
  },
});


//toStackNavigator:: => [a] -> (a -> b) -> [b]
const toStackNavigator = components =>
  toScreen =>
    StackNavigator(components.reduce((acc, component) =>
      ({ ...acc, [component.name]: toScreen(component) }), {}), {initialRouteName: 'TableScreen'});

export {
  toStackNavigator,
  componentToScreen,
};

