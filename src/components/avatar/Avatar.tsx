import React, { useEffect, useState } from 'react';

import {
  AvatarBase as RNEAvatar,
  AvatarBaseProps as RNEAvatarProps,
} from './AvatarSource';

import Scale from '../../utils/Scale';

const person = undefined;

export interface AvatarProps extends RNEAvatarProps {
  title: string;
  colorsAvatarProps?: string;
  colorTitleProps?: string;
}

const setColors = (title: string) => {
  let colorAvatar = '#E2F8FF';
  let colorWord = '#4886AE';

  switch (title.toLowerCase().substring(0, 1)) {
    case 'a':
    case 'g':
    case 'm':
    case 'r':
    case 'x':
      colorAvatar = '#E2F8FF';
      colorWord = '#4886AE';
      break;

    case 'b':
    case 'h':
    case 'n':
    case 's':
    case 'y':
      colorAvatar = '#EDE5F3';
      colorWord = '#824BB0';
      break;

    case 'c':
    case 'i':
    case 'ñ':
    case 't':
    case 'z':
      colorAvatar = '#FFEBEB';
      colorWord = '#C55B61';
      break;

    case 'd':
    case 'j':
    case 'o':
    case 'u':
      colorAvatar = '#FCE7CE';
      colorWord = '#A5573F';
      break;

    case 'e':
    case 'k':
    case 'p':
    case 'v':
      colorAvatar = '#FFF5DE';
      colorWord = '#B18432';
      break;

    case 'f':
    case 'l':
    case 'q':
    case 'w':
      colorAvatar = '#DFFFF0';
      colorWord = '#4BAC92';
      break;

    default:
      break;
  }
  return [colorAvatar, colorWord];
};

const Avatar: React.FC<AvatarProps> = props => {
  const { title, overlayContainerStyle, titleStyle = {}, ...rest } = props;
  const [test, setTest] = useState<RNEAvatarProps>();
  const [colorAvatar, colorWord] = setColors(title);

  useEffect(() => {
    if (!title) {
      setTest({
        ...rest,
        source: person,
        imageProps: { resizeMode: 'center', resizeMethod: 'resize' },
        overlayContainerStyle: { backgroundColor: '#D0EFFC' },
      });
    } else if (title) {
      setTest({
        ...rest,
        title:
          title.substring(0, 1).toUpperCase() +
          title.substring(1, 2).toLocaleLowerCase(),
        titleStyle: {
          color: colorWord,
          fontSize: Scale(14),
          ...(titleStyle as object),
        },

        overlayContainerStyle: {
          backgroundColor: colorAvatar,
          ...(overlayContainerStyle as object),
        },
      });
    }
  }, [title]);
  return (
    <React.Fragment>
      <RNEAvatar {...test} />
    </React.Fragment>
  );
};

export default Avatar;
