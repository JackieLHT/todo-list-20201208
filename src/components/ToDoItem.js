import React, { Component } from 'react';
import { deleteTodo, updateTodo } from '../apis/todos';
import ContextMenu from 'react-context-menu';
import { Tag, Input, Tooltip, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TagGenerator from './TagGenerator';


class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            done: this.props.toDoItem.done,
            showTagGenerator: false
        }
    }
    toggleStatus = () => {
        updateTodo(this.props.toDoItem).then((response) => {
            this.props.updateToDo(response.data.id);
        })
    }
    delete = () => {
        console.log("delete")
        deleteTodo(this.props.toDoItem.id).then(() => {
            this.props.deleteToDo(this.props.toDoItem.id);
        })

    }

    addTag = () => {
        this.setState({ showTagGenerator: true });
    }

    render() {
        const todoId = this.props.toDoItem.id
        const showTagGenerator = this.state.showTagGenerator
        return (
            <div>
                {showTagGenerator ? <TagGenerator /> : null}
                <Button type='primary' ghost
                    style={{
                        width: 600,
                        height: 30,
                        textAlign: 'left',
                        textDecoration: this.props.toDoItem.done ? 'line-through' : 'none'
                    }}
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

                    }}>X</Button>
                <ContextMenu
                    contextId={todoId}
                    items={[
                        {
                            label: 'Add Tag',
                            onClick: this.addTag
                        }
                    ]} />
            </div>
        );
    }
}

export default ToDoItem;