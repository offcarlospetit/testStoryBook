import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import MovementRow from './MovementRow';
import Container from '../container/Container';
import { text } from '@storybook/addon-knobs';

const logoStories = storiesOf('Molecules/MovementRow', module);

logoStories.addDecorator(withKnobs);

logoStories
  .addDecorator(story => <Container>{story()}</Container>)
  .add('ChargeDebit', () => (
    <>
      <MovementRow
        //textInstallment={'Cuota 1 de 20'}
        arrowIconType={0}
        description={text('desc', 'Reverso compra')}
        amount={text('monto', '$8.200.200')}
        type="debitCard"
      />
      <MovementRow
        textInstallment={'Cuota 1 de 1'}
        arrowIconType={1}
        categoryType={'400'}
        description={text('desc', 'Reverso compra')}
        amount={text('monto', '$8.200.200')}
        type="debitCard"
      />
      <MovementRow
        textInstallment={'Cuota 1 de 1'}
        arrowIconType={1}
        categoryType={'600'}
        description={text('desc', 'Reverso compra')}
        amount={text('monto', '$8.200.200')}
        type="debitCard"
      />
      <MovementRow
        textInstallment={'Cuota 1 de 1'}
        arrowIconType={1}
        categoryType={'700'}
        description={text('desc', 'Reverso compra')}
        amount={text('monto', '$8.200.200')}
        type="debitCard"
      />
      <MovementRow
        textInstallment={'Cuota 1 de 1'}
        arrowIconType={1}
        categoryType={'800'}
        description={text('desc', 'Reverso compra')}
        amount={text('monto', '$8.200.200')}
        type="debitCard"
      />
      <MovementRow
        arrowIconType={1}
        title={'Cargo por:'}
        amount={text('monto', '$8.200.200')}
        type="debitCard"
        onClick={() => console.log('Ver el detalle')}
      />
    </>
  ))
  .add('DepositDebit', () => (
    <MovementRow
      arrowIconType={1}
      description={text('desc', 'Reverso compra nacional asd asd lkasd ')}
      amount={text('monto', '$8.200.200')}
      type="debitCard"
    />
  ));
