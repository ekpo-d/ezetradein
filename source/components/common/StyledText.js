import React from 'react';
import { Text } from 'react-native';

/**
 * Font component - displays text based on type and boldness.
 * @type {Component}
 */
const SourceSansProText = props => (
  <Text
    {...props}
    style={[
      props.style,
      {
        fontFamily: props.type || 'SourceSansPro',
        fontSize: props.size || props.style.fontSize,
      },
    ]}
  />
);

export default SourceSansProText;
