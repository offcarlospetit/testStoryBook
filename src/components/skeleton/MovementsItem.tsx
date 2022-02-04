import React from 'react';
import ContentLoader, {
  Rect,
  IContentLoaderProps,
} from 'react-content-loader/native';
import { Dimensions, StyleProp, ViewStyle } from 'react-native';

import Scale from '../../utils/Scale';
import Colors from '../../constants/colors';

const WIDTH = Dimensions.get('window').width - Scale(32);
export interface MovementsItems extends IContentLoaderProps {
  style: StyleProp<ViewStyle>;
}

const MovementsItemsSkeleton = (props: MovementsItems) => {
  const { style } = props;
  return (
    <ContentLoader
      speed={2}
      width={WIDTH}
      height={Scale(40)}
      backgroundColor={Colors.neutralLightGrey20}
      foregroundColor={Colors.NeutralLightGrey30}
      style={style}
    >
      <Rect
        x={WIDTH - Scale(75)}
        y="0"
        rx={Scale(5)}
        ry={Scale(5)}
        width={Scale(75)}
        height={Scale(10)}
      />
      <Rect
        x="0"
        y="0"
        rx={Scale(5)}
        ry={Scale(5)}
        width={Scale(WIDTH / 1.9)}
        height={Scale(10)}
      />
      <Rect
        x="0"
        y={Scale(20)}
        rx={Scale(5)}
        ry={Scale(5)}
        width={Scale(WIDTH / 3)}
        height={Scale(10)}
      />
    </ContentLoader>
  );
};

export default MovementsItemsSkeleton;
