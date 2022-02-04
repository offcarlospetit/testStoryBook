import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../constants/colors';
import Scale from '../../../../../utils/Scale';
import IconSvg, { IconNameSvg } from '../../../../icon/IconSvg';
import Text from '../../../../text/Text';

export interface DefinitiveLockProps extends ViewProps {
  title: string;
  callTo: string;
  phoneNumber: string;
  bodyMessage: string;
  isDisabled?: boolean;
  iconName?: IconNameSvg;
  containerStyles?: StyleProp<ViewStyle>;
  onPressPhoneNumber?: () => void;
}

const setMarginTopLeft = (top: number, left: number) => (
  `margin-top: ${Scale(top)}px; 
   margin-left: ${Scale(left)}px;`
)

const DefinitiveLockContainer = styled.View`
  padding-top: ${Scale(6)}px;
  padding-bottom: ${Scale(16)}px;
  padding-right: ${Scale(15)}px;
  width: 100%;
  flex-flow: column nowrap;
  align-items: flex-start;
  border-radius: ${Scale(8)}px;
  border: ${Scale(1)}px solid ${Colors.NeutralLightGrey40};
`;

const BrokenCardIcon = styled(IconSvg)`
  height: ${Scale(66)}px;
  width: ${Scale(66)}px;
  margin-left: ${Scale(7)}px;
`;

const CardTitle = styled(Text)`
  ${setMarginTopLeft(5, 16)} 
  font-size: ${Scale(16)}px;  
  height: ${Scale(20)}px;
  line-height: ${Scale(20)}px;
  color: ${Colors.neutralDarkGrey70};
`;

const CardText = styled(Text)`
  ${setMarginTopLeft(16, 16)};
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  color: ${Colors.neutralDarkGrey70};
`;

const PhoneNumber = styled(Text)`
  color: ${Colors.PrimaryBlue50};  
`;

const DefinitiveLock: FC<DefinitiveLockProps> = (props: DefinitiveLockProps) => {
  const { title, callTo, phoneNumber, bodyMessage, isDisabled = false, iconName = 'broken-card', containerStyles, onPressPhoneNumber } = props;
  const textColor = isDisabled ? styles.disabledColor : styles.activeColor
  const onPressFunc = isDisabled ? () => null : onPressPhoneNumber
  return (    
    <DefinitiveLockContainer style={containerStyles}>
      <BrokenCardIcon name={iconName} />
      <CardTitle weight="700">{title}</CardTitle>
      <CardText weight="400">
        {callTo}
        {PhoneNumber && <PhoneNumber weight="600" onPress={onPressFunc} style={textColor}> {phoneNumber} </PhoneNumber>}
        {bodyMessage}
      </CardText>
    </DefinitiveLockContainer>    
  );
};

const styles = StyleSheet.create({
  activeColor: {
    color: Colors.PrimaryBlue50
  },
  disabledColor: {
    color: Colors.NeutralLightGrey60
  },
})

export default DefinitiveLock;