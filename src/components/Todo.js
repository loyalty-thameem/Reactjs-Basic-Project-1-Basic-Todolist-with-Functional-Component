import React from 'react';
export default function Todo({ itemTodo, toggle }) {
  return (
    <div>
      <label>
        {itemTodo.description && (
          <input
            key={itemTodo.id}
            type="checkbox"
            checked={itemTodo.completed}
            onChange={() => toggle(itemTodo.id)}
          />
        )}
        {itemTodo.description}
      </label>
    </div>
  );
}
