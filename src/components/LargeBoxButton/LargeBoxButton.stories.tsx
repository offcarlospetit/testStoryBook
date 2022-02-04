import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../container/Container';
import LargeBoxButton from './LargeBoxButton';

const largeBoxButtonStories = storiesOf('Molecules/LargeBoxButton', module);

largeBoxButtonStories.addDecorator(withKnobs);

largeBoxButtonStories  
  .add('LargeBoxButton', () => (
    <Container>
      <LargeBoxButton
        title="accounts"
        iconName="person-money"        
      />
    </Container>
  ));
