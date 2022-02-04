import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
  ViewProps,
  Dimensions,
  Animated,
  FlatListProps,
  ViewStyle,
  StyleProp,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';

const WIDTH = Dimensions.get('window').width;

const AnimatedFlatList = styled(Animated.FlatList)`
  padding-bottom: 0px;
`;

const ContainerBounces = styled(Animated.View)`
  position: absolute;
  height: ${Scale(25)}px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

const FooterBounces = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export interface BounceProps {
  activeDotColor?: string;
  style: ViewStyle;
}

const Bounce = styled(Animated.View)<BounceProps & ViewProps>`
  width: ${Scale(8)}px;
  height: ${Scale(8)}px;
  border-radius: ${Scale(4)}px;
  margin-horizontal: ${Scale(3)}px;
  background-color: ${props => props.activeDotColor};
`;

export interface SwiperProps extends FlatListProps<any> {
  activeDotColor?: string;
  bouncesStyles?: StyleProp<ViewStyle>;
  getCurrentIndex?: (index: number) => void;
  currentidx?: number;
}

const Swiper = (props: SwiperProps) => {
  const {
    data,
    bounces,
    activeDotColor = Colors.NeutralWhite,
    bouncesStyles = {},
    getCurrentIndex,
    initialScrollIndex,
    getItemLayout,
    currentidx = 0,
    ...rest
  } = props;
  const swiperRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(currentidx);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (getCurrentIndex) {
      getCurrentIndex(currentIndex);
    }
  }, []);

  useLayoutEffect(() => {
    if (
      swiperRef !== null &&
      swiperRef?.current &&
      initialScrollIndex &&
      data &&
      data?.length > 0
    ) {
      setTimeout(() => {
        swiperRef?.current?.scrollToIndex({
          index: initialScrollIndex,
          animated: false,
        });
      }, 1);
    }
  }, [data, initialScrollIndex, swiperRef]);

  const renderBounces = (numberOfItems: number, activeColor: string) => {
    return [...Array(numberOfItems)].map((_, i) => {
      const inputRange = [(i - 1) * WIDTH, i * WIDTH, (i + 1) * WIDTH];
      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.1, 1, 0.1],
        extrapolate: 'clamp',
      });
      return (
        <Bounce
          key={i}
          style={[
            {
              opacity,
            },
          ]}
          activeDotColor={activeColor}
        />
      );
    });
  };

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (getCurrentIndex) {
      let xOffset = Math.floor(event.nativeEvent.contentOffset.x);
      const width = event.nativeEvent.layoutMeasurement.width;
      const numberOfItems = data?.length || 0;
      const idx = Math.min(
        Math.max(Math.floor(xOffset / width + 0.5), 0),
        numberOfItems,
      );
      setCurrentIndex(idx);
    }
  };

  const handleOnMomentumScrollEnd = () => {
    if (getCurrentIndex) {
      getCurrentIndex(currentIndex);
    }
  };

  return (
    <React.Fragment>
      <AnimatedFlatList
        {...rest}
        bounces={props.bounces}
        getItemLayout={(_, index) => {
          if (getItemLayout) {
            return getItemLayout(_, index);
          }
          if (index === -1) {
            return { index, length: 0, offset: 0 };
          }
          return {
            index,
            length: WIDTH,
            offset: WIDTH * index,
          };
        }}
        ref={swiperRef}
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
            listener: handleOnScroll,
          },
        )}
        onMomentumScrollEnd={handleOnMomentumScrollEnd}
      />
      {data && data?.length > 1 && (
        <ContainerBounces style={bouncesStyles}>
          <FooterBounces>
            {renderBounces(data.length, activeDotColor)}
          </FooterBounces>
        </ContainerBounces>
      )}
    </React.Fragment>
  );
};
export default Swiper;
