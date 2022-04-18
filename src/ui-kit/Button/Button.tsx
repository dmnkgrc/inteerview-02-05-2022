import React, { FC } from 'react';
import styled from 'styled-components';

export enum ButtonTypes {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export interface ButtonProps {
  id?: string;
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  className?: string;
  title?: string;
  type?: ButtonTypes.BUTTON | ButtonTypes.RESET | ButtonTypes.SUBMIT;
  disabled?: boolean;
}

const StyledButton = styled.button`
  display: inline-flex;
  background-color: rgb(0, 61, 43);
  min-height: 30px;
  border: none;
  border-radius: 8px;
  padding: 0px 16px;
  margin: 20px 10px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  outline: none;
  transition: background 0.2s ease 0s;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const Button: FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      id={props.id}
      type={props.type}
      title={props.title}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
