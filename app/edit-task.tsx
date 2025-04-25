// app/edit-task.tsx

/**
 * EditTaskScreen
 *
 * This screen allows a user to edit an existing task.
 * It receives task data (id, title, description, status) via route params,
 * and pre-fills the form using those values.
 *
 * On submission, it passes the updated task back to the Home screen (index.tsx)
 * via router.push with route params.
 */

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import TaskFormFields from '../components/TaskFormFields';
import { Task } from '../types/Task';

export default function EditTaskScreen() {
  const { id, title, description, status } = useLocalSearchParams();
  const router = useRouter();

  // Show an alert if any task data is missing
  useEffect(() => {
    if (!id || !title || !description || !status) {
      Alert.alert('Error', 'Missing task data. Cannot edit.');
    }
  }, []);

  // Prevent crash on invalid params
  if (!id || !title || !description || !status) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Missing or invalid task data.</Text>
      </View>
    );
  }

  // State hooks for form fields (pre-filled)
  const [taskTitle, setTaskTitle] = useState(String(title));
  const [taskDescription, setTaskDescription] = useState(String(description));
  const [taskStatus, setTaskStatus] = useState<Task['status']>(
    String(status) as Task['status']
  );

  // Handle form submission
  const handleUpdateTask = () => {
    const updatedTask: Task = {
      id: String(id),
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
    };

    // Navigate back to Home and pass updated task in params
    router.push({
      pathname: '/',
      params: { updatedTask: JSON.stringify(updatedTask) },
    });
  };

  return (
    <View style={styles.container}>
      <TaskFormFields
        title={taskTitle}
        setTitle={setTaskTitle}
        description={taskDescription}
        setDescription={setTaskDescription}
        status={taskStatus}
        setStatus={setTaskStatus}
        onSubmit={handleUpdateTask}
        submitLabel="Save Changes"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 32,
  },
});
