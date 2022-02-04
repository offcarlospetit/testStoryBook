import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import Text from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';

export interface StickyAmountToPayProps extends ViewProps {
  label: string;
  value: string;
  buttonText: string;
  containerStyles?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const getTextBasicStyles = (
  fontSize: number,
  lineHeight: number,
  bgColor: string,
) => {
  return `
    font-size: ${Scale(fontSize)}px;
    line-height: ${Scale(lineHeight)}px;  
    color: ${bgColor};`;
};

const StickyAmountToPayContainer = styled.View`
  width: 100%;
  height: ${Scale(126)}px;
  padding: ${Scale(16)}px;
  flex-direction: row;
  justify-content: space-between;
  background: ${Colors.NeutralWhite};
`;

const AmountContainer = styled.View`
  margin-top: ${Scale(3)}px;
  flex:1;
`;

const AmountLabel = styled(Text)`
  margin-bottom: ${Scale(8)}px;  
  ${getTextBasicStyles(16, 20, Colors.NeutralDarkGrey80)}
`;

const AmountValue = styled(Text)`
  ${getTextBasicStyles(20, 26, Colors.NeutralDarkGrey80)}
`;

const ContainerButton = styled(TouchableOpacity)`
  height: ${Scale(60)}px;
  width: ${Scale(159)}px;
  border-radius: ${Scale(48)}px;
  background-color: ${Colors.PrimaryBlue50}
  justify-content: center;
`;

const TextButton = styled(Text)`
  text-align: center;
  ${getTextBasicStyles(16, 32, Colors.NeutralWhite)}
`;

const StickyAmountToPay = ({
  label,
  value,
  buttonText,
  containerStyles,
  onPress,
}: StickyAmountToPayProps) => {
  return (
    <StickyAmountToPayContainer
      style={[
        containerStyles,
        {
          borderColor: Colors.NeutralLightGrey50,
          shadowColor: Colors.SombraCardMobile,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10,

          elevation: 2,
        },
      ]}
    >
      <AmountContainer>
        <AmountLabel weight="400" style={{ lineHeight: Scale(30) }}>
          {label}
          <AmountValue weight="700">{value}</AmountValue>
        </AmountLabel>
      </AmountContainer>
      <ContainerButton onPress={onPress}>
        <TextButton weight="700">{buttonText}</TextButton>
      </ContainerButton>
    </StickyAmountToPayContainer>
  );
};

export default StickyAmountToPay;
