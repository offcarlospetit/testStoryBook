import React, { FC, useContext } from 'react';
import type { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../constants/colors';
import Scale from '../../../../utils/Scale';
import DebitCardStatus from './debit/DebitCardStatus';
import CreditCardStatus from './credit/CreditCardStatus';
import { MetricsContext } from '../../../metricsProvider/MetricsProvider';
import ShadowStyles from '../../../../utils/ShadowStyles';

export type cardType = 'debit' | 'credit';

export interface GenericCardStatusProps extends TouchableOpacityProps {
  cardNumber: string;
  type: cardType;
  isActive: boolean;
  title?: string;
  productTypeCode?: string;
  containerStyles?: StyleProp<TextStyle>;
  activeStatusLabel: string;
  blockedStatusLabel: string;
  metricEventName?: string;
  metricEventPayload?: any;
  onPress?: () => void;
}

interface Container extends TouchableOpacityProps {
  isDebitCard?: boolean;
}

const Container = styled.TouchableOpacity<Container>`
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${Scale(80)}px;
  padding: ${Scale(16)}px; 
  border-radius: ${Scale(8)}px;
  border: ${props =>
    props.isDebitCard
      ? Colors.PrimaryBlue50
      : '1px solid ' + Colors.NeutralLightGrey30};
  background: ${props =>
    props.isDebitCard ? Colors.PrimaryBlue50 : Colors.NeutralWhite};
  margin-bottom: ${Scale(16)}px;
`;

const GenericCardStatus: FC<GenericCardStatusProps> = (
  props: GenericCardStatusProps,
) => {
  const {
    title = '',
    cardNumber,
    productTypeCode,
    type,
    isActive,
    containerStyles,
    blockedStatusLabel,
    activeStatusLabel,
    metricEventName, 
    metricEventPayload,
    onPress,
  } = props;
  const isDebitCard = type === 'debit';

  const { handleAnalyticsEventOnPress} = useContext(MetricsContext);

  return (
    <Container
      style={[containerStyles, !isDebitCard && ShadowStyles.basicShadow]}
      isDebitCard={isDebitCard}
      onPress={() => handleAnalyticsEventOnPress(metricEventName, metricEventPayload, onPress)}
    >
      {isDebitCard ? (
        <DebitCardStatus
          title={title}
          cardNumber={cardNumber}
          isActive={isActive}
        />
      ) : (
        <CreditCardStatus
          cardNumber={cardNumber}
          productTypeCode={productTypeCode}
          isActive={isActive}
          blockedStatusLabel={blockedStatusLabel}
          activeStatusLabel={activeStatusLabel}
        />
      )}
    </Container>
  );
};

export default GenericCardStatus;
