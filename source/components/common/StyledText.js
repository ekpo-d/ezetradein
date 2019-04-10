import React from 'react';
import { Text } from 'react-native';

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
