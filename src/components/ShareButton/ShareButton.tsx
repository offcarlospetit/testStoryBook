import React, { useContext } from 'react'
import { Platform, StyleProp, StyleSheet, TouchableOpacity, ViewProps, ViewStyle } from 'react-native'
import Scale from '../../utils/Scale'
import Colors from '../../constants/colors'
import IconFont, { IconFontName } from '../icon/IconFont'
import Text from '../text/Text'
import { MetricsContext } from '../metricsProvider/MetricsProvider'

const IS_ANDROID_OS = Platform.OS === 'android'

export interface ShareButtonProps extends ViewProps {
  title: string,
  onPress: () => void,
  iconName?: IconFontName,
  containerStyles?: StyleProp<ViewStyle>,
  metricEventName?: string,
  metricEventPayload?: Record<string, any>
}

const ShareButton = (props: ShareButtonProps) => {
  const { title, iconName = 'share', containerStyles, metricEventName, metricEventPayload, onPress } = props
  const { handleAnalyticsEventOnPress } = useContext(MetricsContext)
  return (
    <TouchableOpacity 
      style={[styles.buttonContainer, containerStyles]}
      onPress={() => handleAnalyticsEventOnPress(metricEventName, metricEventPayload, onPress)}
    >
      <IconFont 
        name={iconName} 
        size={Scale(13.28)} 
        color={Colors.SemanticInfoBlue50} 
      />
      <Text
        style={styles.text}
        weight='700'        
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.SemanticInfoBlue50,
    borderWidth: Scale(1),
    height: Scale(32),
    borderRadius: Scale(48),
    paddingLeft: Scale(13.5),
    paddingRight: Scale(11.5)
  },
  text: {    
    color: Colors.SemanticInfoBlue50,
    fontSize: Scale(12),
    marginLeft: Scale(10),
    marginTop: IS_ANDROID_OS ? Scale(2) : 0    
  }
})

export default ShareButton