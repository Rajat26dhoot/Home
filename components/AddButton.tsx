import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Plus } from 'phosphor-react-native';

const AddButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Plus size={30} color="#fff" weight="fill" />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 64,
    height: 64,
    backgroundColor: '#4B3EFF',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    zIndex: 100,
  },
});
