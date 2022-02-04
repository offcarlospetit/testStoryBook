import React, { FC } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewProps,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import Text from '../text/Text';
import Surface from '../surface/Surface';
import IconFont from '../icon/IconFont';

export interface SelectProps extends ViewProps {
  title?: string;
  options: OptionProps[];
  selectedValue: string;
  isModalPicker?: boolean;
  setSelectedValue: (value: string) => void;
  optionalCallback?: () => void;
}

export interface OptionProps {
  value: string;
  text: string;
}

const DefaultContainer = styled.View`
  background-color: transparent;
  width: 100%;
  height: 100%;  
`;

const ModalContainer = styled.View`
  background-color: ${Colors.NeutralWhite};
  border-top-left-radius: ${Scale(38)}px;
  border-top-right-radius: ${Scale(38)}px;
  padding: ${Scale(40)}px ${Scale(17)}px ${Scale(49)}px ${Scale(15)}px;
  margin-top: ${Scale(207)}px;
`;

const Title = styled(Text)`
  font-size: ${Scale(18)}px;
  line-height: ${Scale(24)}px;
  margin-bottom: ${Scale(24)}px;
  text-align: center;
  color: ${Colors.NeutralDarkGrey90};
`;

const ItemContainer = styled(TouchableOpacity)`
  height: ${Scale(43)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled(Text)`
  font-size: ${Scale(16)}px;
  line-height: ${Scale(24)}px;
  color: ${Colors.NeutralDarkGrey80};
`;

const ItemIcon = styled(IconFont)`
  margin-right: ${Scale(5)}px;
`;

const Select: FC<SelectProps> = ({ 
  title = '', 
  options, 
  selectedValue = '',
  isModalPicker = false,
  setSelectedValue, 
  optionalCallback = () => null
}: SelectProps) => {  
  const Container = isModalPicker ? ModalContainer : DefaultContainer 

  const onPressCallback = (isSelected: boolean, value: string) => {
    if (!isSelected) {
      return setSelectedValue(value);
    }
    optionalCallback();  
  }

  const renderOptions = () =>
    options.map(({ value, text }: OptionProps) => {
      const isSelected = selectedValue === value;
      return (
        <Surface
          key={value}
          style={!isSelected ? styles.surfaceDefault : styles.surfaceSelected}
          onPress={() => onPressCallback(isSelected, value)}
        >
          <ItemContainer
            onPress={() => onPressCallback(isSelected, value)}
          >
            <ItemText weight="600">{text}</ItemText>
            {isSelected && (
              <ItemIcon
                name="check-circle"
                size={20}
                color={Colors.SemanticInfoBlue50}
              />
            )}
          </ItemContainer>
        </Surface>
      );
    });

  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollContainer}
      >      
        {title !== '' && <Title weight="600">{title}</Title>}
        {renderOptions()}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  surfaceDefault: {
    marginBottom: Scale(16),
  },
  scrollContainer: {
    flexGrow: 1,
  },
  surfaceSelected: {
    marginBottom: Scale(16),
    borderColor: Colors.PrimaryBlue50,
  },
});

export default Select;
