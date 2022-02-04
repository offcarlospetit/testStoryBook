import React from 'react';
import styled from 'styled-components/native';

import type {ViewProps, StyleProp, ViewStyle} from 'react-native';
import Icon from '../icon/IconSvg';
import Text from '../text/Text';
import Scale from '../../utils/Scale';

export type TypeEmpty = 'search' | 'error';

export interface EmptyProps extends ViewProps {
  type?: TypeEmpty;
  message: string;
  style?: StyleProp<ViewStyle>;
}

const UIEmpty = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const UIIcon = styled(Icon)`
  height: ${Scale(87.27)}px;
  width: ${Scale(87.27)}px;
  align-items: center;
  justify-content: center;
`;

const TxtMessage = styled(Text)`
  margin-top: ${Scale(32)}px;
  text-align: center;
  font-size: ${Scale(16)}px;
  line-height: ${Scale(24)}px;
`;

const Empty: React.FC<EmptyProps> = (props) => {
  const {message, style} = props;
  return (
    <UIEmpty style={style}>
      <UIIcon name='search-without-result' activeOpacity={1} />
      <TxtMessage weight="500">{message}</TxtMessage>
    </UIEmpty>
  );
};

export default Empty;
