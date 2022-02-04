import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native';
import IconFont, { IconFontName } from '../icon/IconFont';
import styled from 'styled-components/native';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import Text from '../text/Text';

export interface PeriodSummaryProps extends ViewProps {
  isOpen: boolean;
  title?: string;
  subTitle?: string;
  continueButtonText?: string;
  totalChargesLabel?: string;
  totalChargesValue?: string;
  totalPaymentsLabel?: string;
  totalPaymentsValue?: string;
  totalPeriodLabel?: string;
  totalPeriodValue?: string;
  closeModalCallback: () => void;
}

const getSeparatorStyles = () =>
  `border-width: ${Scale(1)}px;
   border-color: ${Colors.NeutralLightGrey30};
   borderBottomWidth: ${StyleSheet.hairlineWidth};`;

const ContainerModal = styled.View`
  background-color: ${Colors.NeutralWhite};
  border-top-left-radius: ${Scale(38)}px;
  border-top-right-radius: ${Scale(38)}px;
  padding: ${Scale(40)}px ${Scale(17)}px ${Scale(49)}px ${Scale(15)}px;
  margin-top: ${Scale(207)}px;  
`;

const Container = styled.View`
  width: 100%;
`;

const PeriodSummaryTitles = styled.View`
  width: 100%;
  height: ${Scale(56)}px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${Scale(24)}px;
`;

const TitlesText = styled(Text)`
  font-size: ${Scale(18)}px;  
  text-align: center;
  color: ${Colors.NeutralDarkGrey90};    
`;

const Table = styled.View`
  width: 100%;  
  margin-bottom: ${Scale(40)}px;
  padding-right: ${Scale(17)}px;
  padding-left: ${Scale(15)}px;
  border-radius: ${Scale(8)}px;
  ${getSeparatorStyles()}
`;

const Row = styled.View`
  width: 100%;
  height: ${Scale(70)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Col = styled.View`  
  width: 50%;
`;

const CenteredCol = styled.View`  
  margin: auto;  
`;

const BoxData = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const ArrowIcon = styled(IconFont)`
  margin-left:  ${Scale(10)}px;
  margin-right: ${Scale(12)}px;
  margin-bottom: ${Scale(8)}px;
`;

const Label = styled(Text)`
  color: ${Colors.NeutralLightGrey70};
  font-size: ${Scale(12)}px;
  text-align: center;
  margin-bottom: ${Scale(4)}px;
`;

const Value = styled(Text)`
  color: ${Colors.NeutralDarkGrey80};
  font-size: ${Scale(20)}px; 
`;

const VerticalDivider = styled.View`  
  height: ${Scale(40)}px;
  ${getSeparatorStyles()}
`;

const HorizontalDivider = styled.View`  
  width: 96%;
  margin: auto;
  ${getSeparatorStyles()}
`;

const PeriodSummary: FC<PeriodSummaryProps> = ({
  isOpen,
  title = '',
  subTitle = '',
  continueButtonText = '',
  totalChargesLabel = '',
  totalChargesValue = '',
  totalPaymentsLabel = '',
  totalPaymentsValue = '',
  totalPeriodLabel = '',
  totalPeriodValue = '',
  closeModalCallback,
}: PeriodSummaryProps) => {
  const printBoxData = (
    label: string,
    value: string,
    iconName: IconFontName | null,
    margin: boolean = false,
  ) => (
    <BoxData>
      {iconName && (
        <ArrowIcon
          name={iconName}
          size={Scale(13)}
          color={
            iconName === 'arrow-up'
              ? Colors.SemanticWarningYellow50
              : Colors.ProfileConservador60
          }
        />
      )}
      <View>
        <Label style={{ marginRight: margin ? Scale(21) : Scale(0) }}>
          {label}
        </Label>
        <Value weight="500">{value}</Value>
      </View>
    </BoxData>
  );

  return (
    <>
      <Modal
        isVisible={isOpen}
        onBackButtonPress={closeModalCallback}
        onBackdropPress={closeModalCallback}
      >
        <ContainerModal>
          <Container>
            <PeriodSummaryTitles>
              <TitlesText weight="600">{title}</TitlesText>
              <TitlesText weight="600">{subTitle}</TitlesText>
            </PeriodSummaryTitles>
            <Table>
              <Row>
                <Col>
                  {printBoxData(
                    totalChargesLabel,
                    totalChargesValue,
                    'arrow-up',
                  )}
                </Col>
                <VerticalDivider />
                <Col style={{ paddingLeft: Scale(21) }}>
                  {printBoxData(
                    totalPaymentsLabel,
                    totalPaymentsValue,
                    'arrow-down',
                    true,
                  )}
                </Col>
              </Row>
              <HorizontalDivider />
              <Row>
                <CenteredCol>
                  {printBoxData(totalPeriodLabel, totalPeriodValue, null)}
                </CenteredCol>
              </Row>
            </Table>
            <Button title={continueButtonText} onPress={closeModalCallback} />
          </Container>
        </ContainerModal>
      </Modal>
    </>
  );
};

export default PeriodSummary;
