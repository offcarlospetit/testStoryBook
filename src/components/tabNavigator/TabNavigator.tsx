import React, { useState, useEffect, useRef, useContext } from 'react';
import {
  View,
  Animated,
  Easing,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Text from '../text/Text';
import Colors from '../../constants/colors';
import IconFont, {IconFontName} from '../icon/IconFont';
import Scale from '../../utils/Scale';
import { MetricsContext } from '../metricsProvider/MetricsProvider';
import type { MetricEvent } from '../../types';

export interface TabNavigatorProps extends BottomTabBarProps {
  tabMetricEventMap: Record<string, MetricEvent>;
}

export default function TabNavigator(props: TabNavigatorProps) {
  const metricsContext = useContext(MetricsContext);

  const { state, descriptors, navigation, tabMetricEventMap } = props;
  const [translateValue] = useState(new Animated.Value(0));
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;

  const animateSlider = useRef((index: number) => {
    Animated.timing(translateValue, {
      toValue: index * tabWidth,
      duration: 200,
      easing: Easing.bezier(0, 0, 0, 1),
      useNativeDriver: false,
    }).start();
  }).current;

  useEffect(() => {
    animateSlider(state.index);
  }, [state.index]);

  const renderIcon = (routeName: string, isFocused: boolean) => {
    let iconName: IconFontName = 'wallet';
    switch (routeName) {
      case 'Account':
        iconName = 'wallet';
        break;
      case 'Tef':
        iconName = 'tef';
        break;
      case 'Payment':
        iconName = 'payment';
        break;
      case 'Investment':
        iconName = 'invesment';
        break;
      case 'Menu':
        iconName = 'menu';
        break;
      default:
        null;
    }
    return <IconFont name={iconName} size={Scale(25)} color={isFocused? Colors.PrimaryBlue50: Colors.NeutralLightGrey60} />;
  };

  return (
    <SafeAreaView style={style.tabContainer}>
      <View
        style={{ position: 'absolute', flexDirection: 'row', width: '100%' }}
      >
        <Animated.View
          style={[
            style.slider,
            {
              transform: [{ translateX: translateValue }],
              width: tabWidth,
            },
          ]}
        >
          <View
            style={{
              height: Scale(4),
              backgroundColor: Colors.primary,
              width: '75%',
            }}
          ></View>
        </Animated.View>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            if (tabMetricEventMap[route.name] && metricsContext?.metricsTool) {
              metricsContext?.metricsTool.logEvent(
                tabMetricEventMap[route.name].name,
                tabMetricEventMap[route.name]?.payload,
              );
            }
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
            animateSlider(index);
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              activeOpacity={1}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
              key={index}
            >
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    height: Scale(28),
                    aspectRatio: 1,
                    marginTop: Scale(10),
                  }}
                >
                  {renderIcon(route.name, isFocused)}
                </View>
                <Text
                  weight={isFocused ? '600' : '500'}
                  style={{
                    color: isFocused
                      ? Colors.primary
                      : Colors.NeutralLightGrey60,
                    fontSize: Scale(12),
                    lineHeight: Scale(20),
                  }}
                >
                  {label.toString()}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  tabContainer: {
    borderTopWidth: 1,
    borderTopColor: Colors.NeutralLightGrey30,
    backgroundColor: 'white',
    flexDirection: 'row',
    height: Scale(70),
  },
  slider: {
    height: 5,
    position: 'absolute',
    alignItems: 'center',
  },
});
