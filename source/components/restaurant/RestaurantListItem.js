/* eslint-disable react/no-array-index-key */

import React from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import { truncateString } from '../../utils/helpers';
import SourceSansProText from '../common/StyledText';
import placeholders from '../../assets/styles/base/placeholders';

import globalStyles from '../../assets/styles/base/global';
import restaurantStyles from '../../assets/styles/components/restaurant';

/**
 * Displays individual restaurant tiles within the restarant list component.
 * @type {Component}
 */
const RestaurantItem = props => (
  <View style={restaurantStyles.card}>
    <ImageBackground
      source={{ uri: props.restaurant.image_url }}
      imageStyle={{ borderRadius: 5 }}
      style={restaurantStyles.image}
    >
      <View style={restaurantStyles.imageContainer}>
        <View style={[globalStyles.row, globalStyles.p_h_md, globalStyles.p_v_sm]}>
          <View style={globalStyles.col_2}>
            <View style={restaurantStyles.imageTextWrapper}>
              <SourceSansProText type="SourceSansProSemiBold" style={restaurantStyles.imageText}>
                1.6 km
              </SourceSansProText>
            </View>
          </View>
          <View style={[globalStyles.col_10, { flexDirection: 'row-reverse' }]}>
            <Ionicons
              name="md-heart-empty"
              size={25}
              color="white"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
    <View style={[globalStyles.p_v_sm, globalStyles.p_h_md]}>
      <View style={[globalStyles.row, { alignItems: 'center' }]}>
        <View style={globalStyles.col_8}>
          <SourceSansProText type="SourceSansProSemiBold" style={restaurantStyles.title}>
            {props.restaurant.name}
          </SourceSansProText>
        </View>
        <View style={globalStyles.col_4}>
          <SourceSansProText style={restaurantStyles.typeText}>
            {truncateString(props.restaurant.categories[0].title.toUpperCase(), 8)}
          </SourceSansProText>
        </View>
      </View>
      <View style={[globalStyles.row, { alignItems: 'center' }]}>
        <SourceSansProText type="SourceSansProSemiBold" style={restaurantStyles.ratingText}>
          {props.restaurant.rating}
        </SourceSansProText>
        {
          Array(Math.round(props.restaurant.rating))
            .fill(Math.round(props.restaurant.rating))
            .map((elem, index) => (
              <Ionicons
                key={`rating-${index}`}
                name="md-star"
                size={11}
                color={placeholders.gold}
                style={globalStyles.m_r_xs}
              />
            ))
        }
      </View>
    </View>
  </View>
);

export default RestaurantItem;
