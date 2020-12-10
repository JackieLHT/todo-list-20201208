import React, { Component } from 'react';
import { deleteTodo, updateTodoStatus } from '../apis/todos';
import { Button } from 'antd';
import EditableTagGroupContainer from '../containers/EditableTagGroupContainer'
import '../TodoList.css'


class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            done: this.props.toDoItem.done,
            tags: this.props.toDoItem.tags
        }
    }
    toggleStatus = () => {
        updateTodoStatus(this.props.toDoItem).then((response) => {
            this.props.updateToDo(response.data.id);
        })
    }
    delete = () => {
        deleteTodo(this.props.toDoItem.id).then(() => {
            this.props.deleteToDo(this.props.toDoItem.id);
        })

    }

    render() {
        const todoId = this.props.toDoItem.id
        return (

            <div className="todoItemGroup">
                <div
                    className="todoItem"
                    style={{
                        textDecoration: this.props.toDoItem.done ? 'line-through' : 'none',
                    }}
                    key={todoId}
                    id={todoId}
                    onClick={this.toggleStatus} >{this.props.toDoItem.text}</div>
                <EditableTagGroupContainer toDoItem={this.props.toDoItem} />
                <Button className="delete-btn"
                    onClick={this.delete}>x</Button>
            </div>
        );
    }
}

export default ToDoItem;