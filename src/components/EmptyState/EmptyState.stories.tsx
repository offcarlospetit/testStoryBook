import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import Container from '../container/Container';
import EmptyState from './EmptyState';
import {Colors} from '../..';

const emptyStateStories = storiesOf('Molecules/EmptyState', module);
emptyStateStories.addDecorator(withKnobs);

emptyStateStories
  .addDecorator(story => (
    <Container style={{backgroundColor: Colors.NeutralWhite}}>
      {story()}
    </Container>
  ))
  .add('EmptyState', () => (
    <EmptyState
      title="Some example of text"
      message={`Some text large example`}
    />
  ));
