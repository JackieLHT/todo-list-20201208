import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
export const addToDoItem = (toDoItem) => {
    return {
        type: ADD_TODO_ITEM,
        payload: toDoItem
    }
}

export const deleteToDoItem = (toDoItemId) => {
    return {
        type: DELETE_TODO_ITEM,
        payload: toDoItemId
    }
}