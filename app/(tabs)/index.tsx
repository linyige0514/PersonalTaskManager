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
 * Pulls initial data from mockTasks and allows future state updates.
 */
export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const router = useRouter();
  const params = useLocalSearchParams();

  /**
   * useEffect to handle new task passed via params
   * Parses the new task and adds it to the state
   */
  useEffect(() => {
    if (params?.newTask) {
      try {
        const parsedTask: Task = JSON.parse(params.newTask as string);
  
        // Avoid duplicates: check if task already exists
        const exists = tasks.some((t) => t.id === parsedTask.id);
        if (!exists) {
          setTasks((prev) => [parsedTask, ...prev]);
        }
        
      } catch (e) {
        console.warn('Failed to parse new task:', e);
      }
    }
  }, [params?.newTask]);

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
