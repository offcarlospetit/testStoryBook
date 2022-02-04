import React from 'react';
import {storiesOf} from '@storybook/react-native';
import { text, boolean, select } from '@storybook/addon-knobs';

import NewInput from './NewInput';
import Container from '../container/Container';
import type { IconName } from '../icon/Icon';

storiesOf('Atoms/NewInput', module)
  .addDecorator((story) => (
      <Container>{story()}</Container>
  ))
  .add('Big', () => <NewInput
    inputSize='big'
    placeholderType='staticOnTop'
    placeholder={text('placeholder', 'Monto')}
    defaultValue={text('Default Value', '$')}
   />)
  .add('Big with error', () => <NewInput
    inputSize='big'
    placeholderType='staticOnTop'
    placeholder={text('placeholder', 'Monto')}
    defaultValue={text('Default Value', '$')}
    showError={true}
   />)
  .add('Big with icon', () => <NewInput
    inputSize='big'
    placeholderType='staticOnTop'
    placeholder={text('placeholder', 'Monto')}
    defaultValue={text('Default Value', '$')}
    showError={boolean('show error', false)}
    rightIconName={select('Right Icon Name', {
      Next: 'next',
      Search: 'search',
      Person: 'person',
    }, 'search') as IconName}
   />)
  .add('Normal', () => <NewInput
    inputSize='normal'
    placeholderType='inline'
    placeholder={text('placeholder', 'Si lo deseas, escribe un mensaje')}
    defaultValue={text('Default Value', '')}
  />)
  .add('Normal with error', () => <NewInput
    inputSize='normal'
    placeholderType='inline'
    placeholder={text('placeholder', 'Si lo deseas, escribe un mensaje')}
    defaultValue={text('Default Value', '')}
    showError={true}
    errorMessage='El mail no está bien escrito, vuelve a intentarlo'
   />)
  .add('Normal with icon', () => <NewInput
    inputSize='normal'
    placeholderType='inline'
    placeholder={text('placeholder', 'Si lo deseas, escribe un mensaje')}
    defaultValue={text('Default Value', '')}
    showError={boolean('show error', false)}
    rightIconName={select('Right Icon Name', {
      Next: 'next',
      Search: 'search',
      Person: 'person',
    }, 'search') as IconName}
   />)
