import React from 'react';

import {withKnobs, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import Logo from './Logo';
import Container from '../container/Container';

const logoStories = storiesOf('Atoms/Logo', module);

logoStories.addDecorator(withKnobs);

logoStories
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Logo', () => <Logo name="logo" />);
