"use client";
import React, { useState, useEffect } from 'react';

function TodoList() {
  const [task, setTask] = useState({ title: "", desc: "" });
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ title: "", desc: "" });
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="bg-zinc-900 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center border-b-2 rounded-b-lg border-solid border-zinc-400 bg-neutral-900 p-3 text-zinc-400 font-poppins shadow-md">
        <span className='text-blue-500'>Reh</span>man <span className='text-blue-500'>To</span>do L<span className='text-blue-500'>is</span>t
      </h1>
      <div className="p-3 w-full">
        <form
          className="flex justify-center gap-3 my-3 items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter task title"
            className="text-xl text-zinc-200 w-80 bg-neutral-800 border-zinc-800 border-2 rounded-md px-4 py-2 shadow-inner"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter task description"
            className="text-xl text-zinc-200 border-zinc-800 bg-neutral-800 w-80 border-2 rounded-md my-2 px-4 py-2 shadow-inner"
            value={task.desc}
            onChange={(e) => setTask({ ...task, desc: e.target.value })}
          />
          <button className="bg-blue-500 hover:bg-blue-400 text-zinc-200 font-bold py-2 px-4 rounded my-2 shadow-md">
            Add Task
          </button>
        </form>
        <div className="border-l-4 border-solid border-zinc-400 min-h-96 bg-neutral-950 rounded-md p-1 shadow-lg">
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="flex gap-1 justify-between items-center p-2 rounded-md border-b-2">
                <div className="flex  text-zinc-200 justify-between rounded-md bg-neutral-700 p-2 w-full shadow-2xl">
                  <h5 className="capitalize text-xl">{task.title}</h5>
                  <h6>{task.desc}</h6>
                </div>
                <button
                  className="bg-red-600 hover:bg-red-500 hover:scale-105 text-zinc-200 font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;