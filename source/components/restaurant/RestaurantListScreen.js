import React from 'react';
import {
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import RestaurantListItem from './RestaurantListItem';
import { renderIf } from '../../utils/helpers';

import restaurantStyles from '../../assets/styles/components/restaurant';
import LoadingScreen from '../common/LoadingScreen';

/**
 * RestaurantListScreen displays an infinite list of restaurants,
 * based on scroll position, loading animation in the absense of data,
 * and loaction search functionality
 * @type {Component}
 */
@inject('RestaurantStore')
@observer
export default class RestaurantListScreen extends React.Component {
  /**
   * Gets the list of restaurants on load
   * @constructor
   * @param {Object} props
   */
	constructor(props) {
    super(props);
    props.RestaurantStore.getRestaurants();
  }

  /**
   * Renders individual restaurant tiles
   * @param {Object} props
   */
  renderItems = props => (
    <TouchableOpacity
      key={props.item.id}
      onPress={() => this.props.navigation.navigate('Restaurant', { data: toJS(props.item) })}
    >
      <RestaurantListItem restaurant={props.item} />
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          renderIf(
            this.props.RestaurantStore.loading,
            <ScrollView style={restaurantStyles.container}>
              <LoadingScreen />
            </ScrollView>,
          )
        }
        {
          renderIf(
            !this.props.RestaurantStore.loading,
            (
              <FlatList
                style={restaurantStyles.container}
                data={toJS(this.props.RestaurantStore.restaurants)}
                renderItem={this.renderItems}
                keyExtractor={item => item.id}
                refreshing={this.props.RestaurantStore.refreshing}
                onRefresh={() => this.props.RestaurantStore.getRestaurants('refresh')}
                onEndReached={this.props.RestaurantStore.onEndReached}
                onEndReachedThreshold={0.4}
                initialNumToRender={10}
              />
            ),
          )
        }

      </View>
    );
  }
}
