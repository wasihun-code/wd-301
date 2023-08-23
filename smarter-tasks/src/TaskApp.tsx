import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { ManyTasksProps as TaskAppState, TaskProp } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    'tasks',
    {
      tasks: [],
    },
  );

  const handleDeleteTask = (index: number) => {
    // Create a copy of the tasks array with the specified task removed
    const updatedTasks: TaskProp[] = [...taskAppState.tasks];
    updatedTasks.splice(index, 1); // Remove the task at the specified index

    // Update the state with the new tasks (this will also update localStorage)
    setTaskAppState({ tasks: updatedTasks });
  };

  const addTask = (task: TaskProp) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} onDelete={handleDeleteTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
