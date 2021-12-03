import React, { useState } from "react";
import { addtask } from "../context/actions/tasks";
import { useTaskDispatch, useTaskState } from "../context/TaskContext";

const FormInput = () => {
  const taskDispatch = useTaskDispatch();
  const { loading } = useTaskState();

  const [todoName, setTodoName] = useState('');

  const addTodo = (e: any) => {
    e.preventDefault();
    addtask(taskDispatch, { name: todoName });
    setTodoName('')
  }

  return (
    <form autoComplete="off" className="w-full h-9 my-5 mx-0 flex" onSubmit={addTodo}>
      <input
        className="flex-1 outline-none my-0 mx-2 border-b-2 border-gray-500"
        type="text"
        name="todo"
        required
        placeholder="What do you need to do?"
        value={todoName}
        onChange={e => setTodoName(e.target.value)}
      />
      <button
        className=" flex-1 outline-none my-0 mx-2 border-b-2 border-gray-500 bg-gray-500 text-white tracking-widest cursor-pointer rounded-t-sm"
        type="submit"
        disabled={loading}
      >
        Create
      </button>
    </form>
  );
};

export default FormInput;
