export interface ITask {
  taskName: string;
}

export interface IInputTaskProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IButtonAddProps {
  onClick: () => void;
}

export interface ITaskListProps {
  tasks: ITask[];
  completeTask(taskNameToDelete: string): void;
}