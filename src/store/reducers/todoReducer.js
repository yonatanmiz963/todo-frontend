const INITIAL_STATE = {
  todos: [],
  todoToEdit: null
}

export function todoReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case 'SET_EDIT_TODO':
      return {
        ...state,
        todoToEdit: action.todoToEdit ? action.todoToEdit : null
      }
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.todos
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.todoId)
      }
    case 'UPDATE_TODO':
      const { updatedTodo } = action
      return {
        ...state,
        todos: state.todos.map(todo => todo._id === updatedTodo._id ? updatedTodo : todo)
      }
    default:
      return state
  }
}