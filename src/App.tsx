import React from "react";

import FormInput from "./components/FormInput";
import ListTask from "./components/ListTasks";
import FooterTask from "./components/FooterTask";
import Title from "./components/Title";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="w-screen max-w-3xl w-full min-h-400 shadow-lg mt-8 m-auto p-2 md:p-8">
      <TaskProvider>
        <Title text="Task Traker" />
        <FormInput />
        <ListTask />
        <FooterTask />
      </TaskProvider>
    </div>
  );
}

export default App;
