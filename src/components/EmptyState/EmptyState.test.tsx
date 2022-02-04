import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import EmptyState from './EmptyState';

test('EmptyState component should render correctly', () => {
  render(
    <EmptyState
      title="Example text"
      message={`Example large text for some test`}
    />,
  );
});
