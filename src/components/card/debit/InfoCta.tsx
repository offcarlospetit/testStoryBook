import React from 'react';
import styled from 'styled-components/native';
import type { ViewProps } from 'react-native';

import Colors from '../../../constants/colors';
import Scale from '../../../utils/Scale';
import Icon from '../../icon/Icon';

import Text from '../../text/Text';
export interface InfoCtaProps extends ViewProps {
  accountName?: string;
  accountNumber: string;
  disableSharing?: boolean;
  isFavorite?: boolean;
}

interface ContainerData extends ViewProps {
  isFavorite?: boolean;
}

const ContainerInfo = styled.View`
  flex-direction: row;
`;
const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ContainerData = styled.View<ContainerData>`
  margin-left: ${props => (props.isFavorite ? Scale(12) : 0)}px;
`;

// const IconShared = styled(Icon)`
//   height: ${Scale(19.92)}px;
//   width: ${Scale(18)}px;
//   margin-left: ${Scale(13)}px;
// `;

const TxtTitle = styled(Text)`
  color: ${Colors.NeutralWhite};
  font-size: ${Scale(16)}px;
  line-height: ${Scale(24)}px;
`;

const Info = styled(Text)`
  color: ${Colors.NeutralWhite};
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
`;

const IconFav = styled(Icon)`
  height: ${Scale(19)}px;
  width: ${Scale(20)}px;
  margin-top: ${Scale(2)}px;
`;

const getAccountName = (
  txt: string | undefined,
  isfavorite: boolean | undefined,
): string => {
  if (!txt) return `Test Account`;

  const allowedLength = isfavorite ? 18 : 20;
  if (txt.length > 20) {
    return `${txt.substring(0, allowedLength)}...`;
  } else {
    return txt;
  }
};

const InfoCta: React.FC<InfoCtaProps> = props => {
  const {
    accountName,
    accountNumber,
    // disableSharing,
    isFavorite,
  } = props;

  const txtAccountName = getAccountName(accountName, isFavorite);

  return (
    <ContainerInfo>
      {isFavorite && <IconFav name={'start'} />}
      <ContainerData isFavorite={isFavorite}>
        <ContainerTitle>
          <TxtTitle numberOfLines={1} weight={'600'}>
            {txtAccountName}
          </TxtTitle>
          {/* {!disableSharing && <IconShared name="shared" />} */}
        </ContainerTitle>
        <Info>Nº {accountNumber}</Info>
      </ContainerData>
    </ContainerInfo>
  );
};

export default InfoCta;
