/* eslint-disable react/no-array-index-key */

import React from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { MapView } from 'expo';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Ionicons,
  MaterialIcons,
  EvilIcons,
  FontAwesome5,
} from '@expo/vector-icons';

import { truncateString } from '../../utils/helpers';
import SourceSansProText from '../common/StyledText';
import ErrorAlert from '../common/ErrorAlert';
import placeholders from '../../assets/styles/base/placeholders';

import globalStyles from '../../assets/styles/base/global';
import restaurantStyles from '../../assets/styles/components/restaurant';

const LATITUDE_DELTA = 0.15;
const LONGITUDE_DELTA = 0.15;

export default class RestaurantScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const restaurant = this.props.navigation.getParam('data');
    return (
      <View style={restaurantStyles.viewWrapper}>
        <ScrollView>
          <ImageBackground
            source={{ uri: restaurant.image_url }}
            style={[
              restaurantStyles.image,
              { height: 300, borderRadius: 0 },
            ]}
          >
            <View style={restaurantStyles.imageContainer}>
              <View style={[globalStyles.row, globalStyles.m_t_lg, globalStyles.m_h_md]}>
                <View style={globalStyles.col_2}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('RestaurantList')}
                  >
                    <Ionicons
                      name="md-arrow-back"
                      size={30}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
                <View style={[globalStyles.col_10, { flexDirection: 'row-reverse' }]}>
                  <Ionicons
                    name="md-heart-empty"
                    size={30}
                    color="white"
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={[globalStyles.p_v_sm, { paddingHorizontal: 15 }]}>
            <View style={[globalStyles.row, globalStyles.p_t_xs, globalStyles.p_b_sm, { alignItems: 'center' }, restaurantStyles.borderBottom]}>
              <View style={globalStyles.col_3}>
                <Image
                  source={require('../../assets/images/placeholders/pizzaLogo.jpg')}
                  resizeMode="contain"
                  style={{ width: 70, height: 70 }}
                />
              </View>
              <View style={globalStyles.col_7}>
                <SourceSansProText type="SourceSansProSemiBold" style={restaurantStyles.title}>
                  {restaurant.name}
                </SourceSansProText>
                <View style={[globalStyles.row, { alignItems: 'center' }]}>
                  <SourceSansProText type="SourceSansProSemiBold" style={restaurantStyles.ratingText}>
                    {restaurant.rating}
                  </SourceSansProText>
                  {
                    Array(Math.round(restaurant.rating))
                      .fill(Math.round(restaurant.rating))
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
                  <SourceSansProText style={[{ marginLeft: 7 }, globalStyles.m_r_sm]}>
                    •
                  </SourceSansProText>
                  <SourceSansProText style={{ color: placeholders.darkGray }}>
                    {truncateString(restaurant.categories[0].title, 8)}
                  </SourceSansProText>
                </View>
              </View>
              <View style={globalStyles.col_2}>
                <View style={[
                    restaurantStyles.imageTextWrapper,
                    { backgroundColor: placeholders.gold },
                  ]}
                >
                  <SourceSansProText
                    type="SourceSansProSemiBold"
                    style={[restaurantStyles.imageText, { fontSize: 90 }]}
                  >
                    1.6 km
                  </SourceSansProText>
                </View>
              </View>
            </View>

            <View style={[globalStyles.row, globalStyles.p_v_sm, { alignItems: 'center' }, restaurantStyles.borderBottom]}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${restaurant.phone}`)
                    .catch(() => ErrorAlert());
                }}
                style={[globalStyles.col_3, { alignItems: 'center' }]}
              >
                <Ionicons
                  name="md-call"
                  size={25}
                  color={placeholders.darkGray}
                />
                <SourceSansProText style={restaurantStyles.optionsText}>
                  Call
                </SourceSansProText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(restaurant.url)
                    .catch(() => ErrorAlert());
                }}
                style={[globalStyles.col_3, { alignItems: 'center' }]}
              >
                <Ionicons
                  name="md-globe"
                  size={25}
                  color={placeholders.darkGray}
                />
                <SourceSansProText style={restaurantStyles.optionsText}>
                  Website
                </SourceSansProText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`maps://maps.google.com/maps?daddr=${restaurant.coordinates.latitude},${restaurant.coordinates.latitude}&amp;ll=`)
                    .catch(() => ErrorAlert());
                }}
                style={[globalStyles.col_3, { alignItems: 'center' }]}
              >
                <MaterialIcons
                  name="directions"
                  size={25}
                  color={placeholders.darkGray}
                />
                <SourceSansProText style={restaurantStyles.optionsText}>
                  Directions
                </SourceSansProText>
              </TouchableOpacity>
              <View style={[globalStyles.col_3, { alignItems: 'center' }]}>
                <Ionicons
                  name="md-chatbubbles"
                  size={25}
                  color={placeholders.darkGray}
                />
                <SourceSansProText style={restaurantStyles.optionsText}>
                  Invite
                </SourceSansProText>
              </View>
            </View>

            <View style={[globalStyles.row, globalStyles.p_v_md, restaurantStyles.borderBottom]}>
              <View style={[globalStyles.col_2, { alignItems: 'center' }]}>
                <Image
                  source={require('../../assets/images/icons/opentable.png')}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
              </View>
              <View style={globalStyles.col_9}>
                <SourceSansProText size={16} style={restaurantStyles.linkText}>
                  Book a table with Opentable
                </SourceSansProText>
              </View>
              <View style={globalStyles.col_1}>
                <MaterialIcons
                  name="chevron-right"
                  size={25}
                  color={placeholders.gray}
                />
              </View>
            </View>

            <View style={[globalStyles.row, globalStyles.p_v_md, restaurantStyles.borderBottom]}>
              <View style={[globalStyles.col_2, { alignItems: 'center' }]}>
                <Image
                  source={require('../../assets/images/icons/uber.png')}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
              </View>
              <View style={globalStyles.col_9}>
                <SourceSansProText size={16} style={restaurantStyles.linkText}>
                  Request a ride with Uber
                </SourceSansProText>
              </View>
              <View style={globalStyles.col_1}>
                <MaterialIcons
                  name="chevron-right"
                  size={25}
                  color={placeholders.gray}
                />
              </View>
            </View>

            <View style={[globalStyles.row, globalStyles.p_v_md, restaurantStyles.borderBottom]}>
              <View style={[globalStyles.col_2, { alignItems: 'center' }]}>
                <EvilIcons
                  name="clock"
                  size={30}
                  color={placeholders.darkGray}
                />
              </View>
              <View style={globalStyles.col_9}>
                <SourceSansProText size={16} style={restaurantStyles.linkText}>
                  Open Now (07-24h)
                </SourceSansProText>
              </View>
              <View style={globalStyles.col_1}>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={25}
                  color={placeholders.gray}
                />
              </View>
            </View>

            <View style={[globalStyles.row, globalStyles.p_v_md, restaurantStyles.borderBottom]}>
              <View style={[globalStyles.col_2, { alignItems: 'center' }]}>
                <FontAwesome5
                  name="book-reader"
                  size={20}
                  color={placeholders.darkGray}
                />
              </View>
              <View style={globalStyles.col_9}>
                <SourceSansProText size={16} style={restaurantStyles.linkText}>
                  Menu
                </SourceSansProText>
              </View>
              <View style={globalStyles.col_1}>
                <Ionicons
                  name="md-link"
                  size={25}
                  color={placeholders.gray}
                />
              </View>
            </View>

            <MapView.Animated
              style={restaurantStyles.map}
              provider={MapView.PROVIDER_GOOGLE}
              initialRegion={new MapView.AnimatedRegion({
                latitude: restaurant.coordinates.latitude,
                longitude: restaurant.coordinates.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              })}
              region={new MapView.AnimatedRegion({
                latitude: restaurant.coordinates.latitude,
                longitude: restaurant.coordinates.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              })}
            >
              <MapView.Marker
                coordinate={{
                  latitude: restaurant.coordinates.latitude,
                  longitude: restaurant.coordinates.longitude,
                }}
                title={restaurant.name}
              />
            </MapView.Animated>

          </View>
        </ScrollView>
        <View style={[
            globalStyles.bottom,
            globalStyles.p_v_sm,
            restaurantStyles.bottom,
          ]}
        >
          <SourceSansProText size={16} style={restaurantStyles.bottomText}>
            VIEW OFFERS
          </SourceSansProText>
        </View>
      </View>
    );
  }
}
