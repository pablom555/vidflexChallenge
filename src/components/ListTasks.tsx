import React from "react";

import { switchTaskState, editTask, deleteTask } from "../context/actions/tasks";
import ListItem from "./ListItem";
import { useTaskDispatch, useTaskState } from "../context/TaskContext";
import { IDataRequest, ITask } from "../types";

const ListTask = () => {
  const { tasks, loading, error }: IDataRequest = useTaskState();
  const taskDispatch = useTaskDispatch();

  const checkCompleted = (id: string) => {
    switchTaskState(taskDispatch, tasks.find((task: ITask) => task.id === id));
  };

  const handleEditTask = (task: any) => {
    editTask(taskDispatch, task)
  }

  const handleDeleteTask = (id: string) => {
    deleteTask(taskDispatch, id)
  }

  return (
    <ul>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          data={task}
          loading={loading}
          checkCompleted={checkCompleted}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </ul>
  );
};

export default ListTask;
