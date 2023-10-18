import { styled } from "styled-components";
import { colors } from "../../../GlobalStyles/Global.styled";

export const MessageSectionFrom = styled.form`
  width: 736px;
  margin: 0 auto;
`;

export const InputForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
`;

export const FormInput = styled.input`
  width: 360px;
  height: 54px;
  padding: 16.5px 15px;
  border-radius: 14px;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 16.5px 15px;
  min-height: 108px;
  border-radius: 14px;
  margin-bottom: 21px;
  resize: none;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 24px;
  background-color: #ffe66b;
  color: ${colors.black};
  cursor: pointer;
  transition: all.3s ease;

  &:hover,
  &:active {
    background-color: ${colors.black};
    color: white;
  }
`;
