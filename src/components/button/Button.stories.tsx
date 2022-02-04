import React from 'react';

import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';
import Container from '../container/Container';

const buttonStories = storiesOf('Atoms/Button', module);

buttonStories.addDecorator(withKnobs);

buttonStories
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Primary', () => <Button title={text('title', 'Accept')} />)
  .add('Disabled', () => <Button title={text('title', 'Disabled')} disabled />)
  .add('Loading', () => <Button title={text('title', 'Loading')} loading />)
  .add('Outline', () => (
    <Button title={text('title', 'Accept')} type="outline" />
  ));
