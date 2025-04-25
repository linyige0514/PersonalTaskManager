# Personal Task Manager App

## 📖 Introduction
A simple yet complete mobile task management app that allows users to add, edit, delete, toggle status, and view/search tasks in detail — built using **React Native**, **TypeScript**, and **Expo**. Designed for both Android and iOS users.

---

## 🛠️ Tech Stack

- **React Native**
- **Expo Router**
- **Expo**
- **TypeScript**
---

## ✨ Features Overview

| Feature | Design Logic |
|---------|--------------|
| Task List | Home screen shows tasks using FlatList |
| Add Task | Icon "+" on home screen nevigates a separate screen with a clean form for user to enter new task details; once saved, it automatically renders back to home screen with the new task on it|
| Search Functionality | Real-time filtering on home screen by task title (case-sensitive) |
| View Task Details | Clicking a task block on home screen shows its full details on a separate screen; each dtail screen provides options for editting, deleting, toggling status for the task |
| Edit Task | Prefilled form from task details screen and users can edit and save changes flexibly |
| Delete Task | Clicking will pops a confirmation before deleting a task |
| Toggle Task Status | Provides cycles through 'pending', 'in progress', 'completed' |
| Clean Git Branch Management | Main branch kept stable; each feature on its own branch |

---
## 📁 Project Structure
```
personal-task-manager/
├── app/                    # Screens & navigation (Expo Router)
│   ├── (tabs)/             # Tab navigation pages
│   │   └── index.tsx       # Home screen (task list + search bar)
│   ├── add-task.tsx        # Add task screen with form
│   ├── edit-task.tsx       # Edit task screen (prefilled form)
│   └── task-details.tsx    # Task detail screen (view/edit/delete/toggle)
│
├── assets/                 # Images, fonts, or other static resources
│
├── components/             # Reusable UI components
│   ├── TaskItem.tsx        # Single task block in list
│   └── TaskFormFields.tsx  # Shared form fields for add/edit
│
├── constants/              #  App-wide colors
│
├── data/                   # Mock data for tasks
│   └── mockTasks.ts        # Initial static task list
│
├── types/                  # TypeScript interfaces
│   └── Task.ts             # Task interface definition
│
├── .expo/                  # Expo local environment (auto-generated)
├── .gitignore              # Git ignored files
├── app.json                # Expo app config
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript config
└── README.md               # Project documentation
```
---

## 🚀 Getting Started

### Technical Prerequisites

- Node.js ≥ 16.x
- npm
- Expo CLI
- iOS Simulator/Android Emulator or download Expo Go in relevant app store

### Installation
1. Clone the repository
    ```bash
    git clone [https://github.com/linyige0514/PersonalTaskManager.git]
    cd personal-task-manager
2. Expo CLI installed globally
    ```bash
    npm install -g expo-cli
3. Install dependencies
    ```bash
    npm install 
4. Start the development server
    ```bash
    npx expo start
5. Run on preferred platform
    ```bash
    choose from options in terminal
        - Press i to run in iOS simulator
        - Press a to run in Android emulator
        - Scan QP code with Expo Go app (make sure you are using the same network across devices)
---

## 🔮 Future Development Ideas
- Add due dates and reminders for tasks
- Add task categories/tags
- Sync tasks with cloud backend (e.g., Firebase)

Contributions are welcome! If you have suggestions for improvements or want to add new features, please follow these steps:

1.  **Ensure your main branch is up-to-date:**
    ```bash
    git checkout main
    git pull origin main
    ```
2.  **Create a new feature branch:**
    * Use a descriptive name for your branch (e.g., `feature/add-task-sorting`).
    ```bash
    git checkout -b feature/your-feature-name
    ```

3.  **Make your changes:**
    * Implement your feature.
    * Test your changes thoroughly.

4.  **Commit your changes:**
    * Stage the files you want to commit.
    * Write a clear and concise commit message (e.g., following Conventional Commits format).
    ```bash
    # Add specific files or use '.' to add all changes in the current directory
    git add <file1> <file2>
    # or
    git add .

    # Example commit message
    git commit -m "feat: implement task sorting by due date"
    # or
    git commit -m "fix: resolve issue with task deletion confirmation"
    ```

5.  **Push your branch to the remote repository:**
    ```bash
    # Replace 'feature/your-feature-name' with your actual branch name
    git push origin feature/your-feature-name
    ```

6.  **Open a Pull Request (PR):**
    * Go to the repository page on GitHub (or your Git hosting platform).
    * You should see a prompt to create a Pull Request from your recently pushed branch.
    * Click the button and fill out the PR template, describing your changes and linking any relevant issues.
    * Submit the PR for review.
    
7.  **Review and Merge:**
    * Project maintainers will review your Pull Request.
    * They may request changes or ask questions.
    * Once the PR is approved, a maintainer will merge your `feature/your-feature-name` branch into the `main` branch. Your contribution is now part of the main project!

Thank you for contributing!