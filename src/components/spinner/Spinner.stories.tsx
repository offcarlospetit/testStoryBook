import React from 'react';

import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import Spinner from './Spinner';
import SpinnerBasic from './SpinnerBasic';
import Container from '../container/Container';
import {boolean} from '@storybook/addon-knobs';

const spinnerStories = storiesOf('Atoms/Spinner', module);
spinnerStories.addDecorator(withKnobs);

spinnerStories
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Default', () => (
    <Spinner
      name="loader"
      isVisible={boolean('isVisible', false)}
      style={{width: 90, height: 90}}
    />
  ))
  .add('basic', () => (
    <SpinnerBasic
      name={'loader'}
      isVisible={boolean('isVisible', false)}
      style={{width: 40, height: 40}}
    />
  ));
