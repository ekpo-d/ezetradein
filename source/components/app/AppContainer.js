/**
 * General app routing and custom component headers
 */

import { createAppContainer, createStackNavigator } from 'react-navigation';

import RestaurantListScreen from '../restaurant/RestaurantListScreen';
import RestaurantScreen from '../restaurant/RestaurantScreen';
import Header from '../common/Header';

const AppNavigator = createStackNavigator(
  {
    RestaurantList: {
      screen: RestaurantListScreen,
      navigationOptions: () => ({
        header: Header,
      }),
    },
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: 'RestaurantList',
  },
);

/**
 * Container responsible for managing the app
 * state and linking top-level navigator to the app environment.
 * @type {Component}
 */
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
