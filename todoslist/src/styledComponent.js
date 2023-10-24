import styled from "styled-components";

export const FormDataContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: auto;
  margin-bottom: 40px;
`;

export const TitleInput = styled.input`
  border: 1px solid #bfbfbf;
  padding: 10px;
  border-radius: 3px;
  font-family: Roboto;
  outline: none;
`;

export const TextareaInput = styled.textarea`
  border: 1px solid #bfbfbf;
  padding: 10px;
  border-radius: 3px;
  font-family: Roboto;
  outline: none;
`;

export const FormButton = styled.button`
  align-self: flex-start;
  border: none;
  padding: 6px 20px;
  font-family: Roboto;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: darkcyan;
`;
