// app/add-task.tsx

import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Task } from '../types/Task';
import TaskFormFields from '../components/TaskFormFields';

/**
 * AddTaskScreen
 * 
 * This screen renders a reusable task form used for creating a new task.
 * On form submission, it generates a unique ID and navigates back to the home screen,
 * passing the new task data via router params.
 */
export default function AddTaskScreen() {
  const router = useRouter();

  // Local state for form input fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'pending' | 'in progress' | 'completed'>('pending');

  /**
   * Handles form submission for adding a new task.
   * Validates input, generates a new task, and navigates back to index.tsx.
   */
  const handleAddTask = () => {
    if (!title.trim()) {
      Alert.alert('Title is required.');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status,
    };

    // Navigate back to home with the new task as stringified param
    router.replace({
      pathname: '/',
      params: { newTask: JSON.stringify(newTask) },
    });
  };

  return (
    <View style={styles.container}>
      <TaskFormFields
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        status={status}
        setStatus={setStatus}
        onSubmit={handleAddTask}
        submitLabel="Add Task"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
