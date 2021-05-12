import { httpService } from './http.service'

export const todoService = {
    query,
    save,
    remove, 
    getEmptyTodo,
    startTodo,
}

async function query() {
    const todos = await httpService.get('todo/')
    console.log('todos:', todos)
    return todos
}

async function startTodo(id) {
    const todo = await httpService.get(`todo/${id}/start`)
    return todo
}

async function remove(id) {
    const removedTodo = await httpService.delete(`todo/${id}`)
    return removedTodo
}

async function save(todoToSave) {
    if (!todoToSave._id) {
        const savedTodo = await httpService.post('todo/', todoToSave)
        return savedTodo
    } else {
        const updatedTodo = await httpService.put(`todo/edit/${todoToSave._id}`, todoToSave)
        return updatedTodo
    }
}

function getEmptyTodo() {
    return {
        title: "",
        description: "",
        createdAt: null,
        lastTriedAt: null,
        triesCount: 0,
        doneAt: null,
        importance: 0
    }
}

