import { combineReducers } from 'redux'
import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const ToDos = (state = [], action) => {
    if (action.type === ADD_TODO_ITEM) {
        return [action.payload, ...state];
    }

    if (action.type === DELETE_TODO_ITEM) {
        const index = state.map(todoItem => todoItem.id).indexOf(action.payload);
        return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ];
    }

    return state;

}

export default combineReducers(
    {
        ToDos
    }
)

