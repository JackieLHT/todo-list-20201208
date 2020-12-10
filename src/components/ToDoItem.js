import React, { Component } from 'react';
import { deleteTodo, updateTodoStatus } from '../apis/todos';
import { Button, Modal } from 'antd';
import EditableTagGroupContainer from '../containers/EditableTagGroupContainer';
import {getTags} from '../apis/todos';
import '../TodoList.css'
import '../tags.css'


class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            done: this.props.toDoItem.done,
            tags: this.props.toDoItem.tags,
            newTags: [],
            showModal: false
        }
    }

    componentDidMount() {
        getTags().then((response) => {
            this.props.initTag(response.data);
        })
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

    showModal = () => {
        this.setState({ showModal: true });
    };

    handleOk = () => {
        this.setState({ showModal: false });
    };

    handleCancel = () => {
        this.setState({ showModal: false });
    };

    selectTag = (event) => {
    
    }

    render() {
        const todoId = this.props.toDoItem.id
        return (

            <div id={todoId} className="todoItemGroup">
                <Button className="addTag-btn"
                    onClick={this.showModal}>+</Button>
                <Modal
                    title="Select Tags To Be Added"
                    visible={this.state.showModal}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                {this.props.tags.map(tag => <div className="tagListItem" onClick={this.selectTag} style={{ backgroundColor: tag.color }}>{tag.text}</div>)}
                </Modal>
                <div
                    className="todoItem"
                    style={{
                        textDecoration: this.props.toDoItem.done ? 'line-through' : 'none',
                    }}
                    key={todoId}
                    id={todoId}
                    onClick={this.toggleStatus} >{this.props.toDoItem.text}</div>
                {/* <EditableTagGroupContainer toDoItem={this.props.toDoItem} /> */}
                <Button className="delete-btn"
                    onClick={this.delete}>x</Button>
            </div>
        );
    }
}

export default ToDoItem;