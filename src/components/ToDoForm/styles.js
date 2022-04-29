import styled from "styled-components";
import { css } from "styled-components";

export const add_new = styled.input`
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
        padding:10px;
        width: 332px;

      `;

export const Button = styled.button`
 width: 95px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 0 0 17px;
  padding: 9px 32px;
  border-radius: 6px;
  background-color: #0e1649;
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  text-align: center;
  color: #fff;
  text-transform:uppercase;

  ${(props) => props.sampleProp==="pink" && css`background-color:pink;`}
`