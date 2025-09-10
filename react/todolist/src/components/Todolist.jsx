import { useEffect, useState } from "react";

const Todolist = () => {
  const [inputdata, setInputData] = useState("");

  // ✅ Initialize data directly from localStorage
  const [data, setData] = useState(() => {
    let savedData = localStorage.getItem("todos");
    if(!savedData) return []
    return JSON.parse(savedData);
  });

  // ✅ Save todos whenever `data` changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  const handleinpudata = (e) => {
    setInputData(e.target.value);
  };

  const handleFomdata = (e) => {
    e.preventDefault();
    if (!inputdata.trim()) return;
    setData((prev) => [...prev, inputdata]);
    setInputData("");
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((_, ind) => ind !== id);
    setData(updatedData);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <form className="todo-form" onSubmit={handleFomdata}>
        <input
          value={inputdata}
          onChange={handleinpudata}
          type="text"
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {data.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
