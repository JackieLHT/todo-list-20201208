import { connect } from 'react-redux'
import TagGenerator from '../components/TagGenerator'
import { addTag } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    addTag: (todoItemAndTag) => dispatch(addTag(todoItemAndTag))
})

const TagGeneratorContainer = connect(null, mapDispatchToProps)(TagGenerator)


export default TagGeneratorContainer;