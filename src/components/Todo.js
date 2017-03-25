import React from 'react'

const Todo = ({id, todo}) => {
    return (
        <li>ID: {id}  Title: {todo.title}</li>
    )
}

export default Todo
