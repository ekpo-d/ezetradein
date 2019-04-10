import React from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import { Svg } from 'expo';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import globalStyles from '../../assets/styles/base/global';

const { width } = Dimensions.get('window');
const blockWidth = width - 30;

/**
 * Loading tiles component which shows in the
 * restaurants list till actual data is received.
 * @type {Component}
 */
const LoadingScreen = () => (
  <View>
    <View style={globalStyles.m_b_sm}>
      <SvgAnimatedLinearGradient height={200} width={blockWidth}>
        <Svg.Rect x="0" y="0" rx="5" ry="5" width="100%" height="200" />
      </SvgAnimatedLinearGradient>
    </View>
    <View style={globalStyles.m_b_sm}>
      <SvgAnimatedLinearGradient height={200} width={blockWidth}>
        <Svg.Rect x="0" y="0" rx="5" ry="5" width="100%" height="200" />
      </SvgAnimatedLinearGradient>
    </View>
    <View style={globalStyles.m_b_sm}>
      <SvgAnimatedLinearGradient height={200} width={blockWidth}>
        <Svg.Rect x="0" y="0" rx="5" ry="5" width="100%" height="200" />
      </SvgAnimatedLinearGradient>
    </View>
    <View style={globalStyles.m_b_sm}>
      <SvgAnimatedLinearGradient height={200} width={blockWidth}>
        <Svg.Rect x="0" y="0" rx="5" ry="5" width="100%" height="200" />
      </SvgAnimatedLinearGradient>
    </View>
  </View>
);

export default LoadingScreen;
