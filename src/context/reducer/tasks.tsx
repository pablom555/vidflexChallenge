import { v4 as uuidv4 } from "uuid";
import { ITask } from "../../types";

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      name: "pepe",
      description: "description 1",
      estimate: 2,
      state: "Completed",
    },
  ],
  loading: false,
  error: false,
};

const taskReducer = (state: any, action: any) => {
  switch (action.type) {
    case "TASK_REQUEST": {
      return { ...state, loading: true, error: false };
    }
    case "TASK_ADD_SUCCESS": {
      return {
        ...state,
        tasks: [...state.tasks, action.data],
        loading: false,
        error: false,
      };
    }
    case "TASK_EDIT_SUCCESS": {
      return {
        ...state,
        tasks: state.tasks.map((task: ITask) =>
          task.id === action.data.id ? action.data : task
        ),
        loading: false,
        error: false,
      };
    }
    case "TASK_DELETE_SUCCESS": {
      return {
        ...state,
        tasks: state.tasks.filter((task: ITask) =>
          task.id !== action.data.id
        ),
        loading: false,
        error: false,
      };
    }
    case "TASK_DELETE_ALL_SUCCESS": {
      return {
        ...state,
        tasks: [],
        loading: false,
        error: false,
      };
    }
    case "TASK_ERROR": {
      return { ...state, loading: false, error: true };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export { taskReducer, initialState };
