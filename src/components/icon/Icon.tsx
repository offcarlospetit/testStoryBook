import React from 'react';
import styled from 'styled-components/native';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
  Animated,
} from 'react-native';


export type IconName =
  | 'secureText'
  | 'error'
  | 'error-big'
  | 'oval'
  | 'close'
  | 'user-password'
  | 'chevron-right'
  | 'chevron-down'
  | 'shared'
  | 'visibility-on'
  | 'divider-horizontal'
  | 'error-balance'
  | 'visibility-off'
  | 'back'
  | 'search'
  | 'start'
  | 'add-circle-outline'
  | 'add-contact'
  | 'search_without_result'
  | 'unplugged'
  | 'next'
  | 'person'
  | 'visibility'
  | 'TC_goldCredito'
  | 'TC-bancaJoven'
  | 'TC-bia'
  | 'TC-gold'
  | 'TC-infinite'
  | 'TC-platinum'
  | 'TC-signature'
  | 'divider-horizontal-grey'
  | 'error-balance-tc'
  | 'chevron-right-gray'
  | 'visibility-off-white';
export interface IconProps extends TouchableOpacityProps {
  name: IconName;
  rotate?: Animated.AnimatedInterpolation;
}

const UIIcon = styled(RNTouchableOpacity)<TouchableOpacityProps>``;

const Icon: React.FC<IconProps> = ({ name, rotate, ...res }) => {
  const rotate_ = rotate ? rotate : '0deg';
  return (
    <UIIcon {...res}>
      <Animated.Image
        style={{ transform: [{ rotate: rotate_ }] }}
        source={
          // the different requires should be defined in this
          // way to avoid metro error with the current version
          (name === 'secureText' && require('./icons/visibility-off.png')) ||
          (name === 'visibility-off-white' &&
            require('./icons/visibility-off-white.png')) ||
          (name === 'error' && require('./icons/error-outline.png')) ||
          (name === 'error-big' && require('./icons/error-outline-big.png')) ||
          (name === 'oval' && require('./icons/oval.png')) ||
          (name === 'close' && require('./icons/close.png')) ||
          (name === 'user-password' && require('./icons/user-password.png')) ||
          (name === 'chevron-right' && require('./icons/chevron-right.png')) ||
          (name === 'chevron-down' && require('./icons/chevron-down.png')) ||
          (name === 'shared' && require('./icons/shared.png')) ||
          (name === 'visibility-on' && require('./icons/visibility-on.png')) ||
          (name === 'divider-horizontal' &&
            require('./icons/divider-horizontal.png')) ||
          (name === 'error-balance' && require('./icons/error-balance.png')) ||
          (name === 'visibility-off' &&
            require('./icons/visibility-off.png')) ||
          (name === 'back' && require('./icons/back.png')) ||
          (name === 'search' && require('./icons/search.png')) ||
          (name === 'start' && require('./icons/start.png')) ||
          (name === 'add-circle-outline' &&
            require('./icons/add-circle-outline.png')) ||
          (name === 'add-contact' && require('./icons/add-contact.png')) ||
          (name === 'search_without_result' &&
            require('./icons/search_without_result.png')) ||
          (name === 'unplugged' && require('./icons/unplugged.png')) ||
          (name === 'next' && require('./icons/next.png')) ||
          (name === 'person' && require('./icons/person.png')) ||
          (name === 'visibility' && require('./icons/visibility.png')) ||
          (name === 'TC_goldCredito' &&
            require('./icons/TC_goldCredito.png')) ||
          (name === 'TC-bancaJoven' && require('./icons/TC-bancaJoven.png')) ||
          (name === 'TC-bia' && require('./icons/TC-bia.png')) ||
          (name === 'TC-gold' && require('./icons/TC-gold.png')) ||
          (name === 'TC-infinite' && require('./icons/TC-infinite.png')) ||
          (name === 'TC-platinum' && require('./icons/TC-platinum.png')) ||
          (name === 'TC-signature' && require('./icons/TC-signature.png')) ||
          (name === 'divider-horizontal-grey' &&
            require('./icons/divider-horizontal-grey.png')) ||
          (name === 'error-balance-tc' &&
            require('./icons/error-balance-tc.png')) ||
          (name === 'chevron-right-gray' &&
            require('./icons/chevron-right-gray.png'))
        }
      />
    </UIIcon>
  );
};

export default Icon;
