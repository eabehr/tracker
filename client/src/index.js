import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import CreateTodo from './components/CreateTodo'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/create-todo' component={CreateTodo} />
        </div>
    </Router>,
    document.getElementById('root')
);

