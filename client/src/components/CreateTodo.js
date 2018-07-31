import React, { Component } from 'react';
import TodoService from './TodoService';

class CreateTodo extends Component {

    constructor(props) {
        super(props);
        this.state = { title: '' }
        this.todoService = new TodoService();


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.todoService.sendData(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label> Create ToDo:
                        <input type="text" value={this.state.title} onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default CreateTodo;