import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Divider from './Divider';
import Container from '../container/Container';

const logoStories = storiesOf('Atoms/Divider', module);
logoStories.addDecorator(withKnobs);

logoStories
  .addDecorator(story => <Container style={{ backgroundColor: '#fff' }}>{story()}</Container>)
  .add('Divider', () => (
    <Divider /* containerStyle={{borderColor: 'green'}} */ />
  ));

