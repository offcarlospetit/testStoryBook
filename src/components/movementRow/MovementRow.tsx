import * as React from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  ViewProps,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';

import IconSvg from '../icon/IconSvg';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import Text, { TextProps } from '../text/Text';

export type CardType = 'debitCard' | 'creditCard';
export type iconType = 0 | 1;

const DEBIT_CARD = 'debitCard';
const DEPOSIT = 0;
export interface MovementRowProps {
  arrowIconType: number; //1 depósito, 0 retiro,
  amount: string;
  type: CardType;
  description?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textInstallment?: string | undefined;
  categoryType?: string | undefined;
  isUncharged?: boolean;
  onClick?: () => void;
  title?: string;
}

const UIContainerItem = styled(View)`
 flex-direction: row;
 height: ${Scale(72)}px;
 align-items: center;
`;

const UIContainerItemSectionIcon = styled(View)`
 width: ${Scale(40)}px;
 aspect-ratio: 1;
 border-radius:${Scale(12)}px;
 justify-content: center;
 align-items: center;
`;

const UIContainerItemSectionDescription = styled(View)`
 flex: 1;
 flex-direction: row;
 justify-content: flex-start;
 alignItems: center;
 margin-left:${Scale(12)}px;
 height:${Scale(42)}px;
`;

const UIContainerSectionIconAmountInstallment = styled(View)`
 justify-content: center;
`;

const UIContainerSectionIconAmount = styled(View)`
 flex-direction: row;
`;

const TextTitle = styled(Text)<TextDescriptionProps>`
font-size: ${Scale(16)}px;
line-height: ${Scale(20)}px;
width: 76%;
color: ${props =>
  props.type === DEBIT_CARD
    ? Colors.NeutralDarkGrey80
    : Colors.NeutralDarkGrey80};
`;

const TextDescription = styled(Text)<TextDescriptionProps>`
font-size: ${Scale(14)}px;
line-height: ${Scale(20)}px;
width: ${Scale(100 - 24)}%;
color: ${props =>
  props.type === DEBIT_CARD
    ? Colors.NeutralDarkGrey80
    : Colors.NeutralDarkGrey80};
`;

const TextAmount = styled(Text)<TextAmountProps>`
font-size: ${Scale(14)}px;
color: ${props =>
  props.type === DEBIT_CARD
    ? Colors.NeutralDarkGrey80
    : Colors.NeutralDarkGrey80};
`;

const TextDetailAmount = styled(Text)<TextAmountProps>`
font-size: ${Scale(18)}px;
color: ${props =>
  props.type === DEBIT_CARD
    ? Colors.NeutralDarkGrey80
    : Colors.NeutralDarkGrey80};
`;

const ContainerIcon = styled.View`
width: ${Scale(35)}px;
height: ${Scale(35)}px;
`;

const ContainerIconAmount = styled.View`
width: ${Scale(30)}px;
height: ${Scale(30)}px;
margin-right: ${Scale(2.2)}px;

`;

const UIContainerTextAmount = styled(View)`
 flex-direction:column;
 align-self:center;
`;

const TextInstallment = styled(Text)`
 font-size:${Scale(12)}px;
 line-height:${Scale(16)}px;
 text-align:right;
`;

const UIIndicatorDeposit = styled(View)<indicatorDepositProps>`
width: ${Scale(5)}px;
margin-right:${Scale(11)}px;
height: ${Scale(72)}px;
background-color: ${props =>
  props.arrowIconType === DEPOSIT
    ? Colors.ProfileConservador60
    : 'transparent'};
`;

const AsteriskIcon = styled(IconSvg)`
  width: ${Scale(8)}px;
  height: ${Scale(8)}px;
  margin-left: ${Scale(2)}px;
  top: -${Scale(6)}px
`;

const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
`;

export interface TextDescriptionProps extends TextProps {
  type: CardType;
}

export interface TextAmountProps extends TextProps {
  type: CardType;
}
export interface indicatorDepositProps extends ViewProps {
  arrowIconType: iconType;
}

const MovementRow = (props: MovementRowProps) => {
  const {
    arrowIconType: iconType,
    amount,
    description,
    type,
    containerStyle = {},
    textInstallment,
    categoryType,
    title,
    isUncharged = false,
    onClick = () => null,
  } = props;

  const isPressable = props.onClick ? true : false;

  const SelectIcon = (iconType: number, categoryType?: string) => {
    if (!categoryType) {
      return iconType === 0
        ? 'movement-debit-deposit'
        : 'movement-debit-charge';
    } else if (categoryType && iconType === 0) {
      return 'movement-debit-deposit';
    } else {
      switch (categoryType) {
        case '100': {
          return 'movement-charge-home';
        }
        case '200': {
          return 'movement-charge-education';
        }
        case '300': {
          return 'movement-charge-transportation';
        }
        case '400': {
          return 'movement-charge-shopping';
        }
        case '500': {
          return 'movement-charge-health';
        }
        case '600': {
          return 'movement-charge-entertainment';
        }
        case '700': {
          return 'movement-charge-travel';
        }
        case '800': {
          return 'movement-charge-financial-services';
        }
        case '900': {
          return 'movement-charge-professional-services';
        }
        case '1000': {
          return 'movement-charge-others';
        }
        default: {
          return 'movement-debit-charge';
        }
      }
    }
  };

  return (
    <ButtonWrapper onPress={onClick} disabled={!isPressable}>
      <UIContainerItem style={containerStyle}>
        {!title && <UIIndicatorDeposit arrowIconType={iconType as iconType} />}
        <UIContainerItemSectionIcon>
          {/*En un futuro el icono sera definido por su categoria */}
          <ContainerIcon>
            <IconSvg name={SelectIcon(iconType, categoryType)} />
          </ContainerIcon>
        </UIContainerItemSectionIcon>
        <UIContainerItemSectionDescription>
          {title && (
            <TextTitle
              weight={'600'}
              type={type}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {title}
            </TextTitle>
          )}
          {description && (
            <TextDescription
              weight={'500'}
              type={type}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {description}
            </TextDescription>
          )}
        </UIContainerItemSectionDescription>

        <UIContainerSectionIconAmountInstallment>
          <UIContainerSectionIconAmount>
            <ContainerIconAmount>
              <IconSvg
                name={
                  iconType === 0
                    ? 'movement-debit-arrow-deposit'
                    : 'movement-debit-arrow-charge'
                }
              />
            </ContainerIconAmount>
            <UIContainerTextAmount>
              {title && (
                <TextDetailAmount type={type} weight={'700'} numberOfLines={1}>
                  {amount}{' '}
                  {isUncharged && (
                    <View style={styles.asterisk}>
                      <AsteriskIcon name="asterisk" />
                    </View>
                  )}
                </TextDetailAmount>
              )}
              {description && (
                <TextAmount type={type} weight={'600'} numberOfLines={1}>
                  {amount}{' '}
                  {isUncharged && (
                    <View style={styles.asterisk}>
                      <AsteriskIcon name="asterisk" />
                    </View>
                  )}
                </TextAmount>
              )}
            </UIContainerTextAmount>
          </UIContainerSectionIconAmount>

          {textInstallment != (undefined || '') && textInstallment && (
            <TextInstallment weight="400">{textInstallment}</TextInstallment>
          )}
        </UIContainerSectionIconAmountInstallment>
      </UIContainerItem>
    </ButtonWrapper>
  );
};

const styles = StyleSheet.create({
  asterisk: {
    height: Scale(8),
    justifyContent: 'flex-start',
  },
});

export default MovementRow;
