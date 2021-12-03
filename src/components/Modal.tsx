import React, { useState } from "react";

const Modal = ({ setShowModal, data, handleEditTask }: any) => {

  const [task, setTask] = useState(data);
  const [error, setError] = useState('')

  const handleSubmit = () => {

    if (task.name.length < 1 || task.estimate < 1) {
      return setError("Complete Task (Name, Estimate)")
    } else {
      setError('')
    }

    handleEditTask(task)
    setShowModal(false)
  }

  return (
    <>

      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Task</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="text-gray-600 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="p-6 flex flex-col">
              {error && <span className="mb-2 text-red-500">{error}</span>}
              <label className="text-sm"> Name:</label>
              <input
                className="flex-1 outline-none mb-4 border-2 py-1 px-2 rounded border-gray-300"
                type="text"
                name="name"
                required
                placeholder="Name"
                value={task.name}
                onChange={(e) => setTask({ ...task, name: e.target.value })}
              />

              <label className="text-sm"> Description:</label>
              <input
                className="flex-1 outline-none mb-4 border-2 py-1 px-2 rounded border-gray-300"
                type="text"
                name="description"
                placeholder="Description"
                value={task.description}
                onChange={(e) =>
                  setTask({ ...task, description: e.target.value })
                }
              />

              <label className="text-sm"> Estimate:</label>
              <input
                className="flex-1 outline-none mb-4 border-2 py-1 px-2 rounded border-gray-300"
                type="number"
                name="estimate"
                required
                placeholder="Estimate"
                min="1"
                value={task.estimate}
                onChange={(e) => setTask({ ...task, estimate: e.target.value })}
              />

              <label className="text-sm"> State:</label>
              <select
                className="flex-1 outline-none mb-4 border-2 py-1 px-2 rounded border-gray-300"
                name="state"
                value={task.state}
                onChange={(e) => setTask({ ...task, state: e.target.value })}
              >
                <option value={"Planned"}>Planned</option>
                <option value={"In Progress"}>In Progress</option>
                <option value={"Completed"}>Completed</option>
              </select>

            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
