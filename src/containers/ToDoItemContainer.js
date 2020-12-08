import {connect} from 'react-redux';
import toDoItem from '../components/ToDoItem';
import {deleteToDoItem} from '../actions'

const mapDispatchToProps = dispatch=>({
    deleteToDo:(toDoItemId)=>dispatch(deleteToDoItem(toDoItemId))
})

const ToDoItemContainer = connect(null,mapDispatchToProps)(toDoItem);

export default ToDoItemContainer;
