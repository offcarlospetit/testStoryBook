import React from 'react';
import { Platform, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import Text from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import type { IconFontName } from '../icon/IconFont';
import IconFont from '../icon/IconFont';

export interface AlertProps extends ViewProps {
  message: string;
  icon?: IconFontName;
}

const AlertContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const ItemIcon = styled(IconFont)`
  margin-right: ${Scale(8)}px;
  margin-top: ${Scale(6)}px;
`;

const AlertText = styled(Text)`
  font-size: ${Scale(14)}px;  
  text-align: left;
  color: ${Colors.ProfileMuyConservador70};
  
`;

const AlertTextAndroid = styled(Text)`
  font-size: ${Scale(20)}px;  
  height: ${Scale(40)}px;
  color: ${Colors.ProfileMuyConservador70};
`;

const Alert = ({ message, icon = 'uniED26' }: AlertProps) => {
  return (
    <AlertContainer>
      {Platform.OS == 'ios' ? (
        <ItemIcon name={icon} size={Scale(8)} color={Colors.primaryBlue40} />
      ) : (
        <AlertTextAndroid weight="500">{'* '}</AlertTextAndroid>
      )}
      <AlertText
        style={{
          flex: 1,
          textAlign: 'left',
        }}
        weight="500"
      >
        {message}
      </AlertText>
    </AlertContainer>
  );
};

export default Alert;
