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

@inject('RestaurantStore')
@observer
export default class RestaurantScreen extends React.Component {
	constructor(props) {
    super(props);
    props.RestaurantStore.getRestaurants();
  }

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
