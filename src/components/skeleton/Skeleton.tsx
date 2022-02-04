import React from 'react';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';
import DebitContainer from './DebitContainer';
import ContactItem from './ContactItem';
import ContainerTitle from './ContainerTitle';
import MovementsItem from './MovementsItem';
import MovementsDebitTitle from './MovementsDebitTitle';
import CardsMenuItem from './CardsMenuItem';
import CardsMenuTitle from './CardsMenuTitle';
import MovementsSummaryTC from './MovementsSummaryTC';
import MovementsSummaryTCPrevius from './MovementsSummaryTCPrevius'
import DebtPayment from './DebtPayment';
import DebtsPaymentTitle from './DebtsPaymentTitle'


export interface SkeletonProps extends ViewProps {
  type: 
    'debtPayment' |
    'debtsPaymentTitle' |
    'debitContainer' | 
    'containerTitle' | 
    'contactItem' | 
    'CardsMenuItem' | 
    'CardsMenuTitle' | 
    'movementsItem' | 
    'movementsDebitTitle' | 
    'MovementsSummaryTC' | 
    'MovementsSummaryTCPrevius';
  skeletonStyle?:StyleProp<ViewStyle>;
  containerStyle?:StyleProp<ViewStyle>;
}

const Skeleton = ({ type, style, skeletonStyle, containerStyle }: SkeletonProps) => {
  return (
    <React.Fragment>
      {type === 'debtPayment' && <DebtPayment style={style} />}
      {type === 'debtsPaymentTitle' && <DebtsPaymentTitle style={style} />}
      {type === 'debitContainer' && <DebitContainer style={style} />}
      {type === 'containerTitle' && <ContainerTitle style={style} skeletonStyle={skeletonStyle} />}
      {type === 'contactItem' && <ContactItem style={style} />}
      {type === 'movementsItem' && <MovementsItem style={style} />}
      {type === 'movementsDebitTitle' && <MovementsDebitTitle style={style} />}
      {type === 'CardsMenuTitle' && <CardsMenuTitle style={style} />}
      {type === 'CardsMenuItem' && <CardsMenuItem style={style} />}
      {type === 'MovementsSummaryTC' && <MovementsSummaryTC style={style} />}
      {type === 'MovementsSummaryTCPrevius' && <MovementsSummaryTCPrevius style={style} styleView={containerStyle} />}           
    </React.Fragment>
  );
};

export default Skeleton;
