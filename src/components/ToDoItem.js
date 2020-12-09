import React, { Component } from 'react';
import { deleteTodo, updateTodo } from '../apis/todos';


class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            done: this.props.toDoItem.done
        }
    }
    toggleStatus = () => {
        updateTodo(this.props.toDoItem).then((response) => {
            this.props.updateToDo(response.data.id);
        })
    }
    deleteItem = () => {
        deleteTodo(this.props.toDoItem.id).then(() => {
            this.props.deleteToDo(this.props.toDoItem.id);
        })

    }
    render() {
        return (
            <div>
                <input
                    style={{
                        width: 600,
                        height: 30,
                        textAlign: 'left',
                        textDecoration: this.props.toDoItem.done ? 'line-through' : 'none',
                    }}
                    type="button"
                    key={this.props.toDoItem.id}
                    onClick={this.toggleStatus}
                    value={this.props.toDoItem.text} />
                <input
                    type="button"
                    value="x"
                    onClick={this.delete}
                    style={{
                        width: 30,
                        marginLeft: -30,
                        backgroundColor: "transparent",
                        border: "none"

                    }} />
            </div>
        );
    }
}

export default ToDoItem;