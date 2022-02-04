import React from 'react';
import type { ViewProps } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
export interface SeparatorProps extends ViewProps {}

const SeparatorUI = styled.View`
  width:100%;
  border: ${Scale(1)}px solid ${Colors.NeutralLightGrey20};
`;

const Separator: React.FC<SeparatorProps> = props => {
  const { style } = props;

  return <SeparatorUI style={style} />;
};

export default Separator;
