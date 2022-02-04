import React from 'react';
import styled from 'styled-components/native';
import { Animated, Easing, ViewProps } from 'react-native';

import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import Icon from '../icon/Icon';

const DEBIT_CARD = 'debitCard';

export type CardType = 'debitCard' | 'creditCard';

export interface ContainerCardProps extends ViewProps {
  backgroundColor?: string;
  error?: boolean;
  children: React.ReactNode;
  type: CardType;
  isOpen?: boolean;
  openCard?: () => void;
  isExpansable?: boolean;
}

const UIContainerCard = styled(Animated.View)<ContainerCardProps>`
  border-radius: ${Scale(16)}px;
  height: ${Scale(168)}px;
  width: 100%;
  padding-left: ${Scale(12)}px;
  padding-top: ${Scale(18)}px;
  background-color: ${props =>
    props.type === DEBIT_CARD ? Colors.PrimaryBlue50 : Colors.NeutralWhite};
`;
const IconChevron = styled(Icon)`
  height: ${Scale(30.5)}px;
  width: ${Scale(20)}px;
  position: absolute;
  right: ${Scale(16.87)}px;
  top: ${Scale(17.75)}px;
  z-index: 9999;
  align-items: flex-end;
`;

// This should be a separate component when swiper is added.
const Pagination = styled.View`
  height: ${Scale(30)}px;
`;

const ContainerCard: React.FC<ContainerCardProps> = (
  props: ContainerCardProps,
) => {
  const {
    error,
    children,
    type,
    openCard,
    isOpen = false,
    isExpansable = true,
  } = props;
  const [animateValue] = React.useState(new Animated.Value(168));
  Animated.timing(animateValue, {
    toValue: isOpen ? Scale(168) : Scale(392),
    duration: 200,
    easing: Easing.out(Easing.bezier(0, 0, 0.58, 1)),
    useNativeDriver: false,
  }).start();
  const raotate = animateValue.interpolate({
    inputRange: [Scale(168), Scale(392)],
    outputRange: ['90deg', '0deg'],
  });
  return (
    <UIContainerCard type={type}>
      {!error && isExpansable && (
        <IconChevron
          hitSlop={{
            bottom: Scale(25),
            left: Scale(25),
            right: Scale(25),
            top: Scale(25),
          }}
          onPress={() => (openCard ? openCard() : null)}
          name={type === 'debitCard' ? 'chevron-right' : 'chevron-right-gray'}
          rotate={raotate}
        />
      )}
      {children}
      {!error && <Pagination />}
    </UIContainerCard>
  );
};

export default ContainerCard;
