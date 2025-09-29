import React from 'react';
export default function TodoItem({ todo, removeTask }) {
    return (
        <li>
            {todo.date} -- {todo.hora} -- : {todo.text}
            <button onClick={() => removeTask(todo.id)}>X</button> {/* Botão de "eliminação" */}
        </li>
    )
}