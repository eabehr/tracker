import React, { Component } from 'react';
import TodoService from './TodoService';
import TodoRow from './TodoRow';
import axios from 'axios';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '', todos: '' };
        this.todoService = new TodoService();
    }
    componentDidMount() {
        axios.get('http://localhost:4200/todos')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        if (this.state.todos instanceof Array) {
            return this.state.todos.map(function (object, i) {
                return <TodoRow obj={object} key={i} />;
            })
        }
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Task</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;