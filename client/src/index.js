import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/create-todo' component={CreateTodo} />
            <Route path='/view-todos' component={TodoList} />
        </div>
    </Router>,
    document.getElementById('root')
);

