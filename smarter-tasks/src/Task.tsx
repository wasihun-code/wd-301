import React from 'react';
import { TaskProp } from './types';

interface TaskProps extends TaskProp {
  onDelete: () => void; // Define the onDelete prop as a function with no parameters
}
const Task = (props: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">Due Date: {props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button className="deleteTaskButton" onClick={props.onDelete}>
        Delete Task
      </button>
    </div>
  );
};

export default Task;
