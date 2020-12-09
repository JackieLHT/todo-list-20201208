import { connect } from 'react-redux';
import EditableTagGroup from '../components/EditableTagGroup';
import { updateTag } from '../actions'

const mapDispatchToProps = dispatch => ({
    updateTag: (newTodoItem) => dispatch(updateTag(newTodoItem))
})

const EditableTagGroupContainer = connect(null, mapDispatchToProps)(EditableTagGroup);

export default EditableTagGroupContainer;
