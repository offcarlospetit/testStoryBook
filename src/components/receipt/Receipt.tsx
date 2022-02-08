import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import type { IconNameSvg } from '../icon/IconSvg';
import Text from '../text/Text';
import Scale from '../../utils/Scale';
import Colors from '../../constants/colors';
import Surface from '../surface/Surface';
import ShareButton from '../ShareButton/ShareButton';

export type ReceiptType = 'success' | 'waiting';

interface RowsData {
  label: string | number;
  value: string | number;
}

interface ReceiptProps {
  type: ReceiptType;
  iconName: IconNameSvg;
  title: string;
  subtitle?: string;
  message: string;
  ammount: string;
  rows: RowsData[];
  children: React.ReactNode;
  date?: string;
  operationNumber?: string;

  shareButtonProps: {
    isVisibleShareButton: boolean;
    shareButtonTitle: string;
    shareButtonMetricEventName?: string;
    shareButtonOnPress: () => void;
  }
}

const TextTitle = styled(Text)`
  font-size: ${Scale(18)}px;
  line-height: ${Scale(24)}px;
  margin-bottom: ${Scale(12)}px;
  margin-top: ${Scale(11)}px;
  color: ${Colors.NeutralDarkGrey90};
`;

const TextSubTitle = styled(Text)`
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  margin-bottom: ${Scale(32)}px;
  color: ${Colors.NeutralDarkGrey90};
`;

const TextStatusTitle = styled(Text)`
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  color: ${Colors.neutralDarkGrey70};
`;

const TextTefAmount = styled(Text)`
  font-size: ${Scale(18)}px;
  line-height: ${Scale(20)}px;
  color: ${Colors.NeutralDarkGrey90};
  margin-top: ${Scale(4)}px;
`;

const ContainerSectionReceipt = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${Scale(10)}px;
`;

const ContainerContentReceipt = styled.View`
  border-top-width: ${Scale(1)}px;
  border-top-color: ${Colors.neutralLightGrey20};
  padding-vertical: ${Scale(16)}px;
`;

const ContentRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: ${Scale(6)}px;
`;

const ContentRowMessage = styled.View`
  padding-vertical: ${Scale(6)}px;
`;

const FooterReceiptContainer = styled.View`
  padding-top: ${Scale(16)}px;
  align-items: center;
  border-top-width: ${Scale(1)}px;
  border-top-color: ${Colors.neutralLightGrey20};
`;

const FooterText = styled(Text)`
  font-size: ${Scale(12)}px;
  line-height: ${Scale(16)}px;
  color: ${Colors.neutralDarkGrey70};
  text-align: center;
`;

const LabelText = styled(Text)`
  font-size: ${Scale(14)}px;
  line-height: ${Scale(24)}px;
  color: ${Colors.NeutralLightGrey60};
  flex:1;
`;

const ValueText = styled(Text)`
  font-size: ${Scale(14)}px;
  line-height: ${Scale(24)}px;
  color: ${Colors.NeutralDarkGrey90};
  flex:2;
`;

const TableHeaderContainer = styled.View`
  width: 100%;
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
`;

const Receipt: React.FC<ReceiptProps> = props => {
  const {
    title,
    subtitle,
    type,
    rows,
    message,
    children,
    ammount,
    // iconName,
    date,
    operationNumber,
    shareButtonProps
  } = props;

  const { isVisibleShareButton, shareButtonTitle = '', shareButtonMetricEventName, shareButtonOnPress } = shareButtonProps
  const [autoPlay, setAutoPlay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAutoPlay(true);
    }, 200);
  }, []);
  const renderIcon = () => {
    return (
      autoPlay && (
        <LottieView
          style={{
            width: Scale(66),
            height: Scale(61),
          }}
          source={require('./icons/check-comprobante.json')}
          loop={false}
          autoPlay={true}
        />
      )
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {renderIcon()}
      <TextTitle weight="700">{title}</TextTitle>
      {subtitle && <TextSubTitle weight="400">{subtitle}</TextSubTitle>}
      <Surface
        activeOpacity={1}
        style={{
          marginBottom: Scale(16),
        }}
      >
        <ContainerSectionReceipt>
          {type === 'success' ? (
            <TableHeaderContainer>
              <View>
                <TextStatusTitle weight="600">
                  Monto
                </TextStatusTitle>
                <TextTefAmount weight="600">{ammount}</TextTefAmount>
              </View>
              {isVisibleShareButton && (
                <ShareButton
                  title={shareButtonTitle}
                  metricEventName={shareButtonMetricEventName}
                  onPress={shareButtonOnPress}
                />
              )}

            </TableHeaderContainer>
          ) : (
            <>
              <TextStatusTitle>Monto a transferir</TextStatusTitle>
              <TextTefAmount weight="600">{ammount}</TextTefAmount>
            </>
          )}
        </ContainerSectionReceipt>
        <ContainerContentReceipt>
          {rows.map((item, index) => (
            <ContentRow key={index}>
              <LabelText weight="400" numberOfLines={1}>
                {item.label}
              </LabelText>
              <ValueText
                weight="400"
                numberOfLines={2}
                style={{ textAlign: 'right' }}
              >
                {item.value}
              </ValueText>
            </ContentRow>
          ))}
        </ContainerContentReceipt>
        {message !== '' && (
          <ContainerContentReceipt>
            <ContentRowMessage>
              <LabelText weight="400">Mensaje</LabelText>
              <ValueText weight="400" style={{ textAlign: 'left' }}>
                {message}
              </ValueText>
            </ContentRowMessage>
          </ContainerContentReceipt>
        )}
        {date !== undefined || operationNumber !== undefined ? (
          <FooterReceiptContainer>
            {date !== undefined && <FooterText>{date}</FooterText>}
            {operationNumber !== undefined && (
              <FooterText>{operationNumber}</FooterText>
            )}
          </FooterReceiptContainer>
        ) : null}
      </Surface>
      {children}
    </View>
  );
};

export default Receipt;
