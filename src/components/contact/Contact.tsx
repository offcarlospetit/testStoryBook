import React, { useContext } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

import type { AvatarProps } from 'react-native-elements';
import Avatar from '../avatar/Avatar';
import { ListItem } from 'react-native-elements';
import Colors from '../../constants/colors';
import Highlighter from '../highlight/Highlighter';
import Scale from '../../utils/Scale';
import { MetricsContext } from '../metricsProvider/MetricsProvider';

export interface ContactProps extends AvatarProps {
  titleColor?: string;
  contactName: string;
  alias?: string;
  accounts: string[];
  bottomDivider?: boolean;
  style?: StyleProp<ViewStyle>;
  searchWords?: string[];
  metricEventName?: string;
  metricEventPayload?: any;
}

const Contact: React.FC<ContactProps> = props => {
  const {
    contactName,
    alias,
    accounts,
    overlayContainerStyle,
    titleStyle,
    onPress,
    bottomDivider = true,
    activeOpacity = 0.9,
    style,
    searchWords = [],
    metricEventName,
    metricEventPayload,
  } = props;
  const metricsContext = useContext(MetricsContext);

  const formatName = (contactName: any) => {
    var separateWord = contactName.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  };

  return (
    <View style={{ width: '100%', ...(style as object) }}>
      <ListItem
        activeOpacity={activeOpacity}
        // underlayColor={'red'}
        containerStyle={{ paddingLeft: 0 }}
        bottomDivider={bottomDivider}
        onPress={() => {
          if (metricEventName && metricsContext?.metricsTool) {
            metricsContext?.metricsTool.logEvent(
              metricEventName,
              metricEventPayload,
            );
          }
          if (onPress) {
            onPress();
          }
        }}
      >
        <Avatar
          title={contactName}
          titleStyle={titleStyle}
          overlayContainerStyle={overlayContainerStyle}
          rounded={props.rounded}
          size={props.size}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Highlighter
              highlightStyle={{
                backgroundColor: Colors.SemanticWarningYellow10,
                fontSize: Scale(16),
                lineHeight: Scale(24),
                color: Colors.grey,
              }}
              searchWords={searchWords}
              textToHighlight={formatName(contactName)}
              style={{
                fontSize: Scale(16),
                lineHeight: Scale(24),
                color: Colors.grey,
              }}
              weight="600"
            />
          </ListItem.Title>
          {alias ? (
            <ListItem.Subtitle>
              <Highlighter
                highlightStyle={{
                  backgroundColor: Colors.SemanticWarningYellow10,
                  fontSize: 14,
                  lineHeight: 20,
                  color: Colors.secondary,
                }}
                searchWords={searchWords}
                textToHighlight={alias}
                style={{
                  fontSize: Scale(14),
                  lineHeight: Scale(20),
                  color: Colors.secondary,
                }}
                weight="500"
              />
            </ListItem.Subtitle>
          ) : null}

          {accounts.length > 1 ? (
            <ListItem.Subtitle>
              <Highlighter
                highlightStyle={{
                  backgroundColor: Colors.SemanticWarningYellow10,
                  fontSize: Scale(12),
                  lineHeight: Scale(16),
                  color: Colors.primary,
                }}
                searchWords={[]}
                textToHighlight={`${accounts.length} accounts asociadas`}
                style={{
                  fontSize: Scale(12),
                  lineHeight: Scale(16),
                  color: Colors.primary,
                }}
                weight="500"
              />
            </ListItem.Subtitle>
          ) : (
            <ListItem.Subtitle>
              <Highlighter
                highlightStyle={{
                  backgroundColor: Colors.SemanticWarningYellow10,
                  fontSize: Scale(12),
                  lineHeight: Scale(16),
                  color: Colors.NeutralLightGrey60,
                }}
                searchWords={[]}
                textToHighlight={accounts[0]}
                style={{
                  fontSize: Scale(12),
                  lineHeight: Scale(16),
                  color: Colors.NeutralLightGrey60,
                }}
                weight="500"
              />
            </ListItem.Subtitle>
          )}
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

Contact.defaultProps = {
  titleColor: '#FFF',
  rounded: true,
};

export default Contact;
