import React, { useReducer } from 'react';
import { todoReducer } from '@core/reducers/todoReducer';

const initialState = [{
    id: new Date().getTime(),
    description: "Study about RPA",
    done: false
}];

export const TodoPage = () => {

    const [todos] = useReducer(todoReducer, initialState);
    
    return (
        <>
            <div className="row todolist">
                <header className="todolist__header">
                    <h3>Todo List ({todos.length})</h3>

                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#newTaskModal">
                        New Task
                    </button>
                </header>

                <ul>
                    {todos.map(todo => (
                        <li key={todo.id} className="todolist__item">
                            <div>
                                <i className='bx bx-circle todolist__checkitem'></i>
                                {/* <i className='bx bx-check-circle todolist__checkitem'></i> */}
                                <p>{todo.description}</p>
                            </div>
                            <i className='bx bx-trash-alt'></i>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="modal fade" id="newTaskModal" aria-labelledby="newTaskModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="newTaskModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                        ...
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
