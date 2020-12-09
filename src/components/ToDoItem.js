import React, { Component } from 'react';
import { deleteTodo, updateTodoStatus, addTodoTags } from '../apis/todos';
import ContextMenu from 'react-context-menu';
import { Tag, Input, Tooltip, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TagGeneratorContainer from '../containers/TagGeneratorContainer';


class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            done: this.props.toDoItem.done,
            showTagGenerator: false,
            tagText: ''
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

    addTag = () => {
        this.setState({ showTagGenerator: !this.state.showTagGenerator });
    }

    onChange = (event) => {
        this.setState({ tagText: event.target.value })
    }

    confirmTag = () => {
        const newTodoItem = { ...this.props.toDoItem, tags: [...this.props.toDoItem.tags, this.state.tagText] }
        addTodoTags(newTodoItem).then((response) => {
            this.props.addTag(newTodoItem)
        })

    }

    render() {
        const todoId = this.props.toDoItem.id
        const showTagGenerator = this.state.showTagGenerator
        return (
            <div>
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
                <Button
                    onClick={this.addTag} F
                    danger
                    ghost
                    style={{
                        width: 30,
                        backgroundColor: 'transparent',
                        color: 'red',
                        textAlign: 'center'
                    }}>+</Button>
                {showTagGenerator ? <Input style={{ width: 200 }} onChange={this.onChange} /> : null}
                {showTagGenerator ? <Button type='primary' ghost style={{ width: 100, color: 'green', border: 1, borderColor: 'green' }} onClick={this.confirmTag}>confirm</Button> : null}
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