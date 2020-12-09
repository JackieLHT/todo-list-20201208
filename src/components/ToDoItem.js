import React, { Component } from 'react';
import { deleteTodo, updateTodoStatus } from '../apis/todos';
import { Button } from 'antd';
import EditableTagGroupContainer from '../containers/EditableTagGroupContainer'
import '../ToDoItem.css'


class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            done: this.props.toDoItem.done,
            tagText: '',
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
            <div>
                <EditableTagGroupContainer toDoItem={this.props.toDoItem} />
                <Button className="todoItem" type='primary' ghost
                    style={{
                        textDecoration: this.props.toDoItem.done ? 'line-through' : 'none',
                    }}
                    shape='round'
                    key={todoId}
                    id={todoId}
                    onClick={this.toggleStatus}
                >{this.props.toDoItem.text}</Button>

                <Button
                    onClick={this.delete}
                    style={{
                        width: 30,
                        marginLeft: -30,
                        backgroundColor: "transparent",
                        border: "none"
                    }}>x</Button>
            </div>
        );
    }
}

export default ToDoItem;