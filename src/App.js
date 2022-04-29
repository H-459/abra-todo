import logo from './logo.svg';
import headerIcon from "./components/assets/memo-emoji_2022-04-20/memo-emoji.png"
import footerImage from "./components/assets/abra-img_2022-04-20/abra-img.jpg"
import TodoList from './components/TodoList';
import { useState } from 'react';

import TodoForm from './components/ToDoForm';
import * as S from "./styles";

function App() {

  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {
    const newTodos = [...todos];
    newTodos.push(todo)
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);  
    console.log(newTodos);
    setTodos(newTodos);

  }

  const ToggleComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].isComplete = !newTodos[id].isComplete;
    setTodos(newTodos);
  }

  return (
    <div className="ToddApp">
      <S.top_banner>
        <img src={headerIcon}/> <S.header_text>To Do List</S.header_text>
      </S.top_banner>
      <S.margin>
      <S.titleText>My todos: </S.titleText>
      <TodoList todos={todos} 
                deleteTodo={deleteTodo} 
                toggleCompleteTodo={ToggleComplete}/>
      <TodoForm addNewTodo={addNewTodo}/>
      </S.margin>
      <S.footer_section src = {footerImage}></S.footer_section>
    </div>
  );
}

export default App;