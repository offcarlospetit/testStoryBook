import React from 'react';
import styled from 'styled-components/native';
import {
  View as RNView,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import ChangePassword from './icons/ChangePassword';
import BrokenCard from './icons/BrokenCard';
import LockDeslock from './icons/LockDeslock';
import LockedOk from './icons/LockedOk';
import DeslockedOk from './icons/DeslockedOk';
import AccessDenied from './icons/AccessDenied';
import ReceiptSuccess from './icons/ReceiptSuccess';
import ReceiptWaiting from './icons/ReceiptWaiting';
import ReceiptWrong from './icons/ReceiptWrong';
import ReceiptAllWrong from './icons/ReceiptAllWrong';
import SearchWithoutResult from './icons/SearchWithoutResult';
import Search from './icons/Search';
import Back from './icons/Back';
import AddContact from './icons/AddContact';
import Close from './icons/Close';
import EmpyCreditCardMov from './icons/EmpyCreditCardMov';
import Deposit from './icons/Deposit';
import Charge from './icons/Charge';
import DepositCreditArrow from './icons/DepositCreditArrow';
import ChargeCreditArrow from './icons/ChargeCreditArrow';
import ChargeDebitArrow from './icons/ChargeDebitArrow';
import DepositDebitArrow from './icons/DepositDebitArrow';
import MyAccount from './icons/MyAccount';
import MyAccountActive from './icons/MyAccountActive';
import Transfers from './icons/Transfers';
import TransfersActive from './icons/TransfersActive';
import Payments from './icons/Payments';
import PaymentsActive from './icons/PaymentsActive';
import Investments from './icons/Investments';
import InvestmentsActive from './icons/InvestmentsActive';
import FileError from './icons/FileError';
import FileClock from './icons/FileClock';
import ReceiptError from './icons/ReceiptError';
import TCGoldCredito from './icons/TC-goldCredito';
import TCBancaJoven from './icons/TC-bancaJoven';
import TCBia from './icons/TC-bia';
import TCSignature from './icons/TC-signature';
import TCInfinite from './icons/TC-infinite';
import TCPlatinum from './icons/TC-platinum';
import TCGold from './icons/TC-gold';
import DeferredPayroll from './icons/DeferredPayroll';
import DeviceCompatibility from './icons/DeviceCompatibily';
import ArrowBackward from './icons/ArrowBackward';
import Check from './icons/Check';
import TrendingUp from './icons/TrendingUp';
import Wallet from './icons/Wallet';
import ExchangeArrow from './icons/ExchangeArrow';
import CardIcon from './icons/CardIcon';
import Menu from './icons/Menu';
import MenuActive from './icons/MenuActive';
import User from './icons/User';
import BlockedCard from './icons/BlockedCard';
import AlertFense from './icons/AlertFense';
import CardLocked from './icons/CardLocked';
import ChevronRight from './icons/ChevronRight';
import WarningTime from './icons/WarningTime';
import Person from './icons/Person';
import MovementDebitArrowDeposit from './icons/MovementDebitArrowDeposit';
import MovementDebitArrowCharge from './icons/MovementDebitArrowCharge';
import MovementDebitDeposit from './icons/MovementDebitDeposit';
import MovementDebitCharge from './icons/MovementDebitCharge';
import MovementDebitOptions from './icons/MovementDebitOptions';
import MovementDebitSearch from './icons/MovementDebitSearch';
import MoreVert from './icons/MoreVert';
import IconError from './icons/IconError';
import PadLock from './icons/PadLock';
import ArrowUp from './icons/ArrowUp';
import DebitMovementsNotFound from './icons/DebitMovementsNotFound';
import ErrorBalance from './icons/ErrorBalance';
import MovementsNotFound from './icons/MovementsNotFound';
import CardLock from './icons/CardLock';
import MovementChargeTravel from './icons/MovementChargeTravel';
import MovementChargeShopping from './icons/MovementChargeShopping';
import MovementChargeProfessionalServices from './icons/MovementChargeProfessionalServices';
import MovementChargeHealth from './icons/MovementChargeHealth';
import MovementChargeFinancialServices from './icons/MovementChargeFinancialServices';
import MovementChargeOthers from './icons/MovementChargeOthers';
import MovementChargeHome from './icons/MovementChargeHome';
import MovementChargeEntertainment from './icons/MovementChargeEntertainment';
import MovementChargeEducation from './icons/MovementChargeEducation';
import MovementChargeTransportation from './icons/MovementChargeTransportation';
import NoFunds from './icons/NoFunds';
import Asterisk from './icons/Asterisk';
import PersonMoney from './icons/PersonMoney';
import VariantDollar from './icons/VariantDollar';
import EmptyStateNewBill from './icons/EmptyStateNewBill';
import CheckBox from './icons/CheckBox';
import CheckBoxUnchecked from './icons/CheckBoxUnchecked';
import Elipse from './icons/Elipse';
import MoreVertical from './icons/MoreVertical';
import NotAccounts from './icons/NotAccounts';
import PatAutoExcluyente from './icons/PatAutoExcluyente';
import UncheckedIcon from './icons/UncheckedIcon';
import DisabledCheckedIcon from './icons/DisabledCheckedIcon';

import Agua from './icons/services/Agua';
import Arriendo from './icons/services/Arriendo';
import AsesoriasLegales from './icons/services/AsesoriasLegales';
import Autopistas from './icons/services/Autopistas';
import Carrier from './icons/services/Carrier';
import CasasComerciales from './icons/services/CasasComerciales';
import CategoriaDefault from './icons/services/CategoriaDefault';
import Cementerios from './icons/services/Cementerios';
import Clubes from './icons/services/Clubes';
import Cobranza from './icons/services/Cobranza';
import Construccion from './icons/services/Construccion';
import Contribuciones from './icons/services/Contribuciones';
import Corporaciones from './icons/services/Corporaciones';
import Credito from './icons/services/Credito';
import Distribucion from './icons/services/Distribucion';
import Educacion from './icons/services/Educacion';
import Estacionamiento from './icons/services/Estacionamiento';
import Gas from './icons/services/Gas';
import Hipotecarios from './icons/services/Hipotecarios';
import InformesComerciales from './icons/services/InformesComerciales';
import Internet from './icons/services/Internet';
import Luz from './icons/services/Luz';
import Mutuales from './icons/services/Mutuales';
import Promotoras from './icons/services/Promotoras';
import Publicidad from './icons/services/Publicidad';
import RecargaCelulares from './icons/services/RecargaCelulares';
import Salud from './icons/services/Salud';
import SeguridadAlarmas from './icons/services/SeguridadAlarmas';
import Seguros from './icons/services/Seguros';
import TarjetaCredito from './icons/services/TarjetaCredito';
import TelefoniaCelular from './icons/services/TelefoniaCelular';
import TelefoniaHogar from './icons/services/TelefoniaHogar';
import TvCable from './icons/services/TvCable';
import TvSatelital from './icons/services/TvSatelital';
import VentaCatalogo from './icons/services/VentaCatalogo';
import AlertWarning from './icons/AlertWarning';
import CheckCircle from './icons/CheckCircle';
import CheckCircleOutLine from './icons/CheckCircleOutLine';

export type IconNameSvg =
  | 'asterisk'
  | 'empty-state-new-bill'
  | 'person-money'
  | 'change-pass'
  | 'broken-card'
  | 'lock-deslock'
  | 'locked-ok'
  | 'deslocked-ok'
  | 'pad-lock'
  | 'access-denied'
  | 'receipt-success'
  | 'receipt-waiting'
  | 'search-without-result'
  | 'search'
  | 'back'
  | 'add-contact'
  | 'close'
  | 'my-account'
  | 'my-account-active'
  | 'transfers'
  | 'transfers-active'
  | 'payments'
  | 'payments-active'
  | 'investments'
  | 'investments-active'
  | 'file-error'
  | 'file-clock'
  | 'receipt-error'
  | 'TC-goldCredito'
  | 'TC-bancaJoven'
  | 'TC-bia'
  | 'TC-gold'
  | 'TC-infinite'
  | 'TC-platinum'
  | 'TC-signature'
  | 'receipt-waiting'
  | 'receipt-wrong'
  | 'receipt-all-wrong'
  | 'search-without-result'
  | 'empy-creditcard-mov'
  | 'deposit'
  | 'charge'
  | 'deposit-credit-arrow'
  | 'charge-credit-arrow'
  | 'charge-debit-arrow'
  | 'deposit-debit-arrow'
  | 'arrow-backward'
  | 'check'
  | 'trending-up'
  | 'wallet'
  | 'card-icon'
  | 'exchange-arrow'
  | 'deferred-payroll'
  | 'menu'
  | 'menu-active'
  | 'user'
  | 'block-card'
  | 'alert-fense'
  | 'card-locked'
  | 'chevron-right'
  | 'warning-time'
  | 'person'
  | 'device-compatibility'
  | 'movement-debit-arrow-deposit'
  | 'movement-debit-arrow-charge'
  | 'movement-debit-deposit'
  | 'movement-debit-charge'
  | 'movement-debit-options'
  | 'more-vertical-options'
  | 'movement-debit-search'
  | 'icon-error'
  | 'arrow-up'
  | 'debit-movements-not-found'
  | 'error-balance'
  | 'movements-not-found'
  | 'card-lock'
  | 'movement-charge-travel'
  | 'movement-charge-shopping'
  | 'movement-charge-professional-services'
  | 'movement-charge-health'
  | 'movement-charge-financial-services'
  | 'movement-charge-others'
  | 'movement-charge-home'
  | 'movement-charge-entertainment'
  | 'movement-charge-education'
  | 'movement-charge-transportation'
  | 'no-account-funds'
  | 'variant-dollar'
  | 'check-box'
  | 'elipse'
  | 'more-vertical'
  | 'check-box-uncheck'
  | 'not-accounts'
  | 'pat-auto-exc'
  | 'uncheck-icon'
  | 'disabled-check'
  | 'asterisk'
  | 'loop'
  | 'casas-comerciales'
  | 'person'
  | 'agua'
  | 'telefonia-celular'
  | 'telefonia-hogar'
  | 'gas'
  | 'tv-cable'
  | 'salud'
  | 'internet'
  | 'hipotecarios'
  | 'comerciales'
  | 'cementerios'
  | 'autopistas'
  | 'carrier'
  | 'luz'
  | 'clubes'
  | 'educacion'
  | 'seguros'
  | 'contribuciones'
  | 'mutuales'
  | 'informes-comerciales'
  | 'tv-satelital'
  | 'publicidad'
  | 'credito'
  | 'distribucion'
  | 'cobranza'
  | 'corporaciones'
  | 'arriendos'
  | 'categoria-default'
  | 'seguridad-alarmas'
  | 'tarjeta-credito'
  | 'domain'
  | 'promotoras'
  | 'recarga-celulares'
  | 'corporaciones-variant'
  | 'venta-catalogo'
  | 'asesorias-legales'
  | 'alert-warning'
  | 'check-circle'
  | 'check-circle-outline';

export interface IconProps extends TouchableOpacityProps {
  name: IconNameSvg;
  color?: string;
  color2?: string;
  touchable?: boolean;
}

const UIIcon = styled(RNTouchableOpacity)<TouchableOpacityProps>``;
const UIIconNoPress = styled(RNView)<ViewProps>``;

const Icon: React.FC<IconProps> = ({
  name,
  color,
  color2,
  touchable = true,
  ...res
}) => {
  const ParentSvgIcon: React.FC = touchable ? UIIcon : UIIconNoPress;
  return (
    <ParentSvgIcon {...res}>
      {(name === 'broken-card' && <BrokenCard />) ||
        (name === 'empty-state-new-bill' && <EmptyStateNewBill />) ||
        (name === 'person-money' && <PersonMoney />) ||
        (name === 'asterisk' && <Asterisk />) ||
        (name === 'change-pass' && <ChangePassword color={color} />) ||
        (name === 'lock-deslock' && <LockDeslock color={color} />) ||
        (name === 'pad-lock' && <PadLock color={color} />) ||
        (name === 'locked-ok' && <LockedOk />) ||
        (name === 'deslocked-ok' && <DeslockedOk />) ||
        (name === 'access-denied' && <AccessDenied />) ||
        (name === 'receipt-success' && <ReceiptSuccess />) ||
        (name === 'receipt-waiting' && <ReceiptWaiting />) ||
        (name === 'receipt-wrong' && <ReceiptWrong />) ||
        (name === 'receipt-all-wrong' && <ReceiptAllWrong />) ||
        (name === 'search-without-result' && <SearchWithoutResult />) ||
        (name === 'search' && <Search color={color} />) ||
        (name === 'back' && <Back color={color} />) ||
        (name === 'add-contact' && <AddContact />) ||
        (name === 'close' && <Close />) ||
        (name === 'empy-creditcard-mov' && <EmpyCreditCardMov />) ||
        (name === 'deposit' && <Deposit />) ||
        (name === 'charge' && <Charge />) ||
        (name === 'deposit-credit-arrow' && <DepositCreditArrow />) ||
        (name === 'deposit-debit-arrow' && <DepositDebitArrow />) ||
        (name === 'charge-credit-arrow' && <ChargeCreditArrow />) ||
        (name === 'charge-debit-arrow' && <ChargeDebitArrow />) ||
        (name === 'my-account' && <MyAccount />) ||
        (name === 'my-account-active' && <MyAccountActive />) ||
        (name === 'transfers' && <Transfers />) ||
        (name === 'transfers-active' && <TransfersActive />) ||
        (name === 'payments' && <Payments />) ||
        (name === 'payments-active' && <PaymentsActive />) ||
        (name === 'investments' && <Investments />) ||
        (name === 'investments-active' && <InvestmentsActive />) ||
        (name === 'file-error' && <FileError />) ||
        (name === 'file-clock' && <FileClock />) ||
        (name === 'receipt-error' && <ReceiptError />) ||
        (name === 'TC-goldCredito' && <TCGoldCredito />) ||
        (name === 'TC-bancaJoven' && <TCBancaJoven />) ||
        (name === 'TC-bia' && <TCBia />) ||
        (name === 'TC-gold' && <TCGold />) ||
        (name === 'TC-infinite' && <TCInfinite />) ||
        (name === 'TC-platinum' && <TCPlatinum />) ||
        (name === 'receipt-wrong' && <ReceiptWrong />) ||
        (name === 'TC-signature' && <TCSignature />) ||
        (name === 'device-compatibility' && <DeviceCompatibility />) ||
        (name === 'arrow-backward' && <ArrowBackward />) ||
        (name === 'check' && <Check />) ||
        (name === 'trending-up' && <TrendingUp />) ||
        (name === 'exchange-arrow' && <ExchangeArrow />) ||
        (name === 'card-icon' && <CardIcon />) ||
        (name === 'wallet' && <Wallet />) ||
        (name === 'deferred-payroll' && <DeferredPayroll />) ||
        (name === 'menu' && <Menu />) ||
        (name === 'menu-active' && <MenuActive />) ||
        (name === 'user' && <User />) ||
        (name === 'block-card' && <BlockedCard color={color} />) ||
        (name === 'alert-fense' && <AlertFense />) ||
        (name === 'card-locked' && <CardLocked />) ||
        (name === 'chevron-right' && <ChevronRight />) ||
        (name === 'warning-time' && <WarningTime />) ||
        (name === 'person' && <Person />) ||
        (name === 'device-compatibility' && <DeviceCompatibility />) ||
        (name === 'movement-debit-arrow-deposit' && (
          <MovementDebitArrowDeposit />
        )) ||
        (name === 'movement-debit-arrow-charge' && (
          <MovementDebitArrowCharge />
        )) ||
        (name === 'movement-debit-deposit' && <MovementDebitDeposit />) ||
        (name === 'movement-debit-charge' && <MovementDebitCharge />) ||
        (name === 'more-vertical-options' && <MoreVert />) ||
        (name === 'movement-debit-options' && <MovementDebitOptions />) ||
        (name === 'movement-debit-search' && <MovementDebitSearch />) ||
        (name === 'icon-error' && <IconError />) ||
        (name === 'arrow-up' && <ArrowUp />) ||
        (name === 'debit-movements-not-found' && <DebitMovementsNotFound />) ||
        (name === 'error-balance' && <ErrorBalance />) ||
        (name === 'movements-not-found' && <MovementsNotFound />) ||
        (name === 'card-lock' && <CardLock />) ||
        (name === 'movement-charge-travel' && <MovementChargeTravel />) ||
        (name === 'movement-charge-shopping' && <MovementChargeShopping />) ||
        (name === 'movement-charge-professional-services' && (
          <MovementChargeProfessionalServices />
        )) ||
        (name === 'movement-charge-health' && <MovementChargeHealth />) ||
        (name === 'movement-charge-financial-services' && (
          <MovementChargeFinancialServices />
        )) ||
        (name === 'movement-charge-others' && <MovementChargeOthers />) ||
        (name === 'movement-charge-home' && <MovementChargeHome />) ||
        (name === 'movement-charge-entertainment' && (
          <MovementChargeEntertainment />
        )) ||
        (name === 'movement-charge-education' && <MovementChargeEducation />) ||
        (name === 'movement-charge-transportation' && (
          <MovementChargeTransportation />
        )) ||
        (name === 'no-account-funds' && <NoFunds />) ||
        (name === 'variant-dollar' && <VariantDollar />) ||
        (name === 'check-box' && <CheckBox color={color} />) ||
        (name === 'elipse' && <Elipse color={color} />) ||
        (name === 'more-vertical' && <MoreVertical color={color} />) ||
        (name === 'check-box-uncheck' && <CheckBoxUnchecked color={color} />) ||
        (name === 'not-accounts' && <NotAccounts />) ||
        (name === 'pat-auto-exc' && <PatAutoExcluyente />) ||
        (name === 'uncheck-icon' && <UncheckedIcon />) ||
        (name === 'disabled-check' && <DisabledCheckedIcon />) ||
        (name === 'agua' && <Agua />) ||
        (name === 'telefonia-celular' && <TelefoniaCelular />) ||
        (name === 'telefonia-hogar' && <TelefoniaHogar />) ||
        (name === 'gas' && <Gas />) ||
        (name === 'tv-cable' && <TvCable />) ||
        (name === 'salud' && <Salud />) ||
        (name === 'internet' && <Internet />) ||
        (name === 'hipotecarios' && <Hipotecarios />) ||
        (name === 'comerciales' && <CasasComerciales />) ||
        (name === 'cementerios' && <Cementerios />) ||
        (name === 'autopistas' && <Autopistas />) ||
        (name === 'carrier' && <Carrier />) ||
        (name === 'luz' && <Luz />) ||
        (name === 'clubes' && <Clubes />) ||
        (name === 'educacion' && <Educacion />) ||
        (name === 'seguros' && <Seguros />) ||
        (name === 'contribuciones' && <Contribuciones />) ||
        (name === 'mutuales' && <Mutuales />) ||
        (name === 'informes-comerciales' && <InformesComerciales />) ||
        (name === 'tv-satelital' && <TvSatelital />) ||
        (name === 'publicidad' && <Publicidad />) ||
        (name === 'credito' && <Credito />) ||
        (name === 'distribucion' && <Distribucion />) ||
        (name === 'cobranza' && <Cobranza />) ||
        (name === 'corporaciones' && <Estacionamiento />) ||
        (name === 'arriendos' && <Arriendo />) ||
        (name === 'categoria-default' && <CategoriaDefault />) ||
        (name === 'seguridad-alarmas' && <SeguridadAlarmas />) ||
        (name === 'tarjeta-credito' && <TarjetaCredito />) ||
        (name === 'domain' && <Construccion />) ||
        (name === 'promotoras' && <Promotoras />) ||
        (name === 'recarga-celulares' && <RecargaCelulares />) ||
        (name === 'venta-catalogo' && <VentaCatalogo />) ||
        (name === 'corporaciones-variant' && <Corporaciones />) ||
        (name === 'asesorias-legales' && <AsesoriasLegales />) ||
        (name === 'check-circle' && <CheckCircle />) ||
        (name === 'alert-warning' && <AlertWarning color={color} />) ||
        (name === 'check-circle-outline' && (
          <CheckCircleOutLine color={color} />
        ))}
    </ParentSvgIcon>
  );
};

export default Icon;
