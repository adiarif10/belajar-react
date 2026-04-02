import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]); // list todo
  const [input, setInput] = useState(""); // isi input

  const handleTodos = (e) => {
    e.preventDefault();
    if (input === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <h2>Todolist</h2>

      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            return setInput(e.target.value);
          }}
        />
        <button onClick={handleTodos}>Add Todo</button>
      </form>

      <p>{input}</p>

      {todos.map((todo, index) => (
        <div key={index}>
          <p>{todo}</p>
          <button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>
            {" "}
            delete{" "}
          </button>
        </div>
      ))}
    </div>
  );
};
