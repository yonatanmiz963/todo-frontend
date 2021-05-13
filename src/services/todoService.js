import { httpService } from './http.service'

export const todoService = {
    query,
    save,
    remove,
}

async function query() {
    return httpService.get('todo/')
}

async function remove(id) {
    return httpService.delete(`todo/${id}`)
}

async function save(todoToSave) {
    if (!todoToSave._id) {
        return httpService.post('todo/', todoToSave)
    } else {
        return httpService.put(`todo/edit/${todoToSave._id}`, todoToSave)
    }
}

