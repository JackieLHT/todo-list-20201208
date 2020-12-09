import { connect } from 'react-redux';
import toDoItem from '../components/ToDoItem';
import { deleteToDoItem, updateToDoItem } from '../actions'

const mapStateToProps = state => ({
    toDoList: state.ToDos
})

const mapDispatchToProps = dispatch => ({
    deleteToDo: (toDoItemId) => dispatch(deleteToDoItem(toDoItemId)),
    updateToDo: (toDoItemId) => dispatch(updateToDoItem(toDoItemId)),
})

const ToDoItemContainer = connect(mapStateToProps, mapDispatchToProps)(toDoItem);

export default ToDoItemContainer;
