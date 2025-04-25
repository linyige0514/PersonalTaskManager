import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

/**
 * TaskDetailsScreen
 *
 * Displays task details passed via route params.
 * Placeholder actions are provided for edit, delete, and toggle status.
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

  // Placeholders for future logic
  const handleEdit = () => {
    Alert.alert('Delete Task', 'Feature not implemented yet.');
  };

  const handleDelete = () => {
    Alert.alert('Delete Task', 'Feature not implemented yet.');
  };

  const handleToggleStatus = () => {
    Alert.alert('Toggle Status', 'Feature not implemented yet.');
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
