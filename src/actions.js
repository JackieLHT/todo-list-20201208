import { ADD_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_TODO_ITEM } from './actionTypes'
export const addToDoItem = (toDoItem) => {
    return {
        type: ADD_TODO_ITEM,
        payload: toDoItem
    }
}

export const updateToDoItem = (toDoItemId) => {
    return {
        type: UPDATE_TODO_ITEM,
        payload: toDoItemId
    }
}

export const deleteToDoItem = (toDoItemId) => {
    return {
        type: DELETE_TODO_ITEM,
        payload: toDoItemId
    }
}