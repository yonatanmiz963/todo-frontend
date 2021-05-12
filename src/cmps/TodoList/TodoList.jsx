import { TodoPreview } from '../TodoPreview';
import './TodoList.scss'


export const TodoList = ({ todos }) => {
    return (
        <div className="todo-list">
            <div className="titles">
                <div className="desc-wrapper">
                    <h3>Description</h3>
                </div>
                <div className="createdAt-wrapper">
                    <h3>Created At</h3>
                </div>
                <div className="actions-wrapper">
                    <h3>Actions</h3>
                </div>
            </div>
            {
                todos && todos.map(todo => <TodoPreview key={todo._id} todo={todo} />)
            }
        </div>
    )
}
