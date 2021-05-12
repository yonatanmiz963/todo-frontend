import { todoService } from '../../services/todoService'

export function loadTodos(filterBy) {
  return async dispatch => {
    try {
      const todos = await todoService.query(filterBy)
      const action = {
        type: 'SET_TODOS',
        todos
      }
      dispatch(action)

    } catch (error) {
      console.log('error:', error)
    }
  }
}

export function saveTodo(todo) {
  return async dispatch => {
    try {
      const isAdd = !todo._id
      const savedTodo = await todoService.save(todo)
      if (isAdd) {
        dispatch({ type: 'ADD_TODO', todo: savedTodo })

      } else {
        dispatch({ type: 'UPDATE_TODO', updatedTodo: savedTodo })
        dispatch({ type: 'SET_EDIT_TODO', todoToEdit: null })
      }
      return savedTodo

    } catch (err) {
      console.log('err:', err)

    }
  }
}

export function removeTodo(todoId) {
  return async dispatch => {
    try {
      const removedTodo = await todoService.remove(todoId)
      dispatch({ type: 'REMOVE_TODO', todoId })
      return removedTodo

    } catch (err) {
      console.log('err:', err)

    }
  }
}

export function setTodoToEdit(todoToEdit) {
  return dispatch => {
    dispatch({ type: 'SET_EDIT_TODO', todoToEdit })
  }
}
