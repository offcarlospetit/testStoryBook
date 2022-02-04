import React, { useRef } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Text from '../text/Text';
import AppIntroSlider from 'react-native-app-intro-slider';
import LottieView from 'lottie-react-native';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import IconFont, { IconFontName } from '../icon/IconFont';
import type AnimatedLottieView from 'lottie-react-native';

export type lottieFile = 'slide1' | 'slide2' | 'slide3';

const lottieFiles = {
  slide1: require('./assets/ob-slide-1.json'),
  slide2: require('./assets/ob-slide-2.json'),
  slide3: require('./assets/ob-slide-3.json'),
};

/**
 * Slides interface
 *
 * @interface Slide
 * @field key {string} is used to identify each screen
 * @field title {string} primary title
 * @field secondTitle {string - optional}: secondary title
 * @field textDesc {string}: primary description
 * @field textDescSecondary {string - optional}: secondary description
 * @field textItems {Array - optional}: It is an array that is used to generate a list of characteristics, it must contain the following properties: title (title of the characteristic), description (description of the characteristic), iconName (name of the icon that accompanies the characteristic, type IconNameSvg), these three are mandatory . This property has priority 1 that is, if it is included it will render above the description and the secondary description
 * @field banner {string}: name of the lottie to use for this screen
 * @field customLottie {string - optional}: In this field you can pass a lottie json as a string, this property is optional and if it is included it will replace the banner key
 */

export interface Slide {
  key: string;
  title: string;
  secondTitle?: string;
  textDesc: string;
  titleStyle?: object;
  textDescSecondary?: string;
  textItems?: Array<{
    title: string;
    description: string;
    iconName: IconFontName;
    iconSize?: number;
  }>;
  banner: lottieFile;
  customLottie?: string;
}

/**
 * Slides interface
 *
 * @interface OnboardingProps
 * @field slides {Array}: array of Slides
 * @method onSkip {void} this method allows you to skip all the onboarding
 * @method onDone {void}: this method allows to verify that I have finished the onboarding
 * @field showPrevButton {boolean - optional}: primary description, by default is false
 * @field titleStyle {object - optional}: extra style for title section, by default is {}
 * @field secondTitleStyle {object - optional}: extra style for second title section, by default is {}
 * @field listTitleStyle {object - optional}: extra style for list title, by default is {}
 * @field listDescriptionStyle  {object - optional}: extra style for list description, by default is {}
 */

export interface OnboardingProps {
  slides: Array<Slide>;
  onSkip: () => void;
  onDone: () => void;
  showPrevButton?: boolean;
  titleStyle?: object;
  secondTitleStyle?: object;
  listTitleStyle?: object;
  listDescriptionStyle?: object;
}
const Onboarding = (props: OnboardingProps) => {
  const {
    showPrevButton = false,
    slides = [],
    titleStyle = {},
    secondTitleStyle = {},
    listTitleStyle = {},
    listDescriptionStyle = {},
    onSkip,
    onDone,
  } = props;
  const animation: AnimatedLottieView | any = useRef();
  const arrLength = slides.length;
  const defaultSize = 25;
  const refArray = Array(arrLength).map(() => animation);

  const _renderItem = ({ item, index }: { item: Slide; index: number }) => {
    return (
      <View style={styles.slide}>
        {/* Top Banner Section */}
        <View style={styles.banner}>
          <View style={[styles.topContainer]}>
            <LottieView
              source={
                item.customLottie ? item.customLottie : lottieFiles[item.banner]
              }
              autoPlay={true}
              loop={false}
              ref={e => (refArray[index] = e)}
              style={[styles.customLottie]}
            />
          </View>
        </View>
        {/* Title Section */}
        <View style={[styles.titleContainer]}>
          <Text
            weight="700"
            style={[styles.title, item.titleStyle || titleStyle]}
          >
            {item.title}
          </Text>
          {item.secondTitle != '' ? (
            <Text weight="700" style={[styles.secondTitle, secondTitleStyle]}>
              {item.secondTitle}
            </Text>
          ) : null}
        </View>
        {/* Description text */}
        <View style={[styles.descriptionContainer]}>
          <View style={[styles.firstParagraph]}>
            <Text weight="400" style={[styles.description]}>
              {item.textDesc}
            </Text>
            {item.textDescSecondary && (
              <Text weight="400" style={[styles.description]}>
                {item.textDescSecondary}
              </Text>
            )}
          </View>
          {item.textItems?.map(_item => {
            return (
              <View key={_item.title} style={[styles.listContainer]}>
                <View style={styles.iconLIst}>
                  <IconFont
                    name={_item.iconName}
                    color={Colors.primaryBlue40}
                    size={_item.iconSize ?? defaultSize}
                  />
                </View>
                <View style={styles.footerContainer}>
                  <Text weight="500" style={[styles.ListTitle, listTitleStyle]}>
                    {_item.title}
                  </Text>
                  <Text
                    weight="400"
                    style={[styles.listDescription, listDescriptionStyle]}
                  >
                    {_item.description}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  };
  const _keyExtractor = (item: Slide) => item.key;

  const _renderNextButton = () => {
    return (
      <View
        style={styles.buttonCircle}
        testID="Botón siguiente"
        accessibilityLabel="Botón siguiente"
      >
        <Text weight="700" style={styles.textButton}>
          {'Siguiente'}
        </Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text
          weight="700"
          style={styles.textButton}
          testID="Botón siguiente"
          accessibilityLabel="Botón siguiente"
        >
          {'Siguiente'}
        </Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={styles.skipButton}>
        <Text
          weight="400"
          style={styles.skipLabel}
          testID="Botón saltar"
          accessibilityLabel="Botón saltar"
        >
          Saltar
        </Text>
      </View>
    );
  };
  const onSlideChange = (e: any) => {
    refArray.map((element, index) => {
      if (index == e) element.play();
      else {
        element.reset();
      }
    });
  };

  return (
    <>
      <AppIntroSlider
        keyExtractor={_keyExtractor}
        data={slides}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        renderItem={_renderItem}
        showSkipButton
        dotClickEnabled
        onSlideChange={onSlideChange}
        showPrevButton={showPrevButton}
        onSkip={onSkip}
        onDone={onDone}
        renderSkipButton={_renderSkipButton}
        activeDotStyle={styles.sliderDotBackground}
        dotStyle={styles.dotStyle}
      />
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  topContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  customLottie: {
    top: Scale(10),
    left: Platform.OS == 'ios' ? Scale(-4) : Scale(-10),
    width: Scale(220),
    height: Scale(220),
  },
  banner: {
    height: Scale(250),
    width: `100%`,
  },
  titleContainer: {
    width: `100%`,
    paddingHorizontal: Scale(24),
    justifyContent: 'center',
    marginVertical: Scale(8),
  },
  title: {
    fontSize: 24,
    color: Colors.NeutralDarkGrey80,
    lineHeight: 32,
    paddingVertical: Scale(6),
  },
  secondTitle: {
    fontSize: 24,
    color: Colors.NeutralDarkGrey80,
    lineHeight: 32,
  },
  descriptionContainer: {
    flex: 2,
    width: `100%`,
    paddingHorizontal: Scale(24),
  },
  ListTitle: {
    marginTop: Scale(5),
    fontSize: 16,
    color: Colors.NeutralDarkGrey90,
    lineHeight: 20,
    textAlign: 'left',
  },
  description: {
    fontSize: 16,
    color: Colors.NeutralDarkGrey90,
    lineHeight: 24,
    textAlign: 'left',
    paddingVertical: Scale(12),
  },
  listDescription: {
    fontSize: 12,
    color: Colors.NeutralDarkGrey90,
    lineHeight: 20,
    textAlign: 'left',
  },
  buttonCircle: {
    width: Scale(126),
    height: Scale(40),
    backgroundColor: Colors.PrimaryBlue50,
    borderRadius: Scale(48),
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    width: Scale(100),
    height: Scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipLabel: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.neutralDarkGrey70,
  },
  textButton: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.NeutralWhite,
  },
  iconLIst: {
    width: Scale(48),
    height: Scale(40),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: Scale(10),
  },
  listContainer: {
    flexDirection: 'row',
    marginVertical: Scale(2),
  },
  firstParagraph: { marginBottom: Scale(24) },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sliderDotBackground: {
    backgroundColor: Colors.PrimaryBlue50,
    marginBottom: Scale(12),
  },
  dotStyle: {
    backgroundColor: Colors.NeutralLightGrey40,
    marginBottom: Scale(12),
  },
});

export default Onboarding;
