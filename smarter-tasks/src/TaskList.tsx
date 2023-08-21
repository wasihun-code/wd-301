import React from 'react';
import Task from './Task';
import { ManyTasksProps } from './types';

interface TasksState {}

class TaskList extends React.Component<ManyTasksProps, TasksState> {
  render() {
    return this.props.tasks.map((task, index) => (
      <Task
        key={index}
        title={task.title}
        dueDate={task.dueDate}
        description={task.description}
      />
    ));
  }
}

export default TaskList;
