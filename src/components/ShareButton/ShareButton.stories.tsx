import React from 'react';
import { storiesOf} from '@storybook/react-native';
import ShareButton from './ShareButton';
import Container from '../container/Container';

const shareButtonStories = storiesOf('Molecule/storybook', module);

shareButtonStories
  .addDecorator((story) => <Container style={{backgroundColor: '#fff'}}>{story()}</Container>)
  .add('ShareButton', () =>
    <ShareButton
        title='Compartir'
        onPress={() => null}        
    />,
  )
