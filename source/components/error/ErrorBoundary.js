/* eslint-disable no-undef */

import React from 'react';
import { View } from 'react-native';
import ErrorAlert from '../common/ErrorAlert';

/**
 * App wide error component.
 * Handles any error which might occur within the app.
 * @type {Component}
 */
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
