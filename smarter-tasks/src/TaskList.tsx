import React from 'react';
import Task from './Task';
import { ManyTasksProps } from './types';

const TaskList = (props: ManyTasksProps) => {
  const list = props.tasks.map((task, index) => (
    <Task
      key={index}
      title={task.title}
      dueDate={task.dueDate}
      description={task.description}
    />
  ));

  return <>{list}</>;
};

export default TaskList;
