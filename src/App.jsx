import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  function addTodo(e) {
    e.preventDefault()
    const value = text.trim()
    if (!value) return
    setTodos([...todos, { id: Date.now(), text: value, done: false }])
    setText('')
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <main className="app">
      <h1>React App</h1>

      <section className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>
        <div className="row">
          <button type="button" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button type="button" onClick={() => setCount(0)}>
            Reset
          </button>
          <button type="button" onClick={() => setCount(count + 1)}>
            +1
          </button>
        </div>
      </section>

      <section className="card">
        <h2>To-do List</h2>
        <form onSubmit={addTodo} className="row">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a task"
          />
          <button type="submit">Add</button>
        </form>
        <ul className="todos">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.done ? 'done' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />
                {todo.text}
              </label>
              <button
                type="button"
                className="remove"
                onClick={() => removeTodo(todo.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {todos.length === 0 && <p className="empty">No tasks yet.</p>}
      </section>
    </main>
  )
}

export default App