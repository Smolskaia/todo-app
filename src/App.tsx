import React, { FC, ChangeEvent, useState } from "react";
import ButtonAdd from "./components/Button/ButtonAdd";
import InputTask from "./components/Input.tsx/InputTask";
import TaskList from "./components/ListItems/ListItems";
import Header from "./components/Header/Header";
import { ITask } from "./Interfaces";

import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    // if (task === '') {
    //   return null
    // }
    const newTask = { taskName: task, completed: false };
    setTodoList([...todoList, newTask]);
    setTask('');
    // console.log(todoList)
  };

  return (
    <>
      <Header />
      <InputTask onChange={handleChange} value={task} />
      <ButtonAdd onClick={addTask} />
      <TaskList tasks={todoList}/>
    </>
  );
};

export default App;
