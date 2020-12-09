import React, { Component } from 'react';
import ToDoGeneratorContainer from '../containers/ToDoGeneratorContainer';
import ToDoGroupContainer from '../containers/ToDoGroupContainer'
class ToDoList extends Component {
    render() {
        return (
            <div>
                <h1>TODO LIST</h1>
                <ToDoGroupContainer />
                <ToDoGeneratorContainer/>
            </div>
        );
    }
}

export default ToDoList;