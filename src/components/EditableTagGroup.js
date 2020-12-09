import React, { Component } from 'react';
import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { updateTodoTags } from '../apis/todos';

class EditableTagGroup extends Component {
    state = {
        tags: this.props.toDoItem.tags,
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: ''
    };

    handleClose = removedTag => {
        const newTags = this.state.tags.filter(tag => tag !== removedTag);
        const newTodoItem = { ...this.props.toDoItem, tags: newTags }
        updateTodoTags(newTodoItem).then((response) => {
            this.props.updateTag(newTodoItem)
        })
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const newTodoItem = { ...this.props.toDoItem, tags: [...this.props.toDoItem.tags, this.state.inputValue] }
        updateTodoTags(newTodoItem).then((response) => {
            this.props.updateTag(newTodoItem)
        })
        this.setState({
            inputVisible: false,
            inputValue: '',
        });
    };

    handleEditInputChange = e => {
        this.setState({ editInputValue: e.target.value });
    };

    handleEditInputConfirm = () => {
        const newTags = [...this.state.tags];
        newTags[this.state.editInputIndex] = this.state.editInputValue;
        const newTodoItem = { ...this.props.toDoItem, tags: newTags }
        updateTodoTags(newTodoItem).then((response) => {
            this.props.updateTag(newTodoItem)
        })
        this.setState( {
                editInputIndex: -1,
                editInputValue: '',
        });
    };

    saveInputRef = input => {
        this.input = input;
    };

    saveEditInputRef = input => {
        this.editInput = input;
    };

    render() {
        const { tags, inputVisible, inputValue, editInputIndex, editInputValue } = this.state;
        console.log(this.state.tags)
        return (
            <>
                {tags.map((tag, index) => {
                    if (editInputIndex === index) {
                        return (
                            <Input
                                ref={this.saveEditInputRef}
                                key={tag}
                                size="small"
                                className="tag-input"
                                value={editInputValue}
                                onChange={this.handleEditInputChange}
                                onBlur={this.handleEditInputConfirm}
                                onPressEnter={this.handleEditInputConfirm}
                            />
                        );
                    }

                    const tagElem = (
                        <Tag
                            className="edit-tag"
                            key={tag}
                            closable='true'
                            onClose={() => this.handleClose(tag)}
                        >
                            <span
                                onDoubleClick={e => {
                                    if (index !== 0) {
                                        this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                                            this.editInput.focus();
                                        });
                                        e.preventDefault();
                                    }
                                }}
                            >
                                {tag}
                            </span>
                        </Tag>
                    );
                    return tagElem
                })}
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        className="tag-input"
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag className="site-tag-plus" onClick={this.showInput}>
                        <PlusOutlined /> New Tag
                    </Tag>
                )}
            </>
        );
    }
}

export default EditableTagGroup;