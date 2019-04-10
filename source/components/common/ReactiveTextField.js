import React from 'react';
import {
  View,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { inject, observer } from 'mobx-react';

import placeholders from '../../assets/styles/base/placeholders';
import headerStyles from '../../assets/styles/components/header';

/**
 * Searchbar component which handles the display
 * of the input field and takes in input.
 * @type {Component}
 */
@inject('RestaurantStore')
@observer
export default class ReactiveTextField extends React.Component {
  render() {
    return (
      <View style={{
          display: this.props.RestaurantStore.showSearchbar
          ? 'flex'
          : 'none',
        }}
      >
        <TextField
          style={headerStyles.input}
          ref={input => {
            if (input != null) {
              this.props.RestaurantStore.setClassProps([
                {
                  name: 'searchbarRef',
                  value: input,
                },
              ]);
            }
          }}
          label=""
          textColor={placeholders.darkGray}
          tintColor={placeholders.darkGray}
          fontSize={14}
          labelHeight={0}
          lineWidth={0}
          activeLineWidth={0}
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          enablesReturnKeyAutomatically
          value={this.props.RestaurantStore.searchString}
          onChangeText={searchString => {
            this.props.RestaurantStore.setClassProps([
              {
                name: 'searchString',
                value: searchString,
              },
            ]);
          }}
        />
      </View>
    );
  }
}
