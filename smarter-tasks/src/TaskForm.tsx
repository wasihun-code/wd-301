import React from 'react';
import { TaskProp as TaskFormState, TaskProp } from './types';

interface TaskFormProps {
  addTask: (task: TaskProp) => void;
}

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: '',
    description: '',
    dueDate: '',
  });

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  };
  const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
  };
  const handleDueDateChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }

    props.addTask(formState);
    setFormState({ title: '', description: '', dueDate: '' });
  };

  return (
    <form
      onSubmit={addTask}
      className="max-w-md mx-auto p-4 border border-slate-300 rounded"
    >
      <div className="mb-4">
        <label htmlFor="todoTitle" className="text-slate-600">
          Title:
        </label>
        <input
          id="todoTitle"
          className="w-full border border-slate-500 rounded px-2 py-1"
          type="text"
          required
          onChange={handleTitleChange}
          value={formState.title}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="todoDueDate" className="text-slate-600">
          Due Date:
        </label>
        <input
          id="todoDueDate"
          className="w-full border border-slate-500 rounded px-2 py-1"
          type="text"
          required
          onChange={handleDueDateChange}
          value={formState.dueDate}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="todoDescription" className="text-slate-600">
          Description:
        </label>
        <input
          id="todoDescription"
          className="w-full border border-slate-500 rounded px-2 py-1"
          type="text"
          onChange={handleDescriptionChange}
          value={formState.description}
        />
      </div>
      <div className="text-center">
        <button
          className="bg-slate-500 text-white py-2 px-4 rounded hover:bg-slate-600"
          type="submit"
          id="addTaskButton"
        >
          Add item
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
