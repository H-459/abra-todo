import { useState } from 'react';
import deleteIcon from "../assets/x-icon_1_2022-04-21/x-icon_1.png"
import * as S from "./styles.js"
const Todo = ({id, text, isComplete, deleteTodo, toggleCompleteTodo, ...props}) => {

    const [show, toggleShow] = useState({visibility:'hidden'})


    const deleteTodoHandler = (event) => {
        event.stopPropagation();
        deleteTodo(id);
    }
    const toggleCompleteHandler = (event) => {
        //console.log(props.isComplete);
        toggleCompleteTodo(id);
    }
    return (
        <S.TodoItemMain>
                <p className="todo_item"
                onMouseEnter = {e => {toggleShow({visibility:'visible'})}}
                onMouseLeave = {e => {toggleShow({visibility: 'hidden'})}}
                >

                <input id={id} type="checkbox" onClick={toggleCompleteHandler}/><S.TodoItem isComplete = {isComplete} htmlFor={id}>{text} </S.TodoItem>
                <S.DeleteToDoIcon onClick={deleteTodoHandler}  style={show}><img src={deleteIcon}/></S.DeleteToDoIcon>
            </p>
        </S.TodoItemMain>
    )
}

export default Todo;