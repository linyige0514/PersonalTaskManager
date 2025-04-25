// app/(tabs)/index.tsx

import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet, Pressable, TextInput} from 'react-native';
import { mockTasks } from '../../data/mockTasks';
import TaskItem from '../../components/TaskItem';
import { Task } from '../../types/Task';
import { useRouter, useLocalSearchParams, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

/**
 * Task list screen (Home screen)
 * Renders the list of tasks using FlatList and TaskItem component.
 * Pulls initial data from mockTasks and allows for:
 *  - Adding tasks
 *  - Searching tasks by title
 * The screen also handles updates and deletions of tasks via URL parameters.
 */
export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const params = useLocalSearchParams();

  /**
   * Handle newly added task or updated task
   */
  useEffect(() => {
    // If there's a new task, parse and try to insert
    if (params?.newTask) {
      try {
        const newTask: Task = JSON.parse(params.newTask as string);
        const exists = tasks.some((t) => t.id === newTask.id);
        if (!exists) {
          setTasks((prev) => [newTask, ...prev]);
        }
      } catch (e) {
        console.warn('Failed to parse new task:', e);
      }
    }
  
    // If there's an updated task, parse and replace
    if (params?.updatedTask) {
      try {
        const updatedTask: Task = JSON.parse(params.updatedTask as string);
        setTasks((prev) => {
          const exists = prev.some((t) => t.id === updatedTask.id);
          if (exists) {
            return prev.map((t) =>
              t.id === updatedTask.id ? updatedTask : t
            );
          } else {
            // If the task wasn't added yet (e.g. due to render timing), add it
            return [updatedTask, ...prev];
          }
        });
      } catch (e) {
        console.warn('Failed to parse updated task:', e);
      }
    }
  }, [params?.newTask, params?.updatedTask]);

/**
 * Handle deleted tasks
 */
  useEffect(() => {
    if (params?.deletedTaskId) {
      const taskIdToDelete = String(params.deletedTaskId);
      setTasks((prev) => prev.filter((t) => t.id !== taskIdToDelete));
    }
  }, [params?.deletedTaskId]);

  /**
   * Filter tasks based on search query
   */
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Tasks</Text>
        <Link href="./add-task" asChild>
          <Pressable>
            <Ionicons name="add-circle-outline" size={32} color="black" />
          </Pressable>
        </Link>
      </View>

      {/* Search bar */}
      <TextInput
        placeholder="Search tasks by title..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
      />

      {/* Task list */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        ListEmptyComponent={
          <Text style={styles.empty}>
            {searchQuery ? 'No matching tasks found.' : 'You have no tasks for now.'}
          </Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  empty: {
    marginTop: 20,
    fontStyle: 'italic',
    color: '#999',
    textAlign: 'center',
  },
});
