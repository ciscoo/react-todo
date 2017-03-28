import React from 'react'

const Todo = ({todo, removeTodo}) => {
    const handleClick = event => {
        event.preventDefault()
        removeTodo(event.target.value)
    }
    return (
        <li>{todo.uuid} <button value={todo.uuid} onClick={handleClick}>Remove</button></li>
    )
}

export default Todo
