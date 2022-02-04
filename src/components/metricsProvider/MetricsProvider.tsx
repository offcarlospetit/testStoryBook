import React, { createContext } from 'react';
import type { GestureResponderEvent } from 'react-native';
export interface MetricsTool {
  logEvent(name?: string, params?: { [key: string]: any }): Promise<void>;
}

export type HandleAnalyticsEventOnPressCallback = (
  metricEventName?: string,
  metricEventPayload?: Record<string, any>,
  onPress?: (event: GestureResponderEvent) => void,
) => void;
export interface MetricsContextProps {
  metricsTool: MetricsTool | null;
  handleAnalyticsEventOnPress: HandleAnalyticsEventOnPressCallback;
}
export interface MetricsProviderProps {
  metricsTool?: MetricsTool;
}
export const MetricsContext = createContext({} as MetricsContextProps);
const MetricsProvider: React.FC<MetricsProviderProps> = props => {
  const { children, metricsTool = null } = props;
  const handleAnalyticsEventOnPress: HandleAnalyticsEventOnPressCallback = (
    metricEventName: string = '',
    metricEventPayload?: Record<string, any>,
    onPress?: any,
  ) => {
    if (metricEventName && metricsTool) {
      metricsTool.logEvent(metricEventName, metricEventPayload);
    }
    if (onPress) {
      onPress();
    }
  };
  return (
    <MetricsContext.Provider
      value={{
        metricsTool,
        handleAnalyticsEventOnPress,
      }}
    >
      {children}
    </MetricsContext.Provider>
  );
};
export default MetricsProvider;