import { useState } from 'react'
import * as S  from "./styles.js"
const TodoForm = ({ addNewTodo, ...props}) => {
    const [todoValue, setTodoValue] = useState("");

    const addNewTodoHandler = (event) => {
        addNewTodo({ text: todoValue, 
                 isComplete: false });
    }
    return (
        <>
            <S.add_new type="text" onChange={(event) => setTodoValue(event.target.value)} placeholder="write a new todo..."></S.add_new>
            <S.Button onClick={addNewTodoHandler}>Add</S.Button>
        </>
    )
}

export default TodoForm;