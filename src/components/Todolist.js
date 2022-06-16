import React from 'react';
import Todo from './Todo';
export default function Todolist({ dataList, toggle }) {
  return (
    <div>
      {dataList.map((item) => {
        return <Todo key={item.id} itemTodo={item} toggle={toggle} />;
      })}
    </div>
  );
}
