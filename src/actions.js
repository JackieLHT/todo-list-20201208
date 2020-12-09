import { ADD_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_TODO_ITEM, INIT_TODO, UPDATE_TAG } from './actionTypes'

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


export const initTodo = (todoList) => {
    return { type: INIT_TODO, payload: todoList }
}

export const updateTag = (newTodoItem) => {
    return { type: UPDATE_TAG, payload: newTodoItem }
}