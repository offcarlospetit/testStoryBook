import React, { FC } from 'react';
import { Switch } from 'react-native';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import Text from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';

export interface FormSwitchProps extends ViewProps {
  label: string;
  description: string;  
  isActive: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  toggleSwitch: () => void
}

const FormSwitchContainer = styled.View`  
  width: 100%;
  align-items: flex-start;
`;

const SwitchContainer = styled.View`
  width: 100%;  
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled(Text)`  
  font-size: ${Scale(16)}px;    
  line-height: ${Scale(24)}px;
  color: ${Colors.NeutralDarkGrey80};  
`;

const Description = styled(Text)`
  width: 75%;  
  margin-top: ${Scale(8)}px;
  font-size: ${Scale(14)}px;  
  line-height: ${Scale(21)}px;
  color: ${Colors.GrayInversiones};
`;

const FormSwitch: FC<FormSwitchProps> = (props: FormSwitchProps) => {
  const { 
    label,
    description,
    isActive,
    containerStyles,
    toggleSwitch
  } = props;

  return (    
    <FormSwitchContainer style={containerStyles}>
      <SwitchContainer>
        <Label weight="600">{label}</Label>
        <Switch
          thumbColor={Colors.NeutralWhite}
          trackColor={customSwipeStyles}          
          ios_backgroundColor={Colors.NeutralLightGrey50}
          onValueChange={toggleSwitch}            
          value={isActive}
        />
      </SwitchContainer>   
      
      <Description weight="400">{description}</Description>
     
    </FormSwitchContainer>    
  );
};

const customSwipeStyles = {
  false: Colors.NeutralLightGrey50, 
  true: Colors.PrimaryBlue50
}

export default FormSwitch;