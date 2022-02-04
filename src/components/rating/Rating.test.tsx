import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Rating from './Rating';

test('Rating component should render correctly', () => {
  render(<Rating count={5}  reviews={[]} defaultRating={3} size={30}/>);
});

