import React from 'react'
import { TodoItem } from '@feature/todo/components/TodoItem';

export const TodoList = ({ todos, onDelete, onTaskToggle }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem 
                    todo={todo} 
                    key={todo.id} 
                    onDelete={onDelete} 
                    onTaskToggle={onTaskToggle} />
            ))}
        </ul>
    )
}
