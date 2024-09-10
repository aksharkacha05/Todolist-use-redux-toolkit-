import { useState } from 'react'
import AddTodo from './compantes/AddTodo'
import Todo from './compantes/Todo'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-3xl '>To do List</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
