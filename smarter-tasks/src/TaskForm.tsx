import React from 'react';
import { TaskProp as TaskFormState, TaskProp } from './types';

interface TaskFormProps {
  addTask: (task: TaskProp) => void;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: '',
      dueDate: '',
      description: '',
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: '' });
    this.setState({ dueDate: '' });
    this.setState({ description: '' });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDueDateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    this.setState({ description: event.target.value });
  };

  render() {
    return (
      <form
        onSubmit={this.addTask}
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
            onChange={this.titleChanged}
            value={this.state.title}
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
            onChange={this.handleDueDateChange}
            value={this.state.dueDate}
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
            onChange={this.handleDescriptionChange}
            value={this.state.description}
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
  }
}

export default TaskForm;
