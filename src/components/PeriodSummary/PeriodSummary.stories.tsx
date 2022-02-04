import React from 'react';
import { storiesOf} from '@storybook/react-native';
import PeriodSummary from './PeriodSummary';
import Container from '../container/Container';

const logoStories = storiesOf('Molecule/PeriodSummary', module);

logoStories
  .addDecorator((story) => <Container style={{ backgroundColor: '#fff'}}>{story()}</Container>)
  .add('PeriodSummary', () =>
    <PeriodSummary
      isOpen={true}
      title = 'Resumen del periodo'
      subTitle = '21 abr - 21 may 2021'
      continueButtonText = 'Continuar'
      totalChargesLabel = 'Total cargos'
      totalChargesValue = '$300.000'
      totalPaymentsLabel = 'Total Abonos'
      totalPaymentsValue = '$40.000'
      totalPeriodLabel = 'Total periodo'
      totalPeriodValue = '$260.000'
      closeModalCallback={() => null}
    />,
  )
