import React, { useState } from "react";
import Modal from "./Modal";

const ListItem = ({
  data,
  loading,
  checkCompleted,
  handleEditTask,
  handleDeleteTask
}: {
  data: any;
  loading: boolean;
  checkCompleted: any;
  handleEditTask: any;
  handleDeleteTask: any
}) => {
  const [showModal, setShowModal] = useState(false);

  const textColor =
    data.state === "Planned"
      ? "text-red-500"
      : data.state === "In Progress"
        ? "text-blue-500"
        : "text-green-500";

  return (
    <>
      <li className="list-none border-2 border-gray-300 my-3 mx-0 p-2 flex justify-between items-center capitalize">
        <label
          htmlFor={data.id}
          className={`cursor-pointer ${data.state === "Completed" && "active"}`}
        >
          <input
            className="mr-2 transform translate-y-px"
            type="checkbox"
            id={data.id}
            checked={data.state === "Completed"}
            onChange={() => checkCompleted(data.id)}
          />
          <span className="font-bold">{data.name}</span> &nbsp; &nbsp; estimate:{" "}
          <span className="text-blue-500">{data.estimate} </span> &nbsp; &nbsp;
          state: <span className={`${textColor}`}>{data.state}</span>
        </label>
        <div>
          <button
            className="py-1 px-4 bg-yellow-500 text-white cursor-pointer mr-2"
            disabled={loading || data.state === "Completed"}
            onClick={() => setShowModal(true)}
          >
            Edit
          </button>
          <button
            className="py-1 px-4 bg-red-500 text-white cursor-pointer"
            disabled={loading}
            onClick={() => handleDeleteTask(data.id)}
          >
            Del
          </button>
        </div>
      </li>

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          data={data}
          handleEditTask={handleEditTask}
        />
      )}
    </>
  );
};

export default ListItem;
