import React, { useReducer } from 'react';
import { todoReducer } from '@core/reducers/todoReducer';

const initialState = [{
    id: new Date().getTime(),
    description: "Study about RPA",
    done: false
}];

export const TodoPage = () => {

    const [todos] = useReducer(todoReducer, initialState);
    console.log(todos);
    
    return (
        <div className="row todolist">
            <h3>Todo List ({todos.length})</h3>
            <hr />

            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="todolist__item">
                        <div>
                            <i class='bx bx-circle todolist__checkitem'></i>
                            {/* <i class='bx bx-check-circle todolist__checkitem'></i> */}
                            <p>{todo.description}</p>
                        </div>
                        <i class='bx bx-trash-alt'></i>
                    </li>
                ))}
            </ul>
        </div>
    )
}
