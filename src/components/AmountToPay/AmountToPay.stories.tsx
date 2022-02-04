import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import Container from '../container/Container';
import AmountToPay from './AmountToPay';

const amountToPayStories = storiesOf('Molecules/AmountToPay', module);

amountToPayStories.addDecorator(withKnobs);

amountToPayStories  
  .addDecorator(story => <Container>{story()}</Container>)
  .add('AmountToPay', () => 
    <AmountToPay      
      label='Monto a pagar'
      value='Valor referencial del dólar $825,25'
      isLoading={false}
    />
  )
