import React from "react";
import { useState } from "react";
import "./todo.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Todos = () => {
  const getlocalstoragedata = () => {
    const rawTodos = localStorage.getItem("tasks");
    if (!rawTodos) {
      return [];
    } else {
      return JSON.parse(rawTodos);
    }
  };

  const [inputValue, setinputValue] = useState("");
  const { id, content, checked } = inputValue;
  const [task, settask] = useState(() => getlocalstoragedata());
  const handleOnchange = (value) => {
    setinputValue({ id: value, checked: false, content: value });
  };
  const handleformSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      return;
    }
    const duplessis = task.some((currElem) => {
      return currElem.content === content;
    });

    if (duplessis) {
      setinputValue({ ...inputValue, content: "" });
      return;
    }
    settask([...task, { content, id, checked }]);
    setinputValue({ ...inputValue, content: "" });
  };
  localStorage.setItem("tasks", JSON.stringify(task));

  const handleDelete = (deletedTask) => {
    const updateTask = task.filter((currtask) => {
      return currtask.content !== deletedTask;
    });
    settask(updateTask);
  };

  const handleCheck = (taskId) => {
    const updateHandleChecked = task.map((currElem) => {
      return taskId === currElem.id
        ? { ...currElem, checked: !currElem.checked }
        : currElem;
    });

    settask(updateHandleChecked);
  };

  const handleDeleteAll=()=>{
    localStorage.removeItem("tasks");
    settask([])
  }
  return (
    <>
      <header>
        <section className="todo-input-button">
          <form action="" onSubmit={handleformSubmit}>
            <input
              type="text"
              className="text-black pl-2"
              value={content || ""}
              onChange={(e) => handleOnchange(e.target.value)}
            />
            <button className="bg-blue-700 p-2 rounded"> add task</button>
          </form>
        </section>
      </header>

      {task.map((currtask, index) => {
        return (
          <ul className="flex justify-center my-10" key={index}>
            <li className="todoNotes  rounded bg-white w-40 text-black flex items-center gap-2">
              <span
                className={`ml-3 break-words overflow-hidden whitespace-normal ${
                  currtask.checked ? "line-through" : ""
                }`}
              >
                {currtask.content}
              </span>
              <button
                className="text-green-500"
                onClick={() => handleCheck(currtask.id)}
              >
                <FaCheckCircle />
              </button>
              <button
                className="text-red-600 pr-2"
                onClick={() => handleDelete(currtask.content)}
              >
                <MdDeleteForever />
              </button>{" "}
            </li>
          </ul>
        );
      })}

      {task.length > 1 && (
        <div className="flex justify-center ">
          <button className="bg-red-500 pl-2 pr-2 rounded-xl" onClick={()=>handleDeleteAll()}>
            clear all
          </button>
        </div>
      )}
    </>
  );
};

export default Todos;
