// import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Highlighter from './Highlighter';
import Container from '../container/Container';
import {text} from '@storybook/addon-knobs';
import Colors from '../../constants/colors';

storiesOf('Molecules/Highlight', module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('Default', () => (
    <Highlighter
      highlightStyle={{backgroundColor: Colors.SemanticWarningYellow10}}
      searchWords={[
        text('primera búsqueda', 'es'),
        text('segunda búsqueda', 'bús'),
      ]}
      textToHighlight={text(
        'texto',
        'Sobre este texto se va a realizar la búsqueda',
      )}
    />
  ));
