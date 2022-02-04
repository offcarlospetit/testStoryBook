import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Text from './Text';
test('Text component should render correctly', () => {
  render(<Text weight="100" />);
});
test('Text component should render correctly', () => {
  render(<Text weight="200" />);
});
test('Text component should render correctly', () => {
  render(<Text weight="300" />);
});
test('Text component should render correctly', () => {
  render(<Text weight="400" />);
});
test('Text component should render correctly', () => {
  render(<Text weight="500" />);
});
test('Text component should render correctly', () => {
  render(<Text weight="600" />);
});
test('Text component should render correctly', () => {
  render(<Text weight="700" />);
});
test('Text component should render correctly', () => {
  render(<Text weight="800" />);
});
test('Text component should render correctly', () => {
  render(<Text weight="900" />);
});
test('Text component should render correctly', () => {
  render(<Text weight="bold" />);
});
test('Text component should render correctly', () => {
  render(<Text weight="normal" />);
});
test('Text component should render correctly', () => {
  render(<Text />);
});
