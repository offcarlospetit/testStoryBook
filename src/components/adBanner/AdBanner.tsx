import React from 'react';
import styled from 'styled-components/native';

import LottieView from 'lottie-react-native';
import Text, { Weight } from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import { lottieLibrary } from '../../assets/Lotties/LottieLibrary';
import type { LottieAssetName } from '../../assets/Lotties/LottieLibrary';
import { makeAccesibility } from '../../utils/AccesibilityHelpers';

export interface AdBannerProps {
  titleFontWeight?: Weight;
  descFontWeight?: Weight;
  animation?: LottieAssetName;
  title: string;
  description: string;
  onClick?: () => void;
}

const ContainerAd = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-right: ${Scale(12)}px;
  padding-left: ${Scale(12)}px;
  padding-top: ${Scale(16)}px;
`;

const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
`;

const AdView = styled.View`
  width: 100%;
  height: ${Scale(116)}px;
  background-color: ${Colors.NeutralWhite};
  border-radius: ${Scale(12)}px;
  border-color: rgba(166, 231, 223, 1);
  border-width: ${Scale(1)}px;
  flex-direction: row; 
`;

const AnimationContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row; 
`;

const AnimationView = styled.View`
  width: 80%;
  height: 80%;
  overflow: hidden;
  position: absolute;
`;

const InfoContainer = styled.View`
  flex: 3;
  justify-content: center;
`;

const TitleView = styled.View`
  flex: 1;
  justify-content: center;
  padding-right: ${Scale(10)}px;
  padding-left: ${Scale(10)}px;
`;

const DescriptionView = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-right: ${Scale(12)}px;
  padding-left: ${Scale(12)}px;
`;

const AdBanner = (props: AdBannerProps) => {
  const {
    animation = 'slide3',
    onClick = () => null,
    title,
    description,
    titleFontWeight = '700',
    descFontWeight = '500',
  } = props;
  return (
    <ContainerAd>
      <ButtonWrapper
        onPress={onClick}
        {...makeAccesibility('Botón agregar sugerencias')}
      >
        <AdView>
          <AnimationContainer>
            <AnimationView>
              <LottieView
                source={lottieLibrary[animation]}
                autoPlay={true}
                loop={false}
              />
            </AnimationView>
          </AnimationContainer>
          <InfoContainer>
            <TitleView>
              <Text
                weight={titleFontWeight}
                style={{
                  fontSize: Scale(16),
                  lineHeight: Scale(24),
                  marginTop: Scale(20),
                }}
              >
                {title}
              </Text>
            </TitleView>
            <DescriptionView>
              <Text
                weight={descFontWeight}
                style={{
                  fontSize: Scale(14),
                  lineHeight: Scale(20),
                }}
              >
                {description}
              </Text>
            </DescriptionView>
          </InfoContainer>
        </AdView>
      </ButtonWrapper>
    </ContainerAd>
  );
};

export default AdBanner;
