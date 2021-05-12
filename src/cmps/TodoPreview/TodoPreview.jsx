import './TodoPreview.scss'
import { useDispatch } from 'react-redux'
import { removeTodo, saveTodo, setTodoToEdit } from '../../store/actions/todoActions'
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const TodoPreview = ({ todo }) => {

    const dispatch = useDispatch()

    const onRemoveTodo = () => {
        dispatch(removeTodo(todo._id))
    }

    const onEditTodo = () => {
        dispatch(setTodoToEdit(todo))
    }

    const onToggleChecked = () => {
        todo.isDone = !todo.isDone
        dispatch(saveTodo(todo))
    }

    return (
        <div className={todo.isDone ? 'todo-preview done' : 'todo-preview'} >
            <div className="desc-wrapper">
                <p>{todo.description}</p>
            </div>
            <div className="createdAt-wrapper">
                <p><Moment format="LLLL">{todo.createdAt}</Moment></p>
            </div>
            <div className="actions-wrapper">
                <button className="remove-btn" title="Remove" onClick={onRemoveTodo}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                <button className="edit-btn" title="Edit" onClick={onEditTodo}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button>
                <button className="check-btn" title="Check/Un-Check" onClick={onToggleChecked}>{todo.isDone ?
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> :
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>}</button>
            </div>
        </div>
    )
}
