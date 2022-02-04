import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Text from '../text/Text';
import IconFont from '../icon/IconFont';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import Skeleton from '../skeleton/Skeleton';
export interface RadioProps extends TouchableOpacityProps {
  selected: boolean;
  inactive?: boolean;
  primaryText: string;
  secondaryText: string;
  bottomText?: string;
  isLoadingBottomText?: boolean;
}

export default function Radio(props: RadioProps) {
  const { selected, inactive, primaryText, secondaryText, bottomText = '', isLoadingBottomText = false, ...rest } = props;
  const itHasBottomText = bottomText !== ''
  return (
    <TouchableOpacity
      {...rest}
      testID="selected-radio-option"
      style={[
        styles.container,
        selected && styles.selectedContainer,
        inactive && styles.inactive,
        itHasBottomText && styles.containerHigher
      ]}
    >
      <View>
        <View style={styles.rowContainer}>
          <Text
            weight="600"
            style={!inactive ? styles.textTitle : styles.textTitleInactive}
            numberOfLines={1}
          >
            {primaryText}
          </Text>
          <Text
            weight="400"
            style={
              !inactive
                ? styles.textTitleOptional
                : styles.textTitleOptionalInactive
            }
          >
            {secondaryText}
          </Text>
        </View>
        {itHasBottomText && (
          <>
            {isLoadingBottomText
              ? 
                <View style={styles.skeletonParent}>
                  <Skeleton type='containerTitle' skeletonStyle={styles.skeletonStyles} />
                </View>
              : <Text weight="400" style={styles.bottomTextStyles}>{bottomText}</Text>
            }
          </>
          
        )}
         
      </View>
      {selected && !inactive ? (
        <IconFont
          name="check-circle"
          size={Scale(20)}
          color={Colors.SemanticInfoBlue50}
        />
      ) : (
        <View style={styles.unmarked} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Scale(8),
    paddingHorizontal: Scale(16),
    height: Scale(56),
    marginBottom: Scale(16),
    borderWidth: Scale(1),
    borderColor: Colors.NeutralLightGrey40,
  },
  containerHigher: {
    height: Scale(72)
  },
  selectedContainer: {
    borderColor: Colors.primaryBlue40,
  },
  textTitle: {
    color: Colors.NeutralDarkGrey80,
  },
  textTitleInactive: {
    color: Colors.NeutralLightGrey60,
  },
  textTitleOptional: {
    marginLeft: Scale(6),
    color: Colors.NeutralDarkGrey80,
  },
  textTitleOptionalInactive: {
    marginLeft: Scale(6),
    color: Colors.NeutralLightGrey60,
  },
  skeletonParent: { 
    height: Scale(20), 
    width: Scale(212) 
  },
  skeletonStyles: {
    width: '100%', 
    height: Scale(10)
  },
  bottomTextStyles: {
    fontSize: Scale(14),
    color: Colors.neutralDarkGrey70,
  },
  unmarked: {
    width: Scale(20),
    aspectRatio: Scale(1),
    borderRadius: Scale(10),
    borderWidth: Scale(1),
    borderColor: Colors.NeutralLightGrey50,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: Scale(5),
  },
  inactive: {
    backgroundColor: Colors.NeutralLightGrey10,
    borderColor: Colors.NeutralLightGrey40,
  },
});
