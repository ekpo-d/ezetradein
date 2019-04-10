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

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
