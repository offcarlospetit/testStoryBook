import React from 'react';
import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import GenericError from './GenericError';
import Container from '../container/Container';
import Button from '../button/Button';
import Scale from '../../utils/Scale';
const errorStories = storiesOf('Molecules/Error', module);
errorStories.addDecorator(withKnobs);

const buttonStyle = {paddingHorizontal: Scale(16), width: '100%'};
const containerStyleBtn = {width: '100%'};
const iconStyle = {width: Scale(66), height: Scale(61)};

errorStories
  .add('Error', () => (
    <Container>
      <GenericError
        containerStyle={{width: Scale(300), height: Scale(500)}}
        title={text('Error', 'account')}
        message="Test"
        iconName={'file-error'}
        iconStyle={iconStyle}
        button={
          <Button
            title="Back"
            onPress={() => console.log('pressed')}
            buttonStyle={buttonStyle}
            containerStyle={containerStyleBtn}
          />
        }
      />
    </Container>
  ))
  .add('Waiting', () => (
    <Container>
      <GenericError
        title={text('Waiting', 'Test example')}
        message="Title text example"
        iconName="file-clock"
        iconStyle={iconStyle}
        containerStyle={{alignItems: 'flex-start', width: '100%'}}>
        <Button
          title="Go"
          onPress={() => console.log('pressed')}
          buttonStyle={buttonStyle}
          containerStyle={containerStyleBtn}
        />
      </GenericError>
    </Container>
  ));
