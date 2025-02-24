import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>To do List</h1>
      </div>

      <div className="card">
        <input placeholder={"add task"}/>
      </div>
    </>
  )
}

export default App
