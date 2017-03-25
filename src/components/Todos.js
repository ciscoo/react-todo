import React from 'react'
import Todo from './Todo'

const Todos = ({todos}) => {
    let todoListItems =  todos.map((todo, index) => {
        return <Todo key={index} id={index} todo={todo} />
    })

    return (
        <ul>
            {todoListItems}
        </ul>
    )
}

export default Todos
