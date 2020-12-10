import { ADD_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_TODO_ITEM, INIT_TODO, UPDATE_TAG, ADD_TAG, INIT_TAG } from './actionTypes'

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

export const initTag = (tags) => {
    return { type: INIT_TAG, payload: tags }
}

export const updateTag = (newTodoItem) => {
    return { type: UPDATE_TAG, payload: newTodoItem }
}

export const addTag = (tag) => {
    return { type: ADD_TAG, payload: tag }
}