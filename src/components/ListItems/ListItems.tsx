import React, {FC} from "react";
import List from "@mui/material/List";
import { ITask, ITaskListProps } from "../../Interfaces";
import TodoTask from "./ListItem/ListItem";

const TaskList: FC<ITaskListProps> = ({ tasks }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {tasks.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task}/>
      })}
    </List>
  );
};

export default TaskList;
