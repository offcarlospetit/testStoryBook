import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Picker from './Picker';
import Container from '../container/Container';
import {Colors} from '../..';

const logoStories = storiesOf('Molecule/Picker', module);

const options = [
  {value: '1', text: 'Test 1'},
  {value: '2', text: 'Test 2'},
  {value: '3', text: 'Test 3'},
];

const options2 = [
  {value: '1', text: 'Test 1'},
  {value: '2', text: 'Test 2'},
  {value: '3', text: 'Test 3'},
];

logoStories
  .addDecorator(story => (
    <Container
      style={{paddingVertical: 250, backgroundColor: Colors.NeutralWhite}}>
      {story()}
    </Container>
  ))
  .add('Picker', () => (
    <>
      <Picker
        selectedValue="1"
        modalTitle="Selecciona"
        placeHolder="selecciona"
        options={options}
        setSelectedValue={() => null}
      />
      <Picker
        selectedValue=""
        modalTitle="Selecciona"
        placeHolder="Tipo"
        options={options2}
        setSelectedValue={() => null}
      />
      <Picker
        disabled={true}
        selectedValue=""
        modalTitle="Selecciona deshabilitado"
        placeHolder="Selecciona deshabilitado"
        options={options2}
        setSelectedValue={() => null}
      />
    </>
  ));
