import { connect } from 'react-redux';
import TagGroup from '../components/TagGroup';
import { initTag } from '../actions'

const mapStateToProps = state => ({
    tags: state.Tags
})
const mapDispatchToProps = dispatch => ({
    initTag: (tags) => dispatch(initTag(tags))
})
const TagGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TagGroup);

export default TagGroupContainer;