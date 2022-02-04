import React from 'react';
import { render } from '@testing-library/react-native';
import ToastUIKIT from './ToastUIKIT';

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android',
  select: () => null,
}));
test('ToastUIKIT success component should render correctly ', () => {
  render(
    <ToastUIKIT
      text1="Completamos los campos con la 
       nueva account."
      type="success"
    />,
  );
});

test('ToastUIKIT warning component should render correctly ', () => {
  render(
    <ToastUIKIT
      text1="Completamos los campos con la 
       nueva account."
      type="warning"
    />,
  );
});
test('ToastUIKIT error component should render correctly ', () => {
  render(
    <ToastUIKIT
      text1="Completamos los campos con la 
       nueva account."
      type="error"
    />,
  );
});
