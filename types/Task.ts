// types/Task.ts

/**
 * Task interface shared across the app, representing the attributes of a task.
 * Properties:
 * - id: Unique identifier for the task.
 * - title: Title of the task.
 * - description: Detailed description of the task.
 * - status: Current status of the task, can be 'pending', 'in progress', or 'completed'.
 *
 * Used in:
 *  - Task list display (Feature 1)
 *  - Add/Edit/Delete operations (Feature 2–4)
 *  - Toggle status (Feature 5)
 *  - Task detail screen (Feature 6)
 *  - Search (Feature 7)
 */

export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'in progress' | 'completed';
  }
  