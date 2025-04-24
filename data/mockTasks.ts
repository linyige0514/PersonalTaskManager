// data/mockTasks.ts

/**
 * Mock task data used across the app for initial rendering and development testing.
 
 * Used in:
 * - Task list display (Feature 1)
 * - Initial state before Add/Edit/Delete features (Features 2–4)
 * - Status toggle demo (Feature 5)
 * - Task detail viewing (Feature 6)
 * - Filtering for search (Feature 7)
 */

import { Task } from '../types/Task';

/**
 * Example static task list for development purposes.
 */
export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread',
    status: 'pending',
  },
  {
    id: '2',
    title: 'Complete take home assignment',
    description: 'Finish the coding challenge for the job application',
    status: 'in progress',
  },
  {
    id: '3',
    title: 'Workout',
    description: '30 min cardio + strength',
    status: 'completed',
  },
];
