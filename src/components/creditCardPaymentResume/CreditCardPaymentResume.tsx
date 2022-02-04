import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import InfoCreditCard, { ProductTypeCode } from '../card/credit/InfoCreditCard';

interface CreditCardPaymentResumeProps {
  cardTitle?: string;
  onPress?: () => void;
  textButton?: string;
  rows: Record<string, string>[];
  cardType: ProductTypeCode;
  maskedPan: string;
}

export default function CreditCardPaymentResume(
  props: CreditCardPaymentResumeProps,
) {
  const {
    onPress,
    rows = [],
    cardTitle,
    textButton = 'Cambiar',
    cardType,
    maskedPan,
  } = props;

  return (
    <View>
      {cardTitle && (
        <Text weight="600" style={styles.title}>
          {cardTitle}
        </Text>
      )}
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <InfoCreditCard creditCardCode={cardType} maskedPan={maskedPan} />
          {onPress && (
            <TouchableOpacity onPress={onPress} testID="select-credit-card">
              <Text weight="700" style={styles.changeButton}>
                {textButton}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.contentContainer}>
          {rows.map((item, index) => (
            <View
              key={item.key}
              style={
                rows.length - 1 !== index
                  ? styles.rowContainer
                  : styles.rowContainerLast
              }
            >
              <Text weight="400" style={styles.textLabel}>
                {item.key}
              </Text>
              <Text weight="600" style={styles.textValue}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: Colors.NeutralLightGrey60,
    fontSize: Scale(14),
    marginBottom: Scale(8),
  },
  cardContainer: {
    backgroundColor: Colors.NeutralLightGrey10,
    padding: Scale(16),
    borderRadius: Scale(8),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.NeutralLightGrey30,
    paddingBottom: Scale(12),
  },
  changeButton: {
    fontSize: Scale(12),
    color: Colors.primaryBlue40,
  },
  contentContainer: {
    paddingTop: Scale(12),
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: Scale(4),
  },
  rowContainerLast: {
    flexDirection: 'row',
  },
  textLabel: {
    color: Colors.neutralDarkGrey70,
    fontSize: Scale(12),
  },
  textValue: {
    color: Colors.neutralDarkGrey70,
    fontSize: Scale(12),
    marginLeft: Scale(4),
  },
});
