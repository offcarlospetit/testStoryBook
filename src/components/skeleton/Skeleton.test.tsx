import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Skeleton from './Skeleton';

describe('Skeleton component with variants', () => {
  test('Skeleton component should render correctly debtPayment', () => {
    render(<Skeleton type="debtPayment" />);
  });
  test('Skeleton component should render correctly debtsPaymentTitle', () => {
    render(<Skeleton type="debtsPaymentTitle" />);
  });
  test('Skeleton component should render correctly contact item', () => {
    render(<Skeleton type="contactItem" />);
  });
  test('Skeleton component should render correctly containerTitle', () => {
    render(<Skeleton type="containerTitle" />);
  });
  test('Skeleton component should render correctly debitContainer', () => {
    render(<Skeleton type="debitContainer" />);
  });
  test('Skeleton component should render correctly movementsItem', () => {
    render(<Skeleton type="movementsItem" />);
  });
  test('Skeleton component should render correctly CardsMenuTitle', () => {
    render(<Skeleton type="CardsMenuTitle" />);
  });
  test('Skeleton component should render correctly CardsMenuItem', () => {
    render(<Skeleton type="CardsMenuItem" />);
  });
  test('Skeleton component should render correctly movementsDebitTitle', () => {
    render(<Skeleton type="movementsDebitTitle" />);
  });
  test('Skeleton component should render correctly MovementsSummaryTC', () => {
    render(<Skeleton type="MovementsSummaryTC" />);
  });
  test('Skeleton component should render correctly MovementsSummaryTCPrevius', () => {
    render(<Skeleton type="MovementsSummaryTCPrevius" />);
  });
});
