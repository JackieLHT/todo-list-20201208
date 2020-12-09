import { combineReducers } from 'redux'
import { ADD_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_TODO_ITEM, INIT_TODO } from './actionTypes'

const ToDos = (state = [], action) => {
    if (action.type === INIT_TODO) {
        return action.payload;
    }

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

    if (action.type === UPDATE_TODO_ITEM) {
        return state.map(todoItem => {
            if (todoItem.id === action.payload)
                return { ...todoItem, done: !todoItem.done }
            return todoItem;
        })

    }

    return state;

}

export default combineReducers(
    {
        ToDos
    }
)

