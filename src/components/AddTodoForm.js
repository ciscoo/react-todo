import React, { Component } from 'react'

class AddTodoForm extends Component {

    constructor(props) {
        super(props)
        this.addTodo = props.addTodo
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            title: ''
        }
    }

    handleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.addTodo(this.state.title)
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Add Todo: <input type="text" value={this.state.title} onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        )
    }

}

export default AddTodoForm
