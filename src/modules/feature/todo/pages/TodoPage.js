import React, { useReducer } from 'react';
import { todoReducer } from '@core/reducers/todoReducer';
import { ModalWindow } from '@shared/components/ModalWindow';

const initialState = [{
    id: new Date().getTime(),
    description: "Study about RPA",
    done: false
}];

export const TodoPage = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);
    
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

            <ModalWindow dispatch={dispatch} />
        </>
    )
}
