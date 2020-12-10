import api from './api';


export const getAllTodoList = () => {
    return api.get('/todos');
}

export const addNewTodo = (todoItem) => {
    return api.post('/todos', todoItem);
}

export const deleteTodo = (todoItemId) => {
    return api.delete('/todos/' + todoItemId)
}

// TODO - combine to one
export const updateTodoStatus = (todoItem) => {
    return api.put('/todos/' + todoItem.id, { ...todoItem, done: !todoItem.done });
}

export const updateTodoTags = (newTodoItem) => {
    return api.put('/todos/' + newTodoItem.id, newTodoItem)
}

export const getTags = () => {
    return api.get('/tags');
}

export const addTags = (tag) => {
    return api.post('/tags',tag)
}