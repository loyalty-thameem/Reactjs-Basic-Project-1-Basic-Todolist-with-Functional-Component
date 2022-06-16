import React from 'react';
import Todolist from './components/Todolist';
export default function App() {
  const [dataTodoList, setDataTodoList] = React.useState([]);
  const inputRef = React.useRef();
  // console.log(inputRef);

  React.useEffect(() => {
    const localDb = localStorage.getItem('TODOLIST');
    setDataTodoList(JSON.parse(localDb));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('TODOLIST', JSON.stringify(dataTodoList));
  }, [dataTodoList]);

  //add method
  function handleClick() {
    const id = Math.random() * 200;
    // console.log(id);
    const val = inputRef.current.value;
    // console.log(val);
    const tempTodo = [...dataTodoList];
    // console.log(tempTodo);
    // tempTodo.push(val)
    tempTodo.push({ id: id, description: val, completed: false });
    setDataTodoList(tempTodo);
    inputRef.current.value = '';
  }
  //find method
  function toggleCompleted(id) {
    const tempTodo = [...dataTodoList];
    const find = tempTodo.find((item) => item.id === id);
    find.completed = !find.completed;
    setDataTodoList(tempTodo);
  }
  //filter remove method
  function handleRemove() {
    const tempTodo = [...dataTodoList];
    const filter = tempTodo.filter((item) => !item.completed);
    setDataTodoList(filter);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={handleClick}>
        Add Todo
      </button>
      <button type="button" onClick={handleRemove}>
        Clear Completed Todo
      </button>
      <br />
      <p>{dataTodoList.filter((todo) => !todo.completed).length} Left to do</p>
      <Todolist dataList={dataTodoList} toggle={toggleCompleted} />
    </div>
  );
}
