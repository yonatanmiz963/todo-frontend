

import './TodoEdit.scss'
import { saveTodo } from '../../store/actions/todoActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

export const TodoEdit = () => {

    const dispatch = useDispatch()
    const selectedTodo = useSelector(state => state.todoReducer.todoToEdit)
    const [todoToEdit, setTodoToEdit] = useState({ description: '' })


    useEffect(() => {
        if (selectedTodo) setTodoToEdit(selectedTodo)
    }, [selectedTodo])

    const onAddTodo = async (ev) => {
        try {
            ev.preventDefault()
            await dispatch(saveTodo(todoToEdit))
            setTodoToEdit({ description: '' })

        } catch (err) {
            console.log('err:', err)
        }
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setTodoToEdit((prevState) => ({ ...prevState, [field]: value }))
    }

    const { description } = todoToEdit
    return (
        <div className="todo-edit">
            <form className="add-form" onSubmit={onAddTodo}>
                <div className="add-wrapper">
                    <label htmlFor="description">{selectedTodo ? 'Edit Todo: ' : 'Add Todo: '}</label>
                    <input placeholder="What to do?" required type="text" id="description" value={description} onChange={handleChange} name="description" />
                </div>
                <button title="Save" className="save-btn"><FontAwesomeIcon icon={faSave}></FontAwesomeIcon></button>
            </form>
        </div>
    )
}

