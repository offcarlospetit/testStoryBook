import type { IconNameSvg } from 'src/components/icon/IconSvg';
import type { IconFontName } from '../components/icon/IconFont';
export type IconServicesMapperType = Record<number, IconFontName>;
export type IconServicesMapperTypeSvg = Record<number, IconNameSvg>;
export type IconServicesType = IconFontName;
export const IconServicesMapper: IconServicesMapperType = {
  1: "agua",
  2: "telefonia-celular",
  3: "telefonia-hogar",
  4: "gas",
  5: "tv-cable",
  6: "salud",
  7: "internet",
  8: "hipotecarios",
  9: "comerciales",
  10: "cementerios",
  11: "autopistas",
  12: "carrier",
  14: "luz",
  15: "clubes",
  16: "educacion",
  20: "seguros",
  21: "contribuciones",
  24: "mutuales",
  27: "informes-comerciales",
  29: "tv-satelital",
  30: "publicidad",
  34: "credito",
  36: "distribucion",
  37: "cobranza",
  45: "corporaciones",     // estacionamiento = corporaciones
  47: "arriendos",
  54: "categoria-default", // venta por catálogo = categoria-default
  55: "seguridad-alarmas",
  60: "tarjeta-credito",
  71: "domain",            // construcción = domain
  81: "asesorias-legales",
}
export const IconServicesMappersvg: IconServicesMapperTypeSvg = {
  1: "agua",
  2: "telefonia-celular",
  3: "telefonia-hogar",
  4: "gas",
  5: "tv-cable",
  6: "salud",
  7: "internet",
  8: "hipotecarios",
  9: "comerciales",
  10: "cementerios",
  11: "autopistas",
  12: "carrier",
  14: "luz",
  15: "clubes",
  16: "educacion",
  20: "seguros",
  21: "contribuciones",
  24: "mutuales",
  27: "informes-comerciales",
  29: "tv-satelital",
  30: "publicidad",
  34: "credito",
  36: "distribucion",
  37: "cobranza",
  45: "corporaciones",     // estacionamiento = corporaciones
  47: "arriendos",
  54: "categoria-default", // venta por catálogo = categoria-default
  55: "seguridad-alarmas",
  60: "tarjeta-credito",
  71: "domain",            // construcción = domain
  81: "asesorias-legales",
}