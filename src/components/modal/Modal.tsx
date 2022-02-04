import React from 'react';
import type {ModalProps as RNModalProps} from 'react-native-modal';
import Modal from 'react-native-modal';

import Colors from '../../constants/colors';

export interface ModalProps extends RNModalProps {}

const RNModal: React.FC<
  Pick<ModalProps, 'onBackdropPress' | 'isVisible' | 'children' | 'onBackButtonPress'>
> = (props) => {
  const {children, ...rest} = props;

  return (
    <Modal
      {...rest}
      backdropColor={Colors.backgroundModal}
      style={{
        marginHorizontal: 0,
        justifyContent: 'flex-end',
        marginBottom: 0,
      }}>
      {children}
    </Modal>
  );
};

export default RNModal;
