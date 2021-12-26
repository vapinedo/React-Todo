import React, { useEffect, useReducer } from 'react';
import { todoReducer } from '@core/reducers/todoReducer';
import { ModalWindow } from '@shared/components/ModalWindow';

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoPage = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const onDelete = (todoId) => {
        const action = { type: "delete", payload: todoId };
        dispatch(action);
    };

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
                            <i onClick={ () => onDelete(todo.id) } className='bx bx-trash-alt'></i>
                        </li>
                    ))}
                </ul>
            </div>

            <ModalWindow dispatch={dispatch} />
        </>
    )
}
