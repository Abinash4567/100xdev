import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      isCompleted: "false",
    },
    {
      text: "Learn Redux",
      isCompleted: "false",
    },
    {
      text: "Learn Node",
      isCompleted: "false",
    },
  ]);

  function addTodo() {
    const newTodos = [
      ...todos,
      {
        text: Math.random(),
        isCompleted: "false",
      },
    ];

    setTodos(newTodos);
  }

  function ComponentTodo({ text, isCompleted }) {
    return (
      <div style={{display: "flex", justifyContent: "space-between", margin: 10}}>
      <span style={{width:200, display: "flex", justifyContent: "space-between", margin: 10}}>
        <h3>{text}</h3>
        <h4>{isCompleted}</h4>
      </span>
      </div>
    );
  }

  return (
    <>
      <h1>My Todos</h1>
      <button onClick={addTodo}>Add</button>
      { todos.map((todo)=> <ComponentTodo key={todo.text} text={todo.text} isCompleted={todo.isCompleted} />)}
    </>
  );
}

export default App;
