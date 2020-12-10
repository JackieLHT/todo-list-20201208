import { connect } from 'react-redux';
import TagsGenerator from '../components/TagsGenerator';
import { addTag } from '../actions'

const mapDispatchToProps = dispatch => ({
    addTag: (tag) => dispatch(addTag(tag))
})

const TagsGeneratorContainer = connect(null, mapDispatchToProps)(TagsGenerator);

export default TagsGeneratorContainer
