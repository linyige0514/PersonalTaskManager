// app/(tabs)/index.tsx

import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet, Pressable} from 'react-native';
import { mockTasks } from '../../data/mockTasks';
import TaskItem from '../../components/TaskItem';
import { Task } from '../../types/Task';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

/**
 * Task list screen (Home screen)
 * Renders the list of tasks using FlatList and TaskItem component.
 * Pulls initial data from mockTasks and allows future state updates:
 *  - Adding new tasks via params
 *  - Editing tasks
 *  - Deleting tasks
 *  - Deleting tasks
 */
export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
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
  empty: {
    marginTop: 20,
    fontStyle: 'italic',
    color: '#999',
    textAlign: 'center',
  },
});
