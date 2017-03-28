import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodoForm from './components/AddTodoForm'
import {get} from 'axios'
import {v4 as generateUuid} from 'uuid'

export default class TodoApp extends Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
    this.removeTodo = this.removeTodo.bind(this)    
    this.addTodo = this.addTodo.bind(this)
  }

  removeTodo(uuid) {
    const todos = this.state.todos.filter(todo => {
      return uuid !== todo.uuid
    })
    this.setState({ todos })
  }

  addTodo(title) {
    let todos = this.state.todos
    todos.unshift({ title, uuid: generateUuid() })
    this.setState({ todos })
  }

  componentDidMount() {
    get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        const todos = response.data.map(todo => {
          todo['uuid'] =  generateUuid()
          return todo
        })
        this.setState({ todos })
      })
      .catch(error => {
        console.error(error)
      })
  }
  
  render() {
    return (
      <div>
        <AddTodoForm addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    )
  }

}
