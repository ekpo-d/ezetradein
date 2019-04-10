import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('Root', () => {
  it('should render correctly', async () => {
    const tree = shallow(
      <App />,
    );
    expect(tree).toMatchSnapshot();
  });
});
