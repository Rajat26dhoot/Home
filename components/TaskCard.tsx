// components/TaskCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Clock, CheckCircle, ArrowRight } from 'phosphor-react-native';

interface Task {
  id: string;
  title: string;
  time: string;
  icon: any;
  type: string;         // e.g. "Habit"
  tag: string;          // e.g. "Must"
  color: string;        // e.g. "#1e3a8a"
  completed?: boolean;
}

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <View style={styles.card}>
      <Image source={task.icon} style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{task.title}</Text>
        <View style={styles.metaRow}>
          <Clock size={14} color={task.color} weight="bold" />
          <View style={[styles.timeBox, { backgroundColor: `${task.color}22` }]}>
            <Text style={[styles.timeText, { color: task.color }]}>{task.time}</Text>
          </View>
          {/* Tags */}
          <View style={styles.tagsRow}>
            <View style={styles.tagBox}>
              <Text style={styles.tagText}>{task.type}</Text>
            </View>
            <View style={styles.tagBox}>
              <Text style={styles.tagText}>{task.tag}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        {task.completed ? (
          <CheckCircle size={22} color="#4caf50" weight="fill" />
        ) : (
          <ArrowRight size={22} color="#aaa" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  timeBox: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 6,
    marginRight: 6,
    backgroundColor: '#e3e8ff', // fallback, will be overridden by dynamic color
    minWidth: 62,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 13,
    fontWeight: '500',
  },
  tagsRow: {
    flexDirection: 'row',
    marginLeft: 2,
  },
  tagBox: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
});
