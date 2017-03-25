import React, { Component } from 'react'
import Todos from './components/Todos'
import {get} from 'axios'

export default class TodoApp extends Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
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
    return <Todos todos={this.state.todos}/>
  }

}
