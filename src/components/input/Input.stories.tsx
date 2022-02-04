import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Input from './Input';
import Container from '../container/Container';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms/Input', module)
  .addDecorator((story) => (
      <Container>{story()}</Container>
  ))
  .add('Basic input', () => <Input placeholder={'BASIC INPUT'} />)
  .add('Input with icon', () => (
    <Input
      placeholder="INPUT WITH ICON"
      rightIcon={{type: 'font-awesome', name: 'info-circle'}}
    /> 
  ))
  .add('Input pass', () => (
    <Input
      placeholder="INPUT WITH ICON"
      rightIcon={{type: 'font-awesome', name: text('name', 'lock')}}
      secureTextEntry={true}
    />));