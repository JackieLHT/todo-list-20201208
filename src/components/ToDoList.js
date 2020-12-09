import React, { Component } from 'react';
import ToDoGeneratorContainer from '../containers/ToDoGeneratorContainer';
import ToDoGroupContainer from '../containers/ToDoGroupContainer'
class ToDoList extends Component {
    render() {
        return (
            <div>
                <div>TODO LIST</div>
                <ToDoGroupContainer />
                <ToDoGeneratorContainer/>
            </div>
        );
    }
}

export default ToDoList;