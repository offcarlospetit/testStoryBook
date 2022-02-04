import React from 'react';
import Text from '../text/Text';
import type {TextProps as UITextProps} from '../text/Text';

import {findAll} from 'highlight-words-core';
import type {StyleProp, TextStyle} from 'react-native';

export interface HighlighterProps extends UITextProps {
  autoEscape?: boolean;
  highlightStyle?: StyleProp<TextStyle>;
  searchWords: string[];
  textToHighlight: string;
  sanitize?: (text: string) => string;
  style?: StyleProp<TextStyle>;
}
const Highlighter: React.FC<HighlighterProps> = (props) => {
  const {
    autoEscape,
    highlightStyle,
    searchWords,
    textToHighlight,
    sanitize,
    style,
  } = props;
  const chunks = findAll({textToHighlight, searchWords, sanitize, autoEscape});

  return (
    <Text style={style} {...props}>
      {chunks.map((chunk, index: number) => {
        const text = textToHighlight.substr(
          chunk.start,
          chunk.end - chunk.start,
        );
        return !chunk.highlight ? (
          text
        ) : (
          <Text
            {...props}
            key={index}
            style={chunk.highlight && highlightStyle}>
            {text}
          </Text>
        );
      })}
    </Text>
  );
};

export default Highlighter;
