import { v4 as uuidv4 } from "uuid";
import { ITask } from "../../types";

const addtask = async (dispatch: any, taskData: any) => {
  try {
    dispatch({ type: "TASK_REQUEST" });

    // Simulacion llamada API
    const { data, problem } = await new Promise((resolve, reject) => {
      const newTask = {
        problem: false,
        data: {
          ...taskData,
          id: uuidv4(),
          description: "",
          estimate: 1,
          state: "Planned",
        },
      };
      setTimeout(() => resolve(newTask), 200);
    });

    if (problem) {
      dispatch({ type: "TASK_ERROR", problem });
    } else {
      dispatch({ type: "TASK_ADD_SUCCESS", data });
    }
  } catch (error) {
    dispatch({ type: "TASK_ERROR", error });
  }
};

const switchTaskState = async (dispatch: any, task: ITask | undefined) => {
  try {
    dispatch({ type: "TASK_REQUEST" });

    // Simulacion llamada API
    const { data, problem } = await new Promise((resolve, reject) => {
      const newTask = {
        problem: false,
        data: {
          ...task,
          state: task?.state === "Completed" ? "Planned" : "Completed"
        },
      };
      setTimeout(() => resolve(newTask), 200);
    });

    if (problem) {
      dispatch({ type: "TASK_ERROR", problem });
    } else {
      dispatch({ type: "TASK_EDIT_SUCCESS", data });
    }
  } catch (error) {
    dispatch({ type: "TASK_ERROR", error });
  }
};

const editTask = async (dispatch: any, task: ITask | undefined) => {
  try {
    dispatch({ type: "TASK_REQUEST" });

    // Simulacion llamada API
    const { data, problem } = await new Promise((resolve, reject) => {
      const newTask = {
        problem: false,
        data: {
          ...task
        },
      };
      setTimeout(() => resolve(newTask), 200);
    });

    if (problem) {
      dispatch({ type: "TASK_ERROR", problem });
    } else {
      dispatch({ type: "TASK_EDIT_SUCCESS", data });
    }
  } catch (error) {
    dispatch({ type: "TASK_ERROR", error });
  }
};

const deleteTask = async (dispatch: any, id: string) => {
  try {
    dispatch({ type: "TASK_REQUEST" });

    // Simulacion llamada API
    const { data, problem } = await new Promise((resolve, reject) => {
      const newTask = {
        problem: false,
        data: {
          id
        },
      };
      setTimeout(() => resolve(newTask), 200);
    });

    if (problem) {
      dispatch({ type: "TASK_ERROR", problem });
    } else {
      dispatch({ type: "TASK_DELETE_SUCCESS", data });
    }
  } catch (error) {
    dispatch({ type: "TASK_ERROR", error });
  }
};

const deleteTaskAll = async (dispatch: any,) => {
  try {
    dispatch({ type: "TASK_REQUEST" });

    // Simulacion llamada API
    const { data, problem } = await new Promise((resolve, reject) => {
      const newTask = {
        problem: false,
        data: {
          ok: true
        },
      };
      setTimeout(() => resolve(newTask), 200);
    });

    if (problem) {
      dispatch({ type: "TASK_ERROR", problem });
    } else {
      dispatch({ type: "TASK_DELETE_ALL_SUCCESS" });
    }
  } catch (error) {
    dispatch({ type: "TASK_ERROR", error });
  }
};

export { addtask, switchTaskState, editTask, deleteTask, deleteTaskAll };
