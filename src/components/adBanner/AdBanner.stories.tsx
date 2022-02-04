import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../container/Container';
import AdBanner from './AdBanner';

const buttonStories = storiesOf('Molecule/AdBanner', module);

buttonStories.addDecorator(withKnobs);

buttonStories
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Basic', () => (
    <AdBanner
      title={'¿Tienes sugerencias?'}
      description={'Completa nuestro formulario y ayúdanos a mejorar.'}
    />
  ));
