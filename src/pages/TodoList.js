import React, { useState, useEffect } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodo = localStorage.getItem("todo");
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, { text: newTodo, date: new Date().toLocaleString(), completed: false }]);
    setNewTodo("");
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleDelete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  const handleCheck = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index].completed = !updatedTodo[index].completed;
    setTodo(updatedTodo);
  };

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add todo"
          className="todo-input"
        />
        <button type="submit" className="todo-button">Add</button>
      </form>
      <ul className="todo-list">
        {todo.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <input type="checkbox" checked={item.completed} onChange={() => handleCheck(index)} />
            <span className="todo-text">{item.text}</span>
            <span className="todo-date">{item.date}</span>
            <button onClick={() => handleDelete(index)} className="todo-delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
