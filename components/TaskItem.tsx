// components/TaskItem.tsx

/**
 * TaskItem component
 * Displays individual task details in the task list.
 *
 * Props:
 * - task: A Task object with title, description, and status
 *
 * Used in:
 * - Task list screen (Feature 1)
 * - Status toggle UI (Feature 5)
 * - Navigation to detail screen (Feature 6)
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

interface Props {
  task: Task;
}

export default function TaskItem({ task }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text style={styles.status}>Status: {task.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  status: {
    marginTop: 4,
    fontStyle: 'italic',
    color: '#666',
  },
});
