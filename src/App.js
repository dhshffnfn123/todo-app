import React, { useReducer, useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT' : // 새로 추가
      // { type: 'INSERT', todo: {id: 1, text: 'todo', checked: false }}
      return todos.concat(action)
  }
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고윳값으로 사용할 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback( // 함수는 항상 효율을 위해 useCallback으로 감싸준다.
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    []);

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id)); // id 값을 받아와서 그 id 값을 제외한 값을 넣는다.
    },
    []);

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? {...todo, checked : !todo.checked } : todo,
        ),
      );
    },
    []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;