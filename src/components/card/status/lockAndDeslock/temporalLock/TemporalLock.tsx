import React, {FC, useContext} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import type {StyleProp, ViewProps, TextProps, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../constants/colors';
import Scale from '../../../../../utils/Scale';
import IconSvg, {IconNameSvg} from '../../../../icon/IconSvg';
import Text from '../../../../text/Text';
import SpinnerBasic from '../../../../spinner/SpinnerBasic';
import {MetricsContext} from '../../../../metricsProvider/MetricsProvider';

const currentCardStatusTextColor: Record<number, string> = {
  0: Colors.SemanticWarningYellow50,
  1: Colors.SemanticSuccessGreen70,
  2: Colors.NeutralLightGrey60,
};

export interface TemporalLockProps extends ViewProps {
  title: string;
  blockCardFor: string;
  listItems: string[];
  aditionalInfo: string;
  cardStatusTitle: string;
  currentCardStatus: string;
  currentCardStatusNumber: number;
  isActiveCard: boolean;
  iconName?: IconNameSvg;
  containerStyles?: StyleProp<ViewStyle>;
  metricEventName?: string;
  metricEventPayload?: Record<string, any>;
  toggleSwitch: () => void;
}

interface CurrentCardStatusProps extends TextProps {
  statusNumber: number;
}

const DefinitiveLockContainer = styled.View`
  padding: ${Scale(16)}px;
  width: 100%;
  flex-flow: column nowrap;
  align-items: flex-start;
  border-radius: ${Scale(8)}px;
  border: ${Scale(1)}px solid ${Colors.NeutralLightGrey40};
`;

const BrokenCardIcon = styled(IconSvg)`
  height: ${Scale(66)}px;
  width: ${Scale(66)}px;
`;

const CardTitle = styled(Text)`
  margin-top: ${Scale(16)}px;
  font-size: ${Scale(16)}px;
  height: ${Scale(20)}px;
  line-height: ${Scale(20)}px;
  color: ${Colors.NeutralDarkGrey80};
`;

const Subtitle = styled(Text)`
  margin: ${Scale(16)}px 0;
  width: 100%;
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  color: ${Colors.NeutralDarkGrey80};
`;

const ListContainer = styled(View)`
  width: 100%;
  padding-left: ${Scale(4)}px;
`;

const ListItem = styled(View)`
  flex-flow: row nowrap;
  align-items: center;
`;

const ListDot = styled(View)`
  margin-right: ${Scale(8)}px;
  height: ${Scale(4)}px;
  width: ${Scale(4)}px;
  border-radius: ${Scale(8)}px;
  background: ${Colors.neutralDarkGrey70};
`;

const ListText = styled(Text)`
  font-size: ${Scale(14)}px;
  color: ${Colors.NeutralDarkGrey80};
`;

const CardDivider = styled(View)`
  margin-top: ${Scale(16)}px;
  margin-bottom: ${Scale(22)}px;
  width: 100%;
  border-width: ${Scale(1)}px;
  border-color: ${Colors.NeutralLightGrey30};
`;

const CardStatusInfoContainer = styled(View)`
  width: 100%;
  height: ${Scale(31)}px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const CardStatusTexts = styled(View)`
  flex-flow: row nowrap;
`;

const CardStatusTitle = styled(Text)`
  margin-right: ${Scale(5)}px;
  font-size: ${Scale(14)}px;
  color: ${Colors.NeutralDarkGrey80};
`;

const CurrentCardStatus = styled(Text)<CurrentCardStatusProps>`
  font-size: ${Scale(14)}px;
  color: ${Colors.green};
  color: ${props => currentCardStatusTextColor[props.statusNumber]};
`;

const TemporalLock: FC<TemporalLockProps> = (props: TemporalLockProps) => {
  const {
    title,
    blockCardFor,
    aditionalInfo,
    listItems,
    cardStatusTitle,
    isActiveCard,
    currentCardStatus,
    currentCardStatusNumber,
    iconName = 'lock-deslock',
    containerStyles,
    metricEventName,
    metricEventPayload,
    toggleSwitch,
  } = props;
  const isLoading = currentCardStatusNumber === 2;
  const cardImageColor = isActiveCard ? 'actived' : 'locked';

  const {handleAnalyticsEventOnPress} = useContext(MetricsContext);

  return (
    <DefinitiveLockContainer style={containerStyles}>
      <BrokenCardIcon name={iconName} color={cardImageColor} />
      <CardTitle weight="700">{title}</CardTitle>
      <Subtitle weight="400">{blockCardFor}</Subtitle>
      <ListContainer>
        {listItems.map((item: string, i: number) => (
          <ListItem key={i}>
            <ListDot />
            <ListText>{item}</ListText>
          </ListItem>
        ))}
      </ListContainer>
      {isActiveCard && <Subtitle weight="400">{aditionalInfo}</Subtitle>}
      <CardDivider />
      <CardStatusInfoContainer>
        <CardStatusTexts>
          <CardStatusTitle weight="700">{cardStatusTitle}</CardStatusTitle>
          <CurrentCardStatus
            statusNumber={currentCardStatusNumber}
            weight="700">
            {currentCardStatus}
          </CurrentCardStatus>
        </CardStatusTexts>
        {isLoading ? (
          <SpinnerBasic
            name="loader"
            isVisible={true}
            style={styles.spinnerStyles}
          />
        ) : (
          <Switch
            thumbColor={Colors.NeutralWhite}
            trackColor={customSwipeStyles}
            ios_backgroundColor={Colors.NeutralLightGrey50}
            onValueChange={() =>
              handleAnalyticsEventOnPress(
                metricEventName,
                metricEventPayload,
                toggleSwitch,
              )
            }
            value={isActiveCard}
          />
        )}
      </CardStatusInfoContainer>
    </DefinitiveLockContainer>
  );
};

const customSwipeStyles = {
  false: Colors.NeutralLightGrey50,
  true: Colors.PrimaryBlue50,
};

const styles = StyleSheet.create({
  spinnerStyles: {
    height: Scale(32.57),
    marginRight: Scale(15),
  },
});

export default TemporalLock;
