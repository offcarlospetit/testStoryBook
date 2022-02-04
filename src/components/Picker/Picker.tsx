import React, { FC, useEffect, useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewProps,
  Keyboard,
} from 'react-native';
import styled from 'styled-components/native';
import Scale from '../../utils/Scale';
import Modal from '../modal/Modal';
import NewInput from '../newInput/NewInput';
import Select from '../Select/Select';
import Colors from '../../constants/colors';

const CLOSE_MODAL_DELAY = 250;

export interface PickerProps extends ViewProps {
  /* Optional props for Picker without Input (Modal + Select) */
  isInput?: boolean;
  isOpenModal?: boolean;
  resetIsOpenModal?: (isOpenModal: boolean) => void;
  disabled?: boolean;
  /* Normal Picker (Input + Modal + Select) */
  placeHolder?: string;
  modalTitle: string;
  selectedValue: string;
  options: OptionProps[];
  setSelectedValue: (value: string) => void;
  placeholderType?: 'staticOnTop' | 'animated' | 'inline';
}

export interface OptionProps {
  value: string;
  text: string;
}

const TouchableInputContainer = styled.View`
  width: 100%;
  height: ${Scale(51)}px;
  background-color: ${Colors.green};
`;

const getSelectedTextFromValue = (
  options: OptionProps[],
  selectedValue: string,
) => {
  const option = options.find(opt => opt.value === selectedValue);
  return option?.text ?? '';
};
const Picker: FC<PickerProps> = ({
  isInput = true,
  isOpenModal = false,
  placeHolder = '',
  disabled = false,
  selectedValue,
  modalTitle,
  options,
  placeholderType = 'inline',
  setSelectedValue,
  resetIsOpenModal,
}: PickerProps) => {
  const [openPicker, setOpenPicker] = useState(false);

  const closeModal = () => {
    setOpenPicker(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (selectedValue) {
      setTimeout(() => {
        setOpenPicker(false);
      }, CLOSE_MODAL_DELAY);
    }
  }, [selectedValue]);

  useEffect(() => {
    if (isOpenModal && resetIsOpenModal) {
      setOpenPicker(true);
      resetIsOpenModal(false);
    }
  }, [isOpenModal]);

  return (
    <>
      {isInput && (
        <TouchableInputContainer>
          <TouchableOpacity
            testID="pickerId"
            disabled={disabled}
            onPress={() => {
              setOpenPicker(true);
              Keyboard.dismiss();
            }}
            style={styles.touchableOpacity}
          />
          <NewInput
            style={styles.touchableInput}
            editable={false}
            placeholderType={placeholderType}
            placeholder={placeHolder}
            containerStyle={disabled && styles.disabled}
            value={getSelectedTextFromValue(options, selectedValue)}
            rightFontIconName="chevron-down"
          />
        </TouchableInputContainer>
      )}
      <Modal
        isVisible={openPicker}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
      >
        <Select
          title={modalTitle}
          options={options}
          selectedValue={selectedValue}
          isModalPicker={true}
          setSelectedValue={setSelectedValue}
          optionalCallback={() => setOpenPicker(false)}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  touchableInput: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
  },
  touchableOpacity: {
    height: Scale(51),
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 100,
  },
  disabled: {
    backgroundColor: Colors.DisabledGray,
  },
});

export default Picker;
