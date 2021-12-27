import React from 'react';

export const TodoItem = ({ todo, onDelete, onTaskToggle }) => {
    return (
        <li key={todo.id} className="todolist__item">

            <div onClick={ () => onTaskToggle(todo.id) }>
                <i className={`${ todo.done ? "bx bx-check-circle todolist__checkitem " : "bx bx-circle todolist__checkitem" }`}></i>
                <p className={`${ todo.done && "task-complete" }`}>{todo.description}</p>
            </div>
            
            <i onClick={ () => onDelete(todo.id) } className='bx bx-trash-alt'></i>
        </li>
    )
}
