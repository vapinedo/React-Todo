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
            <h3>Todo List</h3>
            <hr />

            <ul>
                <li>Watch React udemy course</li>
                <li>Go to workout</li>
                <li>Spent time with family</li>
                <li>Rest</li>
            </ul>
        </div>
    )
}
