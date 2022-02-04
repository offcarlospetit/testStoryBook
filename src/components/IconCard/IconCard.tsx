import React, { useContext } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import { MetricsContext } from '../metricsProvider/MetricsProvider';
import IconFont, { IconFontName } from '../icon/IconFont';
import Text from '../text/Text';
import Scale from '../../utils/Scale';
import Colors from '../../constants/colors';
import ShadowStyles from '../../utils/ShadowStyles';

export interface IconCardProps extends TouchableOpacityProps {
  iconName: IconFontName;
  color: string;
  onPress: () => void;
  backgroundColor?: string;
  description?: string;
  metricEventName?: string;
  metricEventPayload?: Record<string, any>;
}

const IconCard: React.FC<IconCardProps> = ({
  iconName,
  color,
  onPress,
  backgroundColor,
  description,
  metricEventName,
  metricEventPayload,
  ...res
}) => {
  const iconSize = Scale(24);
  const shadowElevation = { elevation: Platform.OS === 'ios' ? 1 : 0 };
  const { handleAnalyticsEventOnPress } = useContext(MetricsContext);
  return description ? (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        handleAnalyticsEventOnPress(
          metricEventName,
          metricEventPayload,
          onPress,
        )
      }
    >
      <View
        style={[
          styles.buttonContainer,
          ShadowStyles.lightShadow,
          shadowElevation,
        ]}
        {...res}
      >
        <View style={{ ...styles.background, backgroundColor }}>
          <IconFont name={iconName} color={color} size={iconSize} />
        </View>
      </View>
      <Text weight="600" style={styles.description}>
        {description}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() =>
        handleAnalyticsEventOnPress(
          metricEventName,
          metricEventPayload,
          onPress,
        )
      }
      {...res}
    >
      <View style={{ ...styles.background, backgroundColor }}>
        <IconFont name={iconName} color={color} size={iconSize} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Scale(73),
    alignItems: 'center',
  },
  buttonContainer: {
    width: Scale(64),
    height: Scale(64),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Scale(12),
    borderWidth: Scale(1),
    borderColor: Colors.NeutralLightGrey30,
    backgroundColor: Colors.white,
  },
  background: {
    width: Scale(40),
    height: Scale(40),
    borderRadius: Scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: Colors.neutralDarkGrey70,
    textAlign: 'center',
    marginTop: Scale(8),
    fontSize: Scale(12),
    lineHeight: Scale(16),
  },
});

export default IconCard;
