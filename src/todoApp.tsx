import React, { useState } from 'react';
import TaskList from './TaskList';

interface Task {
  id: number;
  text: string;
}

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() === '') {
      return; // Don't add empty tasks
    }

    const newTaskObject: Task = {
      id: Date.now(),
      text: newTask,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TodoApp;
