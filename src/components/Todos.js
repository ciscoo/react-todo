import React from 'react'
import Todo from './Todo'

const Todos = ({todos, removeTodo}) => {
    let todoListItems =  todos.map(todo => {
        return <Todo key={todo.uuid} todo={todo} removeTodo={removeTodo}/>
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
