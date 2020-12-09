import { connect } from 'react-redux';
import DoneList from '../components/DoneList';

const mapStateToProps = state => ({
    doneList: state.ToDos.filter(todo => todo.done)
})
const ToDoGroupContainer = connect(mapStateToProps)(DoneList);

export default ToDoGroupContainer;