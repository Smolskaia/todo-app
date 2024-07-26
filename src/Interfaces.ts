export interface ITask {
  taskName: string;
  completed: boolean;
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
}