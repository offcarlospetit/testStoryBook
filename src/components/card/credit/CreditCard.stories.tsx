import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import CreditCard from './CreditCard';
import { View } from 'react-native';

const creditCardStories = storiesOf('Molecules/CreditCard', module);

creditCardStories.addDecorator(withKnobs);

creditCardStories
.addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('CreditCard', () => 
  <CreditCard
    errorBalance={false}
    maskedPan={'123213123'}
    hideBalance={true}
    onPressVisibility={() => null}
    onPressCard={() => null}
    messageError={'test error message'}
    creditCardCode={'210011'} // eliminate when handling the fatal error
    balanceNational=''
    balanceInternational=''
  />
  )
