// components/TaskFormFields.tsx

import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Task } from '../types/Task';

interface Props {
  /**
   * Controlled input values and their setters from parent component.
   */
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  status: Task['status'];
  setStatus: (value: Task['status']) => void;

  /**
   * Handler function to be called when form is submitted.
   */
  onSubmit: () => void;

  /**
   * Label for the submit button (e.g., "Add Task" or "Save Changes").
   */
  submitLabel: string;
}

/**
 * TaskFormFields
 * 
 * This component renders reusable form fields for creating or editing a task.
 * Controlled input state is passed from the parent screen (add/edit).
 */
export default function TaskFormFields({
  title,
  setTitle,
  description,
  setDescription,
  status,
  setStatus,
  onSubmit,
  submitLabel,
}: Props) {
  return (
    <View style={styles.container}>
      {/* Task Title Input */}
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={title}
        onChangeText={setTitle}
      />

      {/* Task Description Input */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter task description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Task Status Input (for now, just a text input) */}
      <Text style={styles.label}>Status</Text>
      <TextInput
        style={styles.input}
        placeholder="pending / in progress / completed"
        value={status}
        onChangeText={(value) => setStatus(value as Task['status'])}
      />

      {/* Submit Button */}
      <Button title={submitLabel} onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    fontSize: 16,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
});
