import { connect } from 'react-redux';
import toDoItem from '../components/ToDoItem';
import { deleteToDoItem, updateToDoItem, addTag } from '../actions'

const mapDispatchToProps = dispatch => ({
    deleteToDo: (toDoItemId) => dispatch(deleteToDoItem(toDoItemId)),
    updateToDo: (toDoItemId) => dispatch(updateToDoItem(toDoItemId)),
    addTag: (newTodoItem) => dispatch(addTag(newTodoItem))
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(toDoItem);

export default ToDoItemContainer;
