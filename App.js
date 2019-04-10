/* eslint-disable no-console */

import React from 'react';
import {
  Platform,
  StatusBar,
  View,
} from 'react-native';
import {
  AppLoading,
  Font,
  Asset,
} from 'expo';
import { Provider } from 'mobx-react';
import Stores from './source/stores';
import AppContainer from './source/components/app/AppContainer';
import ErrorBoundary from './source/components/error/ErrorBoundary';

import appStyles from './source/assets/styles/components/app';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./source/assets/images/icons/opentable.png'),
      require('./source/assets/images/icons/settings.png'),
      require('./source/assets/images/icons/uber.png'),
      require('./source/assets/images/placeholders/pizza.jpg'),
      require('./source/assets/images/placeholders/pizzaLogo.jpg'),
    ]),
    Font.loadAsync({
      SourceSansPro: require('./source/assets/fonts/SourceSansPro-Regular.ttf'),
      SourceSansProSemiBold: require('./source/assets/fonts/SourceSansPro-SemiBold.ttf'),
      SourceSansProBold: require('./source/assets/fonts/SourceSansPro-Bold.ttf'),
      SourceSansProBlack: require('./source/assets/fonts/SourceSansPro-Black.ttf'),
    }),
  ]);

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <ErrorBoundary>
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._loadResourcesAsync}
            onFinish={this._handleFinishLoading}
          />
        </ErrorBoundary>
      );
    }
    return (
      <Provider {...Stores}>
        <ErrorBoundary>
          <View style={appStyles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppContainer />
          </View>
        </ErrorBoundary>
      </Provider>
    );
  }
}
