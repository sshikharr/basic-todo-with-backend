import { useState, useEffect } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
        fetch("http://localhost:3000/todos")
            .then(async (res) => {
                const json = await res.json();
                setTodos(json.todos);
            });
    }, []);


  return (
    <>
      <CreateTodo/>
      <Todos todos={todos}/>
    </>
  )
}

export default App
