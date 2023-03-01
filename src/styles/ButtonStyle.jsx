import styled from "styled-components";

export const MyButton = styled.div`
  margin: 10px 0;
  border: 1px solid gray;
  width: 150px;
  padding: 11px 0;
  border-radius: 100px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: rgb(25, 86, 133);
    cursor: pointer;
    color: white;
    box-shadow: rgba(35, 86, 152, 0.3) 10px 19px 38px,
      rgba(17, 86, 165, 0.22) 10px 15px 12px;
  }
`;
