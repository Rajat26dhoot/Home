// screens/TaskListScreen.tsx
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import TaskCard from '../components/TaskCard';
import { tasks } from '../data/dummyTasks';

const TaskListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
  },
});
