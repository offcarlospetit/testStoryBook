import {act, fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Picker from './Picker';

const options = [
  {value: '1', text: 'Test 1'},
  {value: '2', text: 'Test 2'},
  {value: '3', text: 'Test 3'},
];

const getData = () => {
  return '1';
};

test('Picker component should render correctly', () => {
  render(
    <Picker
      selectedValue=""
      modalTitle="Select"
      placeHolder="Tipo"
      options={[]}
      setSelectedValue={() => null}
    />,
  );
});

test('Picker component should render correctly selected', () => {
  render(
    <Picker
      selectedValue="1"
      modalTitle="Select"
      placeHolder="Tipo"
      options={options}
      setSelectedValue={() => getData}
    />,
  );
});

test('Picker component should render disabled', () => {
  render(
    <Picker
      disabled={true}
      selectedValue="1"
      modalTitle="Select"
      placeHolder="Select"
      options={options}
      setSelectedValue={() => getData}
    />,
  );
});

test('Picker component should render and reset modal', () => {
  render(
    <Picker
      selectedValue=""
      modalTitle="Select"
      placeHolder="Select"
      options={options}
      setSelectedValue={() => getData}
      isOpenModal={true}
      resetIsOpenModal={value => value}
    />,
  );
});

test('Picker component should render and be pressed', async () => {
  const {getByTestId} = render(
    <Picker
      selectedValue=""
      modalTitle="Select"
      placeHolder="Select"
      options={options}
      setSelectedValue={() => getData}
      isOpenModal={true}
      isInput={true}
    />,
  );

  await act(async () => {
    const btn = getByTestId('pickerId');
    fireEvent.press(btn);
  });
});
