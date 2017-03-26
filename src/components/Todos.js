import React from 'react'
import Todo from './Todo'

const Todos = ({todos, handleSubmit, removeTodo}) => {
    let todoListItems =  todos.map(todo => {
        return <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
    })

    return (
        <form>
            <ul>
                {todoListItems}
            </ul>
        </form>
    )
}

export default Todos
