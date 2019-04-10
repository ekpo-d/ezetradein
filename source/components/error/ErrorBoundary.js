/* eslint-disable no-undef */

import React from 'react';
import { View } from 'react-native';
import ErrorAlert from '../common/ErrorAlert';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      ErrorAlert();
      return (
        <View />
      );
    }
    return this.props.children;
  }
}
