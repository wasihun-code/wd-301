export interface TaskProp {
  title: string;
  dueDate: string;
  description: string;
}

export interface ManyTasksProps {
  tasks: TaskProp[];
}
