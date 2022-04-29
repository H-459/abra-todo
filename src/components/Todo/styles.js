import styled from "styled-components";
import { css } from "styled-components";

export const TodoItemMain = styled.div``;

export const TodoItemCheckbox = styled.input``;

export const TodoItem = styled.label`
  margin: 16px 8px;
  font-family: Arial;
  font-size: 18px;
 ${(props) => props.isComplete === true && css`
    text-decoration:line-through`}`;


export const DeleteToDoIcon = styled.span`
vertical-align:middle;`;