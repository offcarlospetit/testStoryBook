import * as React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import Text from '../text/Text';
import IconFont from '../icon/IconFont';
import IconSvg from '../icon/IconSvg';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import {
  IconServicesMapper,
  IconServicesMappersvg,
} from '../../utils/IconServicesMapper';
import styled from 'styled-components/native';
import AnimatedLottieView from 'lottie-react-native';
import {lottieLibrary} from '../../assets/Lotties/LottieLibrary';
const {width} = Dimensions.get('window');

const ContainerLottie = styled.View`
  width: ${Scale(25)}px;
  height: ${Scale(25)}px;
`;
export interface PaymentCardProps {
  serviceNumber?: number;
  haveDetail?: boolean;
  hasError?: boolean;
  showOnlyState?: boolean;
  title?: string;
  subTitle?: string;
  textDescOne?: string;
  textDescTwo?: string;
  textDescThree?: string;
  due?: string;
  expiration?: string;
  stateDesc?: number;
  colorState?: number;
  buttonFooterTtext?: string;
  customErrorMessage?: string;
  customErrorButtonMessage?: string;
  onPressCheck?: any;
  onPressMoreMenu?: () => void;
  onPressViewDetail?: () => void;
  onPressRetry?: () => void;
  checked?: boolean;
  isLoading?: boolean;
  statesDescText?: string;
}

const PaymentCard = (props: PaymentCardProps) => {
  const {
    serviceNumber = 0,
    haveDetail = false,
    hasError = false,
    showOnlyState = false,
    title = '',
    subTitle = '',
    textDescOne = '',
    textDescTwo = '',
    textDescThree = '',
    due = '',
    expiration = '',
    stateDesc = 0,
    buttonFooterTtext = '',
    customErrorMessage = '',
    customErrorButtonMessage = '',
    onPressCheck,
    onPressMoreMenu,
    onPressViewDetail,
    onPressRetry,
    checked = false,
    isLoading = false,
    statesDescText = '',
  } = props;
  const getFlex = () => {
    if (showOnlyState || hasError) return 1;
    return 2;
  };
  const getHeight = (detail: boolean) => {
    if (showOnlyState) return Scale(120);
    if (hasError) Scale(168);
    return detail ? Scale(212) : Scale(185);
  };

  const statesColorsDic: Record<number, string> = {
    1: Colors.SemanticWarningYellow50,
    2: Colors.SemanticSuccessGreen50,
    3: Colors.PrimaryBlue50,
    4: Colors.SemanticErrorRed50,
    5: Colors.SemanticErrorRed50,
  };

  const returnIconServices = () => {
    if (Platform.OS == 'ios') {
      const serviceName = IconServicesMapper[serviceNumber];
      return (
        <IconFont
          name={serviceName}
          size={Scale(50)}
          color={Colors.PrimaryBlue50}
        />
      );
    } else {
      const serviceName = IconServicesMappersvg[serviceNumber];
      return (
        <View
          style={[
            styles.errorBannerContainerIconCont,
            styles.widthAndHeightIconSvg,
          ]}>
          <IconSvg
            name={serviceName}
            color={Colors.PrimaryBlue50}
            style={[styles.iconStyle, styles.widthAndHeightIconSvg]}
          />
        </View>
      );
    }
  };

  return (
    <View
      style={[
        styles.cardContainer,
        {
          minHeight: getHeight(haveDetail),
          borderColor: checked
            ? Colors.PrimaryBlue50
            : Colors.NeutralLightGrey50,
        },
      ]}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderIconContainer}>
          {returnIconServices()}
        </View>
        <View style={styles.cardHeaderText}>
          {/* title */}
          <Text weight={'600'} style={styles.cardHeaderTextTitle}>
            {title}
          </Text>
          {/* subtitle */}
          <Text weight={'400'} style={styles.cardHeaderTextSubTitle}>
            {subTitle}
          </Text>
        </View>
        <View style={styles.cardHeaderActionsContainer}>
          <TouchableOpacity onPress={onPressMoreMenu}>
            {Platform.OS == 'ios' ? (
              <IconFont
                name={'more-vert'}
                size={Scale(30)}
                color={Colors.NeutralWhite}
              />
            ) : (
              <View
                style={[
                  styles.errorBannerContainerIconCont,
                  styles.widthAndHeight,
                ]}>
                <IconSvg
                  color={Colors.NeutralWhite}
                  name="more-vertical"
                  style={[styles.iconStyle, styles.widthAndHeight]}
                />
              </View>
            )}
          </TouchableOpacity>
          <CheckBox
            checkedIcon={
              Platform.OS == 'ios' ? (
                <IconFont
                  name={'check-box'}
                  size={Scale(30)}
                  color={Colors.PrimaryBlue50}
                />
              ) : (
                <View style={styles.errorBannerContainerIconCont}>
                  <IconSvg
                    color={Colors.PrimaryBlue50}
                    name="check-box"
                    style={[styles.iconStyle, styles.widthAndHeight]}
                  />
                </View>
              )
            }
            uncheckedIcon={
              hasError || showOnlyState ? (
                <View style={styles.errorBannerContainerIconCont}>
                  <IconSvg
                    color={
                      hasError || showOnlyState
                        ? Colors.NeutralLightGrey20
                        : Colors.NeutralLightGrey50
                    }
                    name="disabled-check"
                    style={[styles.iconStyle, styles.widthAndHeight]}
                  />
                </View>
              ) : (
                <View style={styles.errorBannerContainerIconCont}>
                  <IconSvg
                    color={
                      hasError || showOnlyState
                        ? Colors.NeutralLightGrey20
                        : Colors.NeutralLightGrey50
                    }
                    name="check-box-uncheck"
                    style={[styles.iconStyle, styles.widthAndHeight]}
                  />
                </View>
              )
            }
            hitSlop={{
              bottom: Scale(8),
              left: Scale(3),
              right: Scale(3),
              top: Scale(3),
            }}
            disabled={hasError || showOnlyState}
            uncheckedColor={Colors.NeutralLightGrey50}
            checked={checked}
            onPress={onPressCheck}
          />
        </View>
      </View>
      <View style={{flex: getFlex()}}>
        {!hasError ? (
          <>
            <View style={styles.divider} />
            <View style={styles.cardBody}>
              <View style={styles.cardBodyDescriptions}>
                {!showOnlyState && (
                  <>
                    <Text
                      weight={'400'}
                      style={styles.cardBodyDescriptionsText}>
                      {textDescOne}
                    </Text>
                    <Text
                      weight={'400'}
                      style={styles.cardBodyDescriptionsText}>
                      {textDescTwo}
                    </Text>
                  </>
                )}
                {!hasError && (
                  <Text weight={'400'} style={styles.cardBodyDescriptionsText}>
                    {textDescThree}
                  </Text>
                )}
              </View>
              {/* Amounts */}
              <View style={styles.cardBodyValues}>
                {!showOnlyState && (
                  <>
                    <Text weight={'700'} style={styles.cardBodyValuesText}>
                      {due}
                    </Text>
                    <Text weight={'400'} style={styles.cardBodyValuesText}>
                      {expiration}
                    </Text>
                  </>
                )}
                {!hasError && (
                  <View style={styles.cardBodyValuesStateContainer}>
                    {Platform.OS == 'ios' ? (
                      <IconFont
                        name="brightness-1"
                        color={statesColorsDic[stateDesc]}
                        size={Scale(12)}
                      />
                    ) : (
                      <View
                        style={[
                          styles.errorBannerContainerIconCont,
                          styles.widthAndHeight8,
                        ]}>
                        <IconSvg
                          color={statesColorsDic[stateDesc]}
                          name="elipse"
                          style={[styles.iconStyle, styles.widthAndHeight8]}
                        />
                      </View>
                    )}
                    <Text
                      weight={'400'}
                      style={[
                        styles.cardBodyValuesText,
                        {
                          color: statesColorsDic[stateDesc],
                          marginLeft: Scale(8),
                        },
                      ]}>
                      {statesDescText}
                    </Text>
                  </View>
                )}
              </View>
            </View>
            {/* Footer */}
            {haveDetail && (
              <View style={styles.cardFooter}>
                <TouchableOpacity onPress={onPressViewDetail}>
                  <Text weight={'700'} style={styles.cardFooterText}>
                    {buttonFooterTtext}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        ) : (
          <>
            <View style={styles.divider} />
            {!isLoading ? (
              <View style={styles.errorBannerContainer}>
                <View style={styles.errorBannerContainerIcon}>
                  <View style={styles.errorBannerContainerIconCont}>
                    <IconSvg
                      name={'receipt-all-wrong'}
                      style={styles.iconStyle}
                    />
                  </View>
                </View>
                <View style={styles.errorBannerContainerText}>
                  <Text weight={'400'} style={styles.errorBannerText}>
                    {customErrorMessage}
                  </Text>
                </View>
                <View style={styles.errorBannerContainerButton}>
                  <TouchableOpacity onPress={onPressRetry}>
                    <View style={styles.errorBannerContainerButtonCont}>
                      <Text weight={'700'} style={styles.errorBannerButtonText}>
                        {customErrorButtonMessage}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={[styles.errorBannerContainerForLottie]}>
                <ContainerLottie>
                  <AnimatedLottieView
                    source={lottieLibrary.example}
                    autoPlay
                    loop
                  />
                </ContainerLottie>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: width - Scale(38),
    borderRadius: Scale(8),
    borderWidth: Scale(1),
    backgroundColor: Colors.NeutralWhite,
    borderColor: Colors.NeutralLightGrey50,
    shadowColor: Colors.SombraCardMobile,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,

    elevation: 2,
  },
  cardHeader: {flex: 1, flexDirection: 'row'},
  cardHeaderIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeaderText: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: Scale(4),
  },
  cardHeaderTextTitle: {
    fontSize: Scale(16),
    lineHeight: Scale(24),
    color: Colors.NeutralDarkGrey80,
  },
  cardHeaderTextSubTitle: {
    fontSize: Scale(14),
    lineHeight: Scale(24),
    color: Colors.NeutralLightGrey60,
  },
  cardHeaderActionsContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  divider: {
    width: '90%',
    height: Scale(2),
    backgroundColor: Colors.NeutralLightGrey30,
    alignSelf: 'center',
  },
  cardBody: {flex: 2, flexDirection: 'row'},
  cardBodyDescriptions: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: Scale(16),
  },
  cardBodyDescriptionsText: {
    fontSize: Scale(14),
    lineHeight: Scale(24),
    color: Colors.NeutralLightGrey60,
  },
  cardBodyValues: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: Scale(16),
  },
  cardBodyValuesStateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBodyValuesText: {
    fontSize: Scale(14),
    lineHeight: Scale(24),
    color: Colors.NeutralDarkGrey80,
  },
  cardFooter: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFooterText: {
    fontSize: Scale(14),
    lineHeight: Scale(20),
    color: Colors.PrimaryBlue50,
  },
  errorBannerContainer: {
    backgroundColor: Colors.NeutralLightGrey10,
    height: Scale(72),
    borderRadius: Scale(8),
    marginTop: Scale(8),
    marginHorizontal: Scale(16),
    flexDirection: 'row',
  },
  errorBannerContainerForLottie: {
    backgroundColor: Colors.NeutralLightGrey10,
    height: Scale(72),
    borderRadius: Scale(8),
    marginTop: Scale(8),
    marginHorizontal: Scale(16),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorBannerContainerIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorBannerContainerIconCont: {
    width: Scale(32),
    height: Scale(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {width: '100%'},
  errorBannerContainerText: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorBannerText: {
    fontSize: Scale(14),
    lineHeight: Scale(20),
    color: Colors.NeutralLightGrey70,
  },
  errorBannerContainerButton: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorBannerContainerButtonCont: {
    width: Scale(108),
    height: Scale(40),
    borderRadius: Scale(48),
    borderWidth: Scale(1),
    borderColor: Colors.NeutralLightGrey60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorBannerButtonText: {
    fontSize: Scale(14),
    lineHeight: Scale(20),
    color: Colors.NeutralLightGrey70,
  },
  skeletonParent: {
    height: Scale(20),
    width: Scale(205),
  },
  skeletonStyles: {
    width: '96.5%',
    height: Scale(10),
  },
  widthAndHeight: {width: Scale(24), height: Scale(24)},
  widthAndHeight8: {width: Scale(8), height: Scale(8)},
  widthAndHeightIconSvg: {width: Scale(50), height: Scale(50)},
});
