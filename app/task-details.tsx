// app/task-details.tsx

import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

/**
 * TaskDetailsScreen
 *
 * Displays task details passed via route params.
 * Allows nevigation to edit, delete, or toggle task status.
 */

export default function TaskDetailsScreen() {
  const { id, title, description, status } = useLocalSearchParams();
  const router = useRouter();

  if (!id || !title || !description || !status) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Task details are missing or invalid.</Text>
      </View>
    );
  }

/**
 * handleEdit
 * Navigates to the Edit Task screen, passing the current task's info
 */
  const handleEdit = () => {
    router.push({
      pathname: '../edit-task',
      params: {
        id: String(id),
        title: String(title),
        description: String(description),
        status: String(status),
      },
    });
  };

/**
 * handleDelete
 * Placeholder for future delete functionality
 */
  const handleDelete = () => {
    Alert.alert('Delete Task', 'Delete functionality coming soon!');
  };

  /**
   * handleToggleStatus
   * Placeholder for future toggle status functionality
   */
  const handleToggleStatus = () => {
    Alert.alert('Toggle Status', 'Toggle status feature coming soon!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.text}>{description}</Text>
      
      <Text style={styles.label}>Status:</Text>
      <Text style={styles.text}>{status}</Text>

      <View style={styles.buttonGroup}>
        <Button title="Edit Task" onPress={handleEdit} />
        <Button title="Delete Task" color="red" onPress={handleDelete} />
        <Button title="Toggle Status" onPress={handleToggleStatus} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    marginTop: 4,
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  buttonGroup: {
    marginTop: 24,
    gap: 12,
  },
});
