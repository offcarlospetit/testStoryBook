import type {
  TextInputProps as RNInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import type { MetricEvent } from 'src/types';

import type { IconName } from '../icon/Icon';

export type InputSize =
  | 'big'
  | 'normal';

export type InputPlaceholderType =
  | 'staticOnTop'
  | 'inline'
  | 'animated';

export interface InputMetricEvent {
  onFocus?: MetricEvent;
  onBlur?: MetricEvent;
}

export interface NewInputProps extends RNInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<ViewStyle>;
  inputSize?: InputSize;
  placeholderType?: InputPlaceholderType;
  ref?: any;
  showError?: boolean;
  errorMessage?: string;
  rightIconName?: IconName;
  rightFontIconName?: IconName;
  innerRef?: any;
  autoFocus?: boolean;
  metricEvent?: InputMetricEvent;
}

