import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Text from './Text';
import Container from '../container/Container';

storiesOf('Atoms/Text', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('default', () => (
    <Text>
      {text(
        'text',
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
      )}
    </Text>
  ))
  .add('bold', () => (
    <Text weight={'bold'}>
      {text(
        'text',
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
      )}
    </Text>
  ));
