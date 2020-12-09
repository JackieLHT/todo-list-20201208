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

export const updateTodoStatus = (todoItem) => {
    return api.put('/todos/' + todoItem.id, { ...todoItem, done: !todoItem.done });
}

export const addTodoTags = (newTodoItem) => {
    return api.put('/todos/' + newTodoItem.id, newTodoItem)
}