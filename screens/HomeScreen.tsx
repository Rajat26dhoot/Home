import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import BottomDrawer from '../components/BottomDrawer';
import { Plus } from 'phosphor-react-native';
import Header from '../components/Header';
import DatePicker from '../components/DatePicker';
import QuoteCard from '../components/QuoteCard';
import TaskListScreen from '../components/TaskListScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.staticContent}>
        <Header />
        <DatePicker />
        <QuoteCard />
      </View>


      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TaskListScreen />
      </ScrollView>

      {/* Floating '+' Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setDrawerVisible(true)}
      >
        <Plus size={32} color="white" weight="bold" />
      </TouchableOpacity>

      {/* Bottom Drawer */}
      <BottomDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  staticContent: {
    paddingBottom: 8,
  },
   scrollContent: {
    paddingBottom: 20, // ensures space above AddButton
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default HomeScreen;
