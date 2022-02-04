import React, { useContext } from 'react';
import { View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { MetricsContext } from '../metricsProvider/MetricsProvider';
import Text from '../text/Text';
import Scale from '../../utils/Scale';
import Colors from '../../constants/colors';
import Surface from '../surface/Surface';
import Button from '../button/Button';
import IconLottie from '../icon/IconLottie';

export interface TicketProps {
  title: string;
  subTitle: string;
  amountTitle: string;
  amountValue: string;
  cardTitle: string;
  cardValue: string;
  paymentTypeTitle: string;
  paymentTypeValue: string;
  accountTitle: string;
  accountValue: string;
  dateValue: string;
  operationNumber: string;
  buttonTitle: string;
  metricEventName?: string;
  metricEventPayload?: any;
  onPress: () => void;
  dollarValueTitle?: string;
  dollarValueAmount?: string;
}

const getTextStyles = (
  size: number,
  lineHeight: number,
  marginBottom: number,
) => {
  return `
    font-size: ${Scale(size)}px;
    line-height: ${Scale(lineHeight)}px;
    margin-bottom: ${Scale(marginBottom)}px;`;
};

const getHorizontalTableBorders = (type: string) => {
  return `
    border-${type}-width: ${Scale(1)}px;
    border-${type}-color: ${Colors.neutralLightGrey20};`;
};

const TicketContainer = styled.View`
  background: ${Colors.grey2};
  height: 100%;
  width: 100%;
  padding: ${Scale(84)}px ${Scale(16)}px;
`;

const TextTitle = styled(Text)`
  ${getTextStyles(18, 24, 56)}  
  color: ${Colors.NeutralDarkGrey90};
`;

const AmmountContainer = styled.View`
  margin-bottom: ${Scale(10)}px;
`;

const AmountTitle = styled(Text)`
  ${getTextStyles(14, 20, 4)}
  color: ${Colors.neutralDarkGrey70};
`;

const AmountValue = styled(Text)`
  ${getTextStyles(18, 24, 0)}
  color: ${Colors.NeutralDarkGrey90};  
`;

const Table = styled.View`
  ${getHorizontalTableBorders('top')}
  ${getHorizontalTableBorders('bottom')}  
  padding-vertical: ${Scale(10)}px;
  margin-bottom: ${Scale(16)}px;
`;

const ContentRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  line-height: ${Scale(24)}px;
  margin-vertical: ${Scale(8)}px;
`;

const RowTitle = styled(Text)`
  ${getTextStyles(14, 24, 0)}
  color: ${Colors.NeutralLightGrey60};
`;

const RowValue = styled(Text)`
  ${getTextStyles(14, 24, 0)}
  color: ${Colors.NeutralDarkGrey90};
`;

const FooterText = styled(Text)`
  ${getTextStyles(12, 16, 0)}
  color: ${Colors.neutralDarkGrey70};
  text-align: center;
`;

const customSurfaceStyles = {
  marginBottom: Scale(56),
} as ViewStyle;

const Ticket = (props: TicketProps) => {
  const {
    title,
    amountTitle,
    amountValue,
    cardTitle,
    cardValue,
    paymentTypeTitle,
    paymentTypeValue,
    accountTitle,
    accountValue,
    dateValue,
    operationNumber,
    buttonTitle,
    metricEventName,
    metricEventPayload,
    dollarValueTitle,
    dollarValueAmount,
    onPress,
  } = props;
  const metricsContext = useContext(MetricsContext);

  return (
    <TicketContainer>
      <IconLottie name="checkTicket" />
      <TextTitle weight="700">{title}</TextTitle>
      <Surface activeOpacity={1} style={customSurfaceStyles}>
        <AmmountContainer>
          <AmountTitle weight="600">{amountTitle}</AmountTitle>
          <AmountValue weight="600">{amountValue}</AmountValue>
        </AmmountContainer>
        <Table>
          {dollarValueTitle ? (
            <ContentRow>
              <RowTitle weight="400">{dollarValueTitle}</RowTitle>
              <RowValue weight="400">{dollarValueAmount}</RowValue>
            </ContentRow>
          ) : (
            <></>
          )}
          <ContentRow>
            <RowTitle weight="400">{cardTitle}</RowTitle>
            <RowValue weight="400">{cardValue}</RowValue>
          </ContentRow>
          <ContentRow>
            <RowTitle weight="400">{paymentTypeTitle}</RowTitle>
            <RowValue weight="400">{paymentTypeValue}</RowValue>
          </ContentRow>
          <ContentRow>
            <RowTitle weight="400">{accountTitle}</RowTitle>
            <RowValue weight="400">{accountValue}</RowValue>
          </ContentRow>
        </Table>
        <View>
          <FooterText weight="400">{dateValue}</FooterText>
          <FooterText weight="400">{operationNumber}</FooterText>
        </View>
      </Surface>
      <Button
        title={buttonTitle}
        onPress={_ => {
          if (metricEventName && metricsContext?.metricsTool) {
            metricsContext?.metricsTool.logEvent(
              metricEventName,
              metricEventPayload,
            );
          }
          if (onPress) {
            onPress();
          }
        }}
      />
    </TicketContainer>
  );
};

export default Ticket;
