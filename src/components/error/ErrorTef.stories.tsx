import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';

import ErrorTef from './ErrorTef';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';

const ContainerErrorTef = styled.View`
  flex: 1;
  padding-left: ${Scale(16)}px;
  padding-right: ${Scale(16)}px;
  background-color: ${Colors.grey2};
`;

storiesOf('Molecules/ErrorTef', module)
  .addDecorator(story => <ContainerErrorTef>{story()}</ContainerErrorTef>)
  .add('Example Error', () => (
    <ErrorTef
      title={text('Title', 'Title Example')}
      message={text('Message', 'No text example')}
      txtBtn={text('Button Label', 'Back')}
    />
  ));
