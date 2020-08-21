import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const Navbar = () => {
    const { todos } = useContext(TodoContext)
    return (
      <div className="navbar">
        <h1>"To-Do" List</h1>
        <p>
          You currently have {todos.length === 1 ? `${todos.length} thing ` : `${todos.length} things `}
          left to do.
        </p>
      </div>
    );
}

export default Navbar
