import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Skeleton from './Skeleton';
import Container from '../container/Container';
import {Colors} from '../..';

const logoStories = storiesOf('Atoms/Skeleton', module);

logoStories
  .addDecorator(story => (
    <Container style={{backgroundColor: Colors.NeutralWhite}}>
      {story()}
    </Container>
  ))
  .add('Test 1', () => <Skeleton type="movementsItem" />)
  .add('Test 2 ', () => <Skeleton type="movementsDebitTitle" />)
  .add('Test 3', () => <Skeleton type="CardsMenuTitle" />)
  .add('Test 4', () => <Skeleton type="CardsMenuItem" />)
  .add('Test 5', () => <Skeleton type="MovementsSummaryTC" />)
  .add('Test 6', () => <Skeleton type="MovementsSummaryTCPrevius" />)
  .add('Test 6', () => (
    <Skeleton type="containerTitle" skeletonStyle={{width: 141, height: 10}} />
  ))
  .add('Test 7', () => <Skeleton type="contactItem" />)
  .add('Test 8', () => <Skeleton type="debitContainer" />)
  .add('Test 9', () => <Skeleton type="debtsPaymentTitle" />)
  .add('Test 10', () => <Skeleton type="debtPayment" />);
