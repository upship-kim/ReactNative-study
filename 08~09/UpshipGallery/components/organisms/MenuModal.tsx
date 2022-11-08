import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import React from 'react';
import Icon from '../atoms/Icon';
type ActionType = {
  icon: string;
  text: string;
  onPress: () => void;
};

interface UploadModeModalProps {
  onModalClose: () => void;
  modalVisible: boolean;
  actions: ActionType[];
}

const MenuModal = ({
  modalVisible,
  onModalClose,
  actions,
}: UploadModeModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onModalClose}>
      <Pressable style={styles.centeredView} onPress={onModalClose}>
        <View style={styles.modalView}>
          {actions.map((action, index) => (
            <Pressable
              key={`${index}_${action.text}`}
              style={styles.button}
              onPress={action.onPress}>
              <Icon name={action.icon} color="#757575" />
              <Text style={styles.textStyle}>{action.text}</Text>
            </Pressable>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#3f3f3f78',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: '70%',
    opacity: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textStyle: {
    color: '#757575',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
});
