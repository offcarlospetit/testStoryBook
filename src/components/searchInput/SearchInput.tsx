import React, { useEffect, useState, forwardRef } from 'react';
import styled from 'styled-components/native';
import {
  Input as RNEInput,
  InputProps as RNEInputProps,
} from 'react-native-elements';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colors from '../../constants/colors';
import IconSvg from '../icon/IconSvg';
import type { IconNameSvg } from '../icon/IconSvg';
import Scale from '../../utils/Scale';
import Text from '../text/Text';
import type { StyledProps } from 'styled-components';

const RIGHT = 'right';
const LEFT = 'left';

interface InputProps extends RNEInputProps {
  ref?: any;
  onPressCancel?: () => void;
  leftIconName?: IconNameSvg;
  rightIconName?: IconNameSvg;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
  styleIconLeft?: StyledProps<TouchableOpacityProps>;
  styleIconRight?: StyledProps<TouchableOpacityProps>;
  defaultIconLeft?: boolean;
  defaultIconRight?: boolean;
  notCleanInput?: boolean;
  innerRef?: any;
}

export interface SearchInputProps extends InputProps {
  txtBtnCancel: string;
}

const Container = styled.View`
  height: ${Scale(48)}px;
  flex-direction: row;
`;
const ContainerInput = styled.View`
  flex: 1;
  margin-left: ${Scale(16)}px;
  height: ${Scale(48)}px;
`;

const UIInput = styled(RNEInput)<InputProps>`
  height: 100%;
  min-height: ${Scale(48)}px;
`;

const InputREf = forwardRef<typeof RNEInput, InputProps>((props, ref) => {
  const { inputContainerStyle, onFocus, ...rest } = props;
  return (
    <UIInput
      {...rest}
      ref={ref}
      inputContainerStyle={inputContainerStyle}
      inputStyle={{
        color: Colors.NeutralDarkGrey80,
        fontFamily: 'Poppins-Regular',
        fontSize: Scale(16),
        height: Scale(48),
        paddingLeft: Scale(5),
        includeFontPadding: false,
      }}
      placeholderTextColor={Colors.NeutralLightGrey50}
      onFocus={onFocus}
    />
  );
});

const SearchInput: React.FC<SearchInputProps> = (props: SearchInputProps) => {
  const {
    inputContainerStyle,
    disabled,
    value,
    inputStyle,
    rightIcon: RightIconProps,
    leftIcon: LeftIconProps,
    leftIconName,
    rightIconName,
    onPressCancel,
    onPressLeftIcon,
    onPressRightIcon,
    styleIconLeft,
    styleIconRight,
    defaultIconLeft,
    defaultIconRight,
    onChangeText,
    notCleanInput,
    autoFocus,
    innerRef,
    txtBtnCancel,
    ...rest
  } = props;

  const [isFocused, setisFocused] = useState(false);
  const [borderStyle, setBorderStyle] = useState({
    borderColor: Colors.NeutralLightGrey60,
    borderWidth: 1,
    borderBottomWidth: 0,
  });
  const [inputValue, setInputValue] = useState(value);
  const [iconNameRightDefault, setIconNameRightDefault] = useState<any>();

  useEffect(() => {
    if (inputValue?.length && inputValue?.length > 0) {
      setIconNameRightDefault('close');
    } else {
      // setIconNameRightDefault('add-contact');
    }
  }, [inputValue]);

  useEffect(() => {
    if (isFocused) {
      setBorderStyle({
        ...borderStyle,
        borderColor: Colors.PrimaryBlue50,
        borderWidth: 2,
        borderBottomWidth: 2,
      });
      return;
    } else if (disabled) {
      setBorderStyle({
        borderColor: Colors.NeutralLightGrey60,
        borderWidth: 1,
        borderBottomWidth: 1,
      });
      return;
    } else {
      setBorderStyle({
        borderColor: Colors.NeutralLightGrey60,
        borderWidth: 1,
        borderBottomWidth: 1,
      });
      return;
    }
  }, [isFocused, disabled]);

  const defaultActivyOpacity = 1;
  const defaultLeftIcon = 'search';
  const defaultRightIcon = 'close';
  const handleOnpressIconRightDefault = () => {
    if (value?.length) {
      setInputValue('');
    }
    if (onPressRightIcon) {
      onPressRightIcon();
    }
  };
  const renderIcon = (position: string) => {
    if (
      (leftIconName !== undefined && position === LEFT) ||
      (rightIconName !== undefined && position === RIGHT)
    ) {
      const iconNameLeft =
        leftIconName === undefined ? defaultLeftIcon : leftIconName;
      const iconNameRight =
        rightIconName === undefined ? defaultRightIcon : rightIconName;

      return (
        <IconSvg
          onPress={position === RIGHT ? onPressRightIcon : onPressLeftIcon}
          name={position === RIGHT ? iconNameRight : iconNameLeft}
          activeOpacity={
            (position === RIGHT && onPressRightIcon && 0.4) ||
            (position === LEFT && onPressLeftIcon && 0.4) ||
            defaultActivyOpacity
          }
          style={styleIconLeft}
        />
      );
    } else if (
      (defaultIconLeft && position === LEFT) ||
      (defaultIconRight && position === RIGHT)
    ) {
      return (
        <IconSvg
          name={position === LEFT ? 'search' : iconNameRightDefault}
          onPress={
            position === RIGHT ? handleOnpressIconRightDefault : onPressLeftIcon
          }
          activeOpacity={
            (position === RIGHT && 0.4) ||
            (position === LEFT && onPressLeftIcon && 0.4) ||
            defaultActivyOpacity
          }
          style={{
            height: Scale(24),
            width: Scale(24),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      );
    } else if (typeof LeftIconProps !== 'undefined' && position === LEFT) {
      return LeftIconProps;
    } else if (typeof RightIconProps !== 'undefined' && position === RIGHT) {
      return RightIconProps;
    } else {
      return <></>;
    }
  };

  const handleOnChangeText = (txt: string) => {
    if (onChangeText) {
      onChangeText(txt);
    }
    setInputValue(txt);
  };

  const handleOnpressCancel = () => {
    if (!notCleanInput) {
      setInputValue('');
    }
    if (onPressCancel) {
      onPressCancel();
    }
  };
  return (
    <Container>
      <ContainerInput>
        <InputREf
          {...rest}
          ref={innerRef}
          value={inputValue}
          inputContainerStyle={{
            ...borderStyle,
            height: Scale(48),
            borderRadius: Scale(48),
            paddingRight: Scale(5),
            paddingLeft: Scale(8),
          }}
          inputStyle={{
            color: Colors.NeutralDarkGrey80,
            fontFamily: 'Poppins-Regular',
            fontSize: Scale(16),
            height: Scale(48),
            paddingLeft: Scale(5),
          }}
          disabled={disabled}
          rightIcon={renderIcon(RIGHT)}
          leftIcon={renderIcon(LEFT)}
          placeholderTextColor={Colors.NeutralLightGrey50}
          onChangeText={handleOnChangeText}
          onFocus={() => {
            setisFocused(true);
          }}
          onBlur={() => setisFocused(false)}
        />
      </ContainerInput>

      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginLeft: Scale(16),
          marginRight: Scale(16),
        }}
        onPress={handleOnpressCancel}
      >
        <Text
          weight="600"
          style={{
            fontSize: Scale(14),
            lineHeight: Scale(20),
            marginBottom: 1,
            color: isFocused ? Colors.PrimaryBlue50 : Colors.NeutralLightGrey60,
          }}
          numberOfLines={1}
        >
          {txtBtnCancel}
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default SearchInput;
