import React, { createContext, useContext, useReducer } from 'react';
import { taskReducer, initialState } from './reducer/tasks';

export const TaskStateContext = createContext(null);
export const TaskDispatchContext = createContext({});

const TaskProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskStateContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  );
};

const useTaskState = () => {
  const context = useContext(TaskStateContext);

  if (!context) {
    throw new Error(
      'useTaskState must be used within a TaskProvider',
    );
  }
  return context;
};

const useTaskDispatch = () => {
  const context = useContext(TaskDispatchContext);

  if (!context) {
    throw new Error(
      'useTaskDispatch must be used within a TaskProvider',
    );
  }
  return context;
};

export { useTaskState, useTaskDispatch, TaskProvider };