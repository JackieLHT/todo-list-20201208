import { connect } from 'react-redux';
import toDoItem from '../components/ToDoItem';
import { deleteToDoItem, updateToDoItem } from '../actions'

const mapDispatchToProps = dispatch => ({
    deleteToDo: (toDoItemId) => dispatch(deleteToDoItem(toDoItemId)),
    updateToDo: (toDoItemId) => dispatch(updateToDoItem(toDoItemId))
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(toDoItem);

export default ToDoItemContainer;
