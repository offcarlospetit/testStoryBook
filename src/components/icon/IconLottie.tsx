import React, { useEffect, useState } from 'react'
import LottieView from 'lottie-react-native';
import Scale from '../../utils/Scale'
import { lottieLibrary, LottieAssetName } from '../../assets/Lotties/LottieLibrary';
import { StyleSheet, View } from 'react-native';

export interface IconProps {
  name: LottieAssetName;
}

const IconLottie = ({ name }: IconProps) => {
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true)
    }, 200)
  }, [])

  return (
    <>
      {startAnimation
        ? (
          <LottieView
            style={styles.LottieContainer}
            source={lottieLibrary[name]}
            loop={false}
            autoPlay={true}
          />
        )
        :
        <View style={styles.LottieContainer} />
      }
    </>
  )
}

const styles = StyleSheet.create({
  LottieContainer: {
    width: Scale(66),
    height: Scale(61),
    marginBottom: Scale(13),
  }
})

export default IconLottie