import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../../container/Container';
import BackButton from './BackButton';

const BackButtonStories = storiesOf('Atom/BackButton', module);
BackButtonStories.addDecorator(withKnobs);

BackButtonStories
  .addDecorator((story) => <Container style={{backgroundColor: '#fff'}}>{story()}</Container>)
  .add('BackButton', () =>
    <BackButton
      color={'orange'}
      onPress={() => null}
    />
  )