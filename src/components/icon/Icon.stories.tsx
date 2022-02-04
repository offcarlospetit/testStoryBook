import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import Icon, {IconName} from './Icon';
import IconSvg, {IconNameSvg} from './IconSvg';
import Container from '../container/Container';
import {select} from '@storybook/addon-knobs';
import Colors from '../../constants/colors';
import IconFont, {IconFontName} from './IconFont';

const labelCard = 'Icon Card';
const cards = {
  GoldCredito: 'TC_goldCredito',
  BancaJoven: 'TC-bancaJoven',
  Bia: 'TC-bia',
  Gold: 'TC-gold',
  Infinite: 'TC-infinite',
  Platinum: 'TC-platinum',
  Signature: 'TC-signature',
};
const defaultValueCard = 'TC_goldCredito';
const groupIdCard = 'Tarjetas Credito';

const labelIcon = 'Icon';
const Icons = {
  Error: 'error',
  Oval: 'oval',
  Close: 'close',
  UserPassword: 'user-password',
  ChevronRight: 'chevron-right',
  ChevronDown: 'chevron-down',
  Shared: 'shared',
  VisibilityOn: 'visibility-on',
  DividerHorizontal: 'divider-horizontal',
  ErrorBalance: 'error-balance',
  VisibilityOff: 'visibility-off',
  Back: 'back',
  Search: 'search',
  Start: 'start',
  AddCircleOutline: 'add-circle-outline',
  AddContact: 'add-contact',
  SearchWithoutResult: 'search_without_result',
  Unplugged: 'unplugged',
  Next: 'next',
  Person: 'person',
  Visibility: 'visibility',
};
const defaultValueIcon = 'error';
const groupIdIcon = 'Iconos';

const labelIconSvg = 'Icon Svg';
const IconsSvg = {
  Success: 'receipt-success',
  Waiting: 'receipt-waiting',
  Wrong: 'receipt-wrong',
  AllWrong: 'receipt-all-wrong',
  SearchNotResult: 'search-without-result',
  Search: 'search',
  Back: 'back',
  AddContact: 'add-contact',
  Close: 'close',
  EmpyCreditCardMov: 'empy-creditcard-mov',
  Deposit: 'deposit',
  DepositCreditArrow: 'deposit-credit-arrow',
  DepositDebitArrow: 'deposit-debit-arrow',
  Charge: 'charge',
  ChargeCreditArrow: 'charge-credit-arrow',
  ChargeDebitArrow: 'charge-debit-arrow',
  ArrowBackward: 'arrow-backward',
  Check: 'check',
  TrendingUp: 'trending-up',
  Wallet: 'wallet',
  ExchangeArrow: 'exchange-arrow',
  CardIcon: 'card-icon',
  WarningTime: 'warning-time',
  Person: 'person',
  MovementDebitArrowDeposit: 'movement-debit-arrow-deposit',
  MovementDebitArrowCharge: 'movement-debit-arrow-charge',
  MovementDebitDeposit: 'movement-debit-deposit',
  MovementDebitCharge: 'movement-debit-charge',
  MovementDebitOptions: 'movement-debit-options',
  MovementDebitSearch: 'movement-debit-search',
  ArrowUp: 'arrow-up',
  MovementChargeTravel: 'movement-charge-travel',
  MovementChargeShopping: 'movement-charge-shopping',
  MovementChargeProfessionalServices: 'movement-charge-professional-services',
  MovementChargeHealth: 'movement-charge-health',
  MovementChargeFinancialServices: 'movement-charge-financial-services',
  MovementChargeOthers: 'movement-charge-others',
  MovementChargeHome: 'movement-charge-home',
  MovementChargeEntertainment: 'movement-charge-entertainment',
  MovementChargeEducation: 'movement-charge-education',
  MovementChargeTransportation: 'movement-charge-transportation',
  VariantDollar: 'variant-dollar',
  agua: 'agua',
  telefoniaCelular: 'telefonia-celular',
  telefoniahogar: 'telefonia-hogar',
  gas: 'gas',
  tvcable: 'tv-cable',
  salud: 'salud',
  internet: 'internet',
  hipotecarios: 'hipotecarios',
  comerciales: 'comerciales',
  cementerios: 'cementerios',
  autopistas: 'autopistas',
  carrier: 'carrier',
  luz: 'luz',
  clubes: 'clubes',
  educacion: 'educacion',
  seguros: 'seguros',
  contribuciones: 'contribuciones',
  mutuales: 'mutuales',
  informesc: 'informes-comerciales',
  tvsatelital: 'tv-satelital',
  publicidad: 'publicidad',
  distribucion: 'distribucion',
  cobranza: 'cobranza',
  corporaciones: 'corporaciones',
  arriendos: 'arriendos',
  categoriadefault: 'categoria-default',
  seguridadalarmas: 'seguridad-alarmas',
  tarjetacredito: 'tarjeta-credito',
  domain: 'domain',
  promotoras: 'promotoras',
  recarga: 'recarga-celulares',
  corporacionesvariant: 'corporaciones-variant',
  venta: 'venta-catalogo',
  asesorias: 'asesorias-legales',
};
const defaultValueIconSvg = 'receipt-success';
const groupIdIconSvg = 'Iconos Svg';

const labelIconFont = 'Icon Svg';
const IconFonts: Record<string, IconFontName> = {
  Tef: 'tef',
  Invesment: 'invesment',
  Wallet: 'wallet',
  Payment: 'payment',
  Menu: 'menu',
  CurrentPeriod: 'current-period',
  PreviousPeriods: 'previous-periods',
  AddContact: 'add-contact',
  CheckCircle: 'check-circle',
  ChevronDown: 'chevron-down',
  ArrowLeft: 'arrow-left',
  RetryArrow: 'retry-arrow',
  InfoCirle: 'info-circle',
  Loop: 'loop',
  PaymentPhone: 'pyment-phone',
  PaymentRed: 'pyment-red',
  PaymentCar: 'pyment-car',
  PaymentLight: 'pyment-light',
  PaymentWater: 'pyment-water',
  CheckBoxCheckedOutline: 'check-box-outline-blank',
  CheckBoxChecked: 'check-box',
  MoreVertical: 'more-vertical',
  Whatsapp: 'whatsapp-sCliente',
  TransferContact: 'transferir-nContacto',
  BlockCard: 'bloqueo-tarjetas',
  PayCard: 'pagar-tarjeta',
  ExchangeArrow: 'exchange-arrow',
  SaldosMovimientos: 'saldos-movimientos',
  Gift: 'gift',
};

const defaultValueIconFont = 'invesment';
const groupIdIconFont = 'Iconos Svg';

storiesOf('Atoms/Icon', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Icon Card', () => (
    <Icon
      name={select(labelCard, cards, defaultValueCard, groupIdCard) as IconName}
    />
  ))
  // .add('Icon Fonts', () => (
  //   <IconFont
  //     name={
  //       select(
  //         labelIconFont,
  //         IconFonts,
  //         defaultValueIconFont,
  //         groupIdIconFont,
  //       ) as IconFontName
  //     }
  //     size={60}
  //     color={Colors.NeutralLightGrey70}
  //   />
  // ))
  .add('Icons', () => (
    <Icon
      name={select(labelIcon, Icons, defaultValueIcon, groupIdIcon) as IconName}
      style={{backgroundColor: Colors.neutralLightGrey20}}
    />
  ))
  .add('Svg Icons', () => (
    <View style={{width: 100, aspectRatio: 1}}>
      <IconSvg
        name={
          select(
            labelIconSvg,
            IconsSvg,
            defaultValueIconSvg,
            groupIdIconSvg,
          ) as IconNameSvg
        }
      />
    </View>
  ));
