import React, { useState } from "react";
import { useTaskDispatch, useTaskState } from "../context/TaskContext";
import { deleteTaskAll } from "../context/actions/tasks";
import { IDataRequest } from "../types";

const FooterTask = () => {
  const { tasks, loading, error }: IDataRequest = useTaskState();
  const taskDispatch = useTaskDispatch();

  const [selectAll, setSelectAll] = useState(false);

  const totalHours = tasks.reduce((total, task) => {
    return total + Number(task.estimate);
  }, 0);

  const handleDeleteAll = () => {
    deleteTaskAll(taskDispatch)
    setSelectAll(false)
  }

  return (
    <div className="flex justify-between items-center mt-6">
      <label className="cursor-pointer" htmlFor="all">
        <input
          className="mr-2 transform translate-y-px"
          type="checkbox"
          name="all"
          id="all"
          checked={selectAll}
          onChange={() => setSelectAll(!selectAll)}
        />
        ALL
      </label>
      <p>
        You have <span className="text-blue-600">{tasks.length}</span> TO DO
        with a total of <span className="text-blue-600">{totalHours}</span>{" "}
        hours
      </p>
      <button
        className="py-1 px-4 bg-red-500 text-white cursor-pointer"
        disabled={loading || !selectAll}
        onClick={handleDeleteAll}
      >
        Delete
      </button>
    </div>
  );
};

export default FooterTask;
