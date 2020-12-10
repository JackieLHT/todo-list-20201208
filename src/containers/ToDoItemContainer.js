import { connect } from 'react-redux';
import toDoItem from '../components/ToDoItem';
import { deleteToDoItem, updateToDoItem } from '../actions'
import { initTag, addTag } from '../actions'

const mapStateToProps = state => ({
    toDoList: state.ToDos,
    tags: state.Tags
})

const mapDispatchToProps = dispatch => ({
    deleteToDo: (toDoItemId) => dispatch(deleteToDoItem(toDoItemId)),
    updateToDo: (toDoItemId) => dispatch(updateToDoItem(toDoItemId)),
    addTag: (tag) => dispatch(addTag(tag)),
    initTag: (tags) => dispatch(initTag(tags))
})

const ToDoItemContainer = connect(mapStateToProps, mapDispatchToProps)(toDoItem);

export default ToDoItemContainer;
