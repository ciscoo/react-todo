import React, { Component } from 'react'
import Todos from './components/Todos'
import {get} from 'axios'

export default class TodoApp extends Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
    this.removeTodo = this.removeTodo.bind(this)    
  }

  removeTodo(id) {
    let todos = this.state.todos.filter(todo => {
      return parseInt(id, 10) !== todo.id
    })
    this.setState({ todos })
  }

  componentDidMount() {
    get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        this.setState({
          todos: response.data
        })
      })
      .catch(error => {
        console.error(error)
      })
  }
  
  render() {
    return <Todos todos={this.state.todos} removeTodo={this.removeTodo} />
  }

}
