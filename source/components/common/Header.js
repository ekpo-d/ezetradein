import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { toJS } from 'mobx';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import Stores from '../../stores/index';
import SourceSansProText from './StyledText';

import headerStyles from '../../assets/styles/components/header';
import globalStyles from '../../assets/styles/base/global';
import ReactiveTextField from './ReactiveTextField';

const Header = () => (
  <SafeAreaView style={headerStyles.container}>
    <View style={[globalStyles.row, globalStyles.m_t_sm, globalStyles.m_b_xs]}>
      <View style={globalStyles.col_1}>
        <Ionicons
          name="md-arrow-back"
          size={30}
          color="white"
        />
      </View>
      <View style={globalStyles.col_6}>
        <ReactiveTextField />
      </View>
      <View style={[globalStyles.col_3, { flexDirection: 'row-reverse' }]}>
        <Image
          source={require('../../assets/images/icons/settings.png')}
          resizeMode="contain"
          style={headerStyles.icon}
        />
        <TouchableOpacity
          onPress={() => {
            if (Stores.RestaurantStore.searchString.trim().length) {
              Stores.RestaurantStore.getRestaurants(
                'load',
                toJS(Stores.RestaurantStore.searchString),
              );
            }
            else {
              Stores.RestaurantStore.setClassProps([
                {
                  name: 'showSearchbar',
                  value: !Stores.RestaurantStore.showSearchbar,
                },
              ]);
              // eslint-disable-next-line no-unused-expressions
              Stores.RestaurantStore.showSearchbar
              ? Stores.RestaurantStore.searchbarRef.focus()
              : null;
            }
          }}
        >
          <Ionicons
            name="md-search"
            size={30}
            color="white"
            style={{ marginRight: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
    <View style={globalStyles.m_b_xs}>
      <SourceSansProText type="SourceSansProBold" style={headerStyles.headerText}>
        Restaurants
      </SourceSansProText>
    </View>
  </SafeAreaView>
);

export default Header;
