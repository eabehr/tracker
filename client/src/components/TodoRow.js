import React, { Component } from "react";
import {Link} from "react-router-dom";
// import TodoService from "./TodoService";

/**
 * A single todo item in the list of all todos
 */
class TodoRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.title}
                </td>
            </tr>
        );
    }
}

export default TodoRow;