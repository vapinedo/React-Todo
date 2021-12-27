import React, { useEffect, useReducer } from 'react';
import { todoReducer } from '@core/reducers/todoReducer';
import { TodoList } from '@feature/todo/components/TodoList';
import { TodoCreate } from '@feature/todo/components/TodoCreate';

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoPage = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const onCreate = (newTodo) => {
        dispatch({ type: "create", payload: newTodo });
    };

    const onDelete = (todoId) => {
        dispatch({ type: "delete", payload: todoId });
    };

    const onTaskToggle = (todoId) => {
        dispatch({ type: "toggle", payload: todoId });
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

                <TodoList 
                    todos={todos} 
                    onDelete={onDelete} 
                    onTaskToggle={onTaskToggle} />
            </div>

            <TodoCreate onCreate={onCreate} />
        </>
    )
}
