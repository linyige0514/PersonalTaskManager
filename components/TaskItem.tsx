// components/TaskItem.tsx

/**
 * TaskItem component
 * Displays individual task details in the task list.
 * When pressed, navigates to Task Details screen with full task information.
 *
 * Props:
 * - task: A Task object with title, description, and status
 *
 * Used in:
 * - Task list screen (Feature 1)
 * - Navigation to detail screen (Feature 6)
 * 
 * Provides details for:
 * - task edit(Feature 3)
 * - delete(Feature 4)
 * - toggle status function(Feature 5)
 * - search by title(Feature 2)
 */

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Task } from '../types/Task';
import { Link } from 'expo-router';

interface Props {
  task: Task;
}

export default function TaskItem({ task }: Props) {
  return (
    <Link
      href={{
        pathname: '../task-details',
        params: {
          id: task.id,
          title: task.title,
          description: task.description,
          status: task.status,
        },
      }}
      asChild
    >
      <Pressable style={styles.container}>
        <Text style={styles.title}>{task.title}</Text>
        <Text>{task.description}</Text>
        <Text style={styles.status}>Status: {task.status}</Text>
      </Pressable>
    </Link>
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
