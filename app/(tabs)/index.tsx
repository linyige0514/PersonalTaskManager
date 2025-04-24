// app/(tabs)/index.tsx

/**
 * Task list screen
 * Renders the list of tasks using FlatList and TaskItem component.
 * Pulls initial data from mockTasks and allows future state updates.
 */

import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { mockTasks } from '../../data/mockTasks';
import TaskItem from '../../components/TaskItem';
import { Task } from '../../types/Task';

export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        ListEmptyComponent={
          <Text style={styles.empty}>You have no tasks for now.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  empty: {
    marginTop: 20,
    fontStyle: 'italic',
    color: '#999',
    textAlign: 'center',
  },
});
