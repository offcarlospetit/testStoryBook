import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import TemporalLock from './TemporalLock';

test('TemporalLock component should render correctly', () => {
  render(
    <TemporalLock
      title="Test "
      blockCardFor="Test "
      aditionalInfo={`Text Test`}
      listItems={['Text Test']}
      cardStatusTitle="State: test"
      currentCardStatus="Bloqueando"
      currentCardStatusNumber={2}
      isActiveCard={true}
      toggleSwitch={() => null}
    />,
  );
});
