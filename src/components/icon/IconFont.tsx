import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';

const IconFonts = createIconSetFromIcoMoon(
  icoMoonConfig,
  'Icomoon',
  'Icomoon.ttf',
);

export type IconFontName =
  | 'agua'
  | 'telefonia-celular'
  | 'telefonia-hogar'
  | 'gas'
  | 'tv-cable'
  | 'salud'
  | 'internet'
  | 'hipotecarios'
  | 'casas-comerciales'
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
  | 'asesorias-legales'
  | 'uniED26'
  | 'tef'
  | 'invesment'
  | 'wallet'
  | 'payment'
  | 'menu'
  | 'arrow-down'
  | 'arrow-up'
  | 'previous-periods'
  | 'current-period'
  | 'add-contact'
  | 'check-circle'
  | 'chevron-down'
  | 'arrow-left'
  | 'retry-arrow'
  | 'info-circle'
  | 'loop'
  | 'pyment-phone'
  | 'pyment-red'
  | 'pyment-car'
  | 'pyment-light'
  | 'pyment-water'
  | 'at-checkbox1'
  | 'at-checkbox'
  | 'more-vertical'
  | 'check-box-outline-blank'
  | 'check-box'
  | 'brightness-1'
  | 'brightness-2'
  | 'fiber-manual-record'
  | 'elipse'
  | 'crop-din'
  | 'photo-library'
  | 'more-vert'
  | 'whatsapp-sCliente'
  | 'transferir-nContacto'
  | 'bloqueo-tarjetas'
  | 'pagar-tarjeta'
  | 'error-outline'
  | 'warning'
  | 'share'
  | 'exchange-arrow'
  | 'saldos-movimientos'
  | 'gift';
export interface IconFontProps {
  name: IconFontName;
  color: string;
  size: number;
}

const IconFont: React.FC<IconFontProps> = ({
  name,
  color,
  size,
  ...res
}) => {
  return <IconFonts name={name} color={color} size={size} {...res} />;
};

export default IconFont;
