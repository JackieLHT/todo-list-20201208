import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer'
import { v4 as uuidv4 } from 'uuid'
import { getAllTodoList } from '../apis/todos'

class ToDoGroup extends Component {

    componentDidMount() {
        getAllTodoList().then((response) => {
            this.props.initTodo(response.data);
        })
    }
    render() {
        return (
            this.props.toDoList.map(toDoItem => {
                return <ToDoItemContainer key={uuidv4()} toDoItem={toDoItem} />
            })
        );
    }
}

export default ToDoGroup;