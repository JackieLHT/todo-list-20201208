import React, { Component } from 'react';
import TagsGeneratorContainer from '../containers/TagGeneratorContainer';
import TagGroupContainer from '../containers/TagGroupContainer';

class EditTags extends Component {
    render() {
        return (
            <div>
                <TagsGeneratorContainer />
                <TagGroupContainer />
            </div>
        );
    }
}

export default EditTags;