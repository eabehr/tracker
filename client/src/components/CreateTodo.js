import React, { Component } from 'react';
import TodoService from './TodoService';

class CreateTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '', // name of the task
            cadence: 'once', // once, daily, weekly, monthly
            frequency: 1 // number of times
        }
        this.todoService = new TodoService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handle submitted form
    handleSubmit(event) {
        event.preventDefault();
        this.todoService.sendData(this.state);
    }

    // Update calues in component state when form fields change
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h3>Create New Task:</h3>
                    <label>
                        What is the task?
                        <input required type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control" />
                    </label><br/><br/>
                    {/* TODO: Ask `Is this a recurring task?` If no, other options are greyed */}
                    <label>
                        I want to do this task
                        <input type="number" name="frequency" value={this.state.frequency} onChange={this.handleChange} className="form-control" />
                    </label>
                    <label>
                        &nbsp; times every &nbsp; 
                        <select name="cadence" onChange={this.handleFormChange}>
                            <option value="daily">day</option>
                            <option value="weekly">week</option>
                            <option value="monthly">month</option>
                            <option value="once">I only want to do this task once</option>
                        </select>
                    </label><br/><br/>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default CreateTodo;