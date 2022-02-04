import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import ToastUIKIT from './ToastUIKIT';
import Container from '../container/Container';

const toastStories = storiesOf('Molecules/ToastUIKIT', module);

toastStories.addDecorator(withKnobs);

toastStories
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Toast success', () => (
    <ToastUIKIT
      text1="Completamos los campos con la 
  nueva account."
      type="success"
    />
  ))
  .add('Toast warning', () => (
    <ToastUIKIT text1="Falta que completes datos." type="warning" />
  ));


  