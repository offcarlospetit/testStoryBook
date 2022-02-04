import React from 'react';
import {storiesOf} from '@storybook/react-native';
import IconCard from './IconCard';
import Container from '../container/Container';
import Colors from '../../constants/colors';

const logoStories = storiesOf('Atoms/IconCard', module);

logoStories
  .addDecorator(story => (
    <Container style={{paddingVertical: 250, backgroundColor: '#fff'}}>
      {story()}
    </Container>
  ))
  .add('IconCard Whatsapp', () => (
    <>
      <IconCard
        iconName="agua"
        color={Colors.TemporalGreen}
        onPress={() => console.log('Pressed')}
        backgroundColor={Colors.TemporalGreen10}
        description="Chatear con servicio al cliente"
      />
    </>
  ))
  .add('IconCard Block Cards', () => (
    <>
      <IconCard
        iconName="agua"
        color={Colors.ProfileMuyConservador60}
        onPress={() => console.log('Pressed')}
        backgroundColor={Colors.ProfileMuyConservador10}
        description="Bloquear tarjetas"
      />
    </>
  ))
  .add('IconCard Tef', () => (
    <>
      <IconCard
        iconName="agua"
        color={Colors.TemporalBlueGreen}
        onPress={() => console.log('Pressed')}
        backgroundColor={Colors.TemporalBlueGreen10}
        description="Transferir  a nuevo contacto"
      />
    </>
  ))
  .add('IconCard Pay Cards', () => (
    <>
      <IconCard
        iconName="agua"
        color={Colors.AdditionalMedallion40}
        onPress={() => console.log('Pressed')}
        backgroundColor={Colors.TemporalYellow10}
        description="Pagar tarjetas"
      />
    </>
  ));
