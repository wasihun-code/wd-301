export interface TaskProp {
  id: string;
  title: string;
  dueDate: string;
  description: string;
}

export interface ManyTasksProps {
  tasks: TaskProp[];
}
