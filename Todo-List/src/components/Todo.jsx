
import {useState} from 'react'
const Todo = () => {
    const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    setTodo((prev) => [...prev, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };
  const del = (id) => {
    setTodo((prev) => prev.filter((prev) => prev.id != id));
  };

  const Toggle = (id) => {
    setTodo((prev) =>
      prev.map((prev) => (prev.id == id ? { ...prev, done: !prev.done } : prev))
    );
  };

  const save = (id) => {
    setTodo((prev) =>
      prev.map((prev) => (prev.id == id ? { ...prev, text: edit } : prev))
    );
    setEditId(null);
    setEdit("");
  };

  const setid = (id) => {
    setEditId(id);
  };
  return (
    <div>
        <h1>TODO APP</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <br />

      {todo.map((data) => (
        <div key={data.id}>
          <span style={{ textDecoration: data.done && "line-through" }}>
            {data.text}
          </span>
          <button onClick={() => Toggle(data.id)}>done</button>
          <button onClick={() => del(data.id)}>delete</button>
          <button onClick={() => setid(data.id)}>edit</button>
          {editId == data.id && (
            <>
              <span>
                <input
                  type="text"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                />
              </span>
              <button onClick={() => save(data.id)}>save</button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Todo