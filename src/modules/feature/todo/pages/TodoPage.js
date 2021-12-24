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
        <div>
            <h3>Todo List ({todos.length})</h3>
            <hr />

            <ul className="px-4">
                {todos.map(todo => (
                    <li key={todo.id} className="d-flex justify-content-between">
                        <p>{todo.description}</p>
                        <i class='bx bx-trash-alt'></i>
                    </li>
                ))}
            </ul>
        </div>
    )
}
