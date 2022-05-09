import React, { ChangeEventHandler, FocusEventHandler } from "react";
import styled from "styled-components";
import { ErrorMessage } from "./ErrorMessage";

const InputContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    margin-bottom: 1rem; 
  }

  label>div {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    color: ${props => props.theme.colors.bold};
  }

  input {
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    border-radius: 0.2rem;
    background-color: ${props => props.theme.colors.inputBackground};
    font-size: 1rem;
    min-height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: ${props => props.theme.colors.text}
  }
`

const TextInput: React.FC<{
  inputId: string,
  label: string,
  type?: string,
  left?: React.ReactNode,
  value?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  onBlur?: FocusEventHandler<HTMLInputElement>
  error?: string,
  maxLength?: number,
}> = ({
  inputId,
  label,
  type='text',
  left,
  value,
  onChange,
  onBlur,
  error = ' ',
  maxLength = 255,

}) => {
    return <InputContainer>
      <label htmlFor={inputId}>
        <div>
          { left }
        </div>
        {label}
      </label>
      <input id={inputId} type={ type } value={ value } onChange={ onChange } onBlur={ onBlur } maxLength={ maxLength } />
      <ErrorMessage>
        { error }
      </ErrorMessage>
    </InputContainer>
  }

export { TextInput }