import { connect } from 'react-redux';
import ToDoGroup from '../components/ToDoGroup';
import { initTodo } from '../actions'

const mapStateToProps = state => ({
    toDoList: state.ToDos
})
const mapDispatchToProps = dispatch => ({
    initTodo: (toDoList) => dispatch(initTodo(toDoList))
})
const ToDoGroupContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoGroup);

export default ToDoGroupContainer;