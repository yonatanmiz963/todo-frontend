
import './TodoApp.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoList } from '../../cmps/TodoList'
import { loadTodos } from '../../store/actions/todoActions'
import { TodoEdit } from '../../cmps/TodoEdit/TodoEdit'
import { TodoFilter } from '../../cmps/TodoFilter/TodoFilter'


export const TodoApp = () => {

  const dispatch = useDispatch()

  const todos = useSelector(state => state.todoReducer.todos)

  const [todosToDisplay, setTodosToDisplay] = useState([])
  const [term, setTerm] = useState({ searchStr: '', byDate: '' })
  const [filterDates, setFilterDates] = useState()

  const filterTodos = () => {

    var filteredTodos = [...todos]
    if (term.searchStr) {
      filteredTodos = filteredTodos.filter(todo => todo.description.toLowerCase().includes(term.searchStr.toLowerCase()))
    }
    if (term.byDate) {
      filteredTodos = filteredTodos.filter(todo => todo.createdAt === +term.byDate)
    }
    filteredTodos ? setTodosToDisplay(filteredTodos) : setTodosToDisplay(todos)
  }

  const handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    setTerm({ ...term, [field]: value })
  }

  const getTodosDates = () => {
    const todosDates = todos.map(todo => todo.createdAt)
    setFilterDates([...new Set(todosDates)])
  }

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  useEffect(() => {
    filterTodos()
  }, [term])


  useEffect(() => {
    filterTodos()
    getTodosDates()
  }, [todos])

  return (
    <div className="todo-app">
      <h1 className="logo-title">Todo-List</h1>
      <TodoEdit />
      <TodoFilter dates={filterDates} searchStr={term.searchStr} handleChange={handleChange} />
      <TodoList todos={todosToDisplay} />
    </div>
  )
}
