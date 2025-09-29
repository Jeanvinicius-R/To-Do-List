import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, removeTask }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTask={removeTask} />
            ))}
        </ul>
    )
}