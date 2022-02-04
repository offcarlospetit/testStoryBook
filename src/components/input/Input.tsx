import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {
  Input as RNEInput,
  InputProps as RNEInputProps,
} from 'react-native-elements';
import type {TextInput as RNInput} from 'react-native';

import Colors from '../../constants/colors';
import Icon from '../icon/Icon';

const RIGHT = 'right';
const LEFT = 'left';

export interface InputProps extends RNEInputProps {
  ref?: any;
}

const UIInput = styled(RNEInput)<InputProps>``;

const Input: React.FC<InputProps> = (props) => {
  const {
    inputContainerStyle,
    errorMessage,
    disabled,
    value,
    inputStyle,
    secureTextEntry,
    rightIcon: RightIconProps,
    leftIcon: LeftIconProps,
    ...rest
  } = props;

  const inputRef = useRef<RNInput>(null);
  const [isFocused, setisFocused] = useState(false);
  const [borderStyle, setBorderStyle] = useState({
    borderColor: Colors.NeutralLightGrey60,
    borderWidth: 1,
    borderBottomWidth: 0,
  });

  const [inputStyleFocus, setInputStyleFocus] = useState({
    fontFamily: 'Poppins-SemiBold',
  });

  useEffect(() => {
    if (inputRef && inputRef.current) {
      setisFocused(inputRef.current.isFocused());
    } else {
      setisFocused(false);
    }
  }, [inputRef?.current?.isFocused()]);

  useEffect(() => {
    if (isFocused) {
      setBorderStyle({
        ...borderStyle,
        borderColor: Colors.PrimaryBlue50,
        borderWidth: 2,
        borderBottomWidth: 2,
      });
      setInputStyleFocus({
        ...inputStyleFocus,
        fontFamily: 'Poppins-SemiBold',
      });
      return;
    } else if (errorMessage) {
      setBorderStyle({
        borderColor: Colors.SemanticErrorRed50,
        borderWidth: 2,
        borderBottomWidth: 2,
      });
      setInputStyleFocus({
        ...inputStyleFocus,
        fontFamily: 'Poppins-SemiBold',
      });
      return;
    } else if (disabled) {
      setBorderStyle({
        borderColor: Colors.NeutralLightGrey60,
        borderWidth: 1,
        borderBottomWidth: 1,
      });
      setInputStyleFocus({
        ...inputStyleFocus,
        fontFamily: 'Poppins-SemiBold',
      });
      return;
    } else {
      setBorderStyle({
        borderColor: Colors.NeutralLightGrey60,
        borderWidth: 1,
        borderBottomWidth: 1,
      });
      setInputStyleFocus({
        ...inputStyleFocus,
        fontFamily: 'Poppins-SemiBold',
      });
      return;
    }
  }, [isFocused, errorMessage, disabled]);

  const renderIcon = (withError: string | undefined, position: string) => {
    if (typeof RightIconProps !== 'undefined' && position === RIGHT) {
      return withError ? (
        <Icon name={'error'} activeOpacity={1} />
      ) : (
        RightIconProps
      );
    } else if (typeof LeftIconProps !== 'undefined' && position === LEFT) {
      return withError ? (
        <Icon name={'error'} activeOpacity={1} />
      ) : (
        LeftIconProps
      );
    } else if (withError && !secureTextEntry && position === RIGHT) {
      return <Icon name={'error'} activeOpacity={1} />;
    } else if (secureTextEntry) {
      return position === RIGHT ? RightIconProps : LeftIconProps;
    } else {
      return <></>;
    }
  };
  return (
    <UIInput
      {...rest}
      ref={inputRef}
      errorMessage={errorMessage}
      value={value}
      inputContainerStyle={{
        ...borderStyle,
        ...(inputContainerStyle as Object),
      }}
      inputStyle={{
        ...inputStyleFocus,
        ...(inputStyle as Object),
      }}
      disabled={disabled}
      rightIcon={renderIcon(errorMessage, RIGHT)}
      leftIcon={renderIcon(errorMessage, LEFT)}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={Colors.NeutralLightGrey60}
    />
  );
};

export default Input;
