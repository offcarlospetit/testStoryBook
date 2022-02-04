import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function TrendingUp() {
  const icon: string = `
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4142 7.5C21.5233 7.5 21.0771 8.57714 21.7071 9.20711L22.8625 10.3625L16.7625 16.4625L12.4701 12.1701C12.0794 11.7794 11.4458 11.7796 11.0554 12.1706L3.20615 20.0304C2.81608 20.421 2.81629 21.0538 3.20663 21.4441L3.55539 21.7929C3.94592 22.1834 4.57908 22.1834 4.96961 21.7929L11.7625 15L16.056 19.2935C16.4463 19.6838 17.079 19.684 17.4696 19.294L24.6375 12.1375L25.7929 13.2929C26.4229 13.9229 27.5 13.4767 27.5 12.5858V8.5C27.5 7.94772 27.0523 7.5 26.5 7.5H22.4142Z" fill="#4DA0E3"/>
</svg>
`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
