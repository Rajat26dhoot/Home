import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import {
  ClipboardText,
  Repeat,
  Target,
  CalendarCheck,
  X,
  CaretRight,
} from 'phosphor-react-native';

const { height } = Dimensions.get('window');

const BottomDrawer = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose} />

      <View style={styles.drawer}>
        <View style={styles.header}>
          <Text style={styles.title}>Choose Task Type</Text>
          <TouchableOpacity onPress={onClose}>
            <X size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.option}>
          <View style={styles.iconWrapper}>
            <ClipboardText size={20} color="#4B3EFF" weight="fill" />
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Habit</Text>
            <Text style={styles.desc}>
              Activity that repeats over time. It has detailed tracking and statistics.
            </Text>
          </View>
          <CaretRight size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.iconWrapper}>
            <Repeat size={20} color="#4B3EFF" weight="fill" />
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Recurring Task</Text>
            <Text style={styles.desc}>
              Repeats over time and includes tracking and statistics.
            </Text>
          </View>
          <CaretRight size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.iconWrapper}>
            <CalendarCheck size={20} color="#4B3EFF" weight="fill" />
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Task</Text>
            <Text style={styles.desc}>
              Single instance activity without tracking.
            </Text>
          </View>
          <CaretRight size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.iconWrapper}>
            <Target size={20} color="#4B3EFF" weight="fill" />
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Goal of the Day</Text>
            <Text style={styles.desc}>
              A specific target to achieve within a single day.
            </Text>
          </View>
          <CaretRight size={20} color="#999" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: '#00000055',
  },
  drawer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    maxHeight: height * 0.65,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F3F1FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },
  desc: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});

export default BottomDrawer;
