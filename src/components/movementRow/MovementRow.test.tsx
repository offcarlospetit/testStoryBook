import { render } from '@testing-library/react-native';
import React from 'react';
import { Platform } from 'react-native';
import MovementRow from './MovementRow';

describe('MovementRow Component', () => {
  test('Should renders correctly with icon type 1', () => {
    render(
      <MovementRow
        arrowIconType={1}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon type 2', () => {
    render(
      <MovementRow
        arrowIconType={2}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type 100', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'100'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type 200', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'200'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type 300', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'300'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type 400', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'400'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type 500', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'500'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type 600', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'600'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type 700', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'700'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type 800', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'800'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type 900', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'900'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type 1000', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'1000'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type when movements is deposit and send categoryType', () => {
    render(
      <MovementRow
        arrowIconType={0}
        categoryType={'200'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders correctly with icon category Type undefined', () => {
    render(
      <MovementRow
        arrowIconType={1}
        categoryType={'2000'}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Should renders with uncharged new props movements, ios Platform', () => {
    render(
      <MovementRow
        arrowIconType={0}
        categoryType={'200'}
        description="Test description"
        amount="12000"
        type="debitCard"
        textInstallment='Test textInstallment'
        isUncharged={true}
      />,
    );
  });
  test('Should renders with uncharged new props movements, android Platform', () => {
    Platform.OS = 'android'
    render(
      <MovementRow
        arrowIconType={0}
        description="Test description"
        amount="12000"
        type="debitCard"
        textInstallment='Test textInstallment'
        isUncharged={true}
      />,
    );
  });
  test('Should renders with title and must be clickable', () => {
    render(
      <MovementRow
        arrowIconType={0}
        title="Test title"
        amount="12000"
        type="debitCard"
        textInstallment='Test textInstallment'
        isUncharged={true}
        onClick={() => null}
      />,
    );
  });
});

